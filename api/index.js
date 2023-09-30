const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://lightmnd:FLF5CI6qqbZqowFS@phone-contacts.prqnq8n.mongodb.net/"
);

app.post("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send("Error:", error);
    console.log(error);
  }
});

app.post("/createContact", async (req, res) => {
  const contact = new Contact(req.body);
  try {
    await contact.save();
    res.status(201).send("User has been created.");
  } catch (error) {
    // res.status(400).send("Error:", error);
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
