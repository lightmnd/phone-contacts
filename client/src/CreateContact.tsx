import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

const CreateContact = () => {
  const [contact, setContact] = useState<any>();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  console.log(contact);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/createContact", contact);
    } catch (error) {
      console.log("Submit error:", error);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h3>Add Contact</h3>
          <div className="mb-2">
            <label htmlFor="">Surname</label>
            <input
              name="surname"
              type="text"
              placeholder="Enter Surname"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Ph. Number</label>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Enter Phone Number"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              name="address"
              type="text"
              placeholder="Enter Address"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Lat</label>
            <input
              name="lat"
              type="text"
              placeholder="Enter Latitude"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Lon</label>
            <input
              name="lon"
              type="text"
              placeholder="Enter Longitude"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Other Info</label>
            <input
              name="otherInfo"
              type="text"
              placeholder="Enter Other Info"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-success">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
