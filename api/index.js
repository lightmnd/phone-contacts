const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const elasticsearch = require("elasticsearch");
const Contact = require("./models/Contact.js");
const elasticClient = new elasticsearch.Client({
  host: "localhost:9200",
});

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://lightmnd:FLF5CI6qqbZqowFS@phone-contacts.prqnq8n.mongodb.net/"
);

app.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send("Error:", error);
    console.log(error);
  }
});

app.get("/contacts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const contact = await Contact.findById({ _id: id });
    res.status(200).json(contact);
  } catch (error) {
    // res.status(500).send("Error:", error);
    console.log(error);
  }
});

app.post("/createContact", async (req, res) => {
  const contact = new Contact(req.body);
  try {
    elasticClient.index(
      {
        index: "contacts",
        type: "contactType",
        id: req.body.id,
        body: req.body,
      },
      (err, resp, status) => {
        console.log("---->", err);
        console.log("res---->", resp);
        console.log("status->", status);
        if (err) {
          console.log(err);
        } else {
          return res.json(contact);
        }
      }
    );
    await contact.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    // res.status(400).send("Error:", error);
    console.log(error);
  }
});

app.put("/updateContact/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Contact.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).send("User has been updated.");
  } catch (error) {
    // res.status(400).send("Error:", error);
    console.log(error);
  }
});

app.delete("/deleteContact/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Contact.findByIdAndDelete({ _id: id });
    res.status(200).send("User has been deleted.");
  } catch (error) {
    // res.status(400).send("Error:", error);
    console.log(error);
  }
});

app.get("/search", async (req, res) => {
  try {
    const { query } = req.query.query;

    const response = await elasticClient.search({
      index: "contacts",
      body: {
        query: {
          bool: {
            should: [
              { match: { searchText: query } }, // full-text search on alphanumerical fields
              { term: { phoneNumber: query } }, // exact match on phone number
            ],
          },
        },
      },
    });

    const searchResults = response.hits.hits.map((hit) => hit._source);
    res.json(searchResults);
  } catch (error) {
    console.error("Error during search", error);
    res.status(500).json({ error: "Error during search." });
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
