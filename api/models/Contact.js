const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  phoneNumber: {
    type: String,
    unique: true,
  },
  address: { type: String },
  //   geodata: {
  lat: { type: String },
  lon: { type: String },
  //   },
  otherInfo: { type: String },
  searchText: { type: String },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

module.exports = ContactModel;
