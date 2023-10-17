import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contact } from "./Contacts";
import axios from "axios";

const UpdateContact = () => {
  const [contact, setContact] = useState<Contact>({
    _id: null,
    surname: "",
    name: "",
    phoneNumber: "",
    address: "",
    // geodata: {
    lat: "",
    lon: "",
    // },
    otherInfo: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await axios.get(`http://localhost:3001/contacts/${id}`);
        setContact(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleUpdateSubmit = async (
    e: FormEvent<HTMLFormElement>
    // contact: Contact
  ) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3001/updateContact/${id}`,
        // contact
        {
          name: contact.name,
          surname: contact.surname,
          phoneNumber: contact.phoneNumber,
          address: contact.address,
          lat: contact.lat,
          lon: contact.lon,
          otherInfo: contact.otherInfo,
        }
      );
      setContact(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const { surname, name, phoneNumber, address, lat, lon, otherInfo } = contact;

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={(e) => handleUpdateSubmit(e)}>
          <h3>Update Contact</h3>
          <div className="mb-2">
            <label htmlFor="">Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Enter Surname"
              className="form-control"
              defaultValue={surname}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="form-control"
              defaultValue={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Ph. Number</label>
            <input
              name="phoneNumber"
              type="tel"
              placeholder="3493873874"
              pattern="[0-9]{10}"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              defaultValue={address}
              name="address"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Lat</label>
            <input
              type="text"
              placeholder="Enter Latitude"
              className="form-control"
              name="lat"
              defaultValue={lat}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Lon</label>
            <input
              type="text"
              placeholder="Enter Longitude"
              className="form-control"
              name="lon"
              defaultValue={lon}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Other Info</label>
            <input
              type="text"
              placeholder="Enter Other Info"
              className="form-control"
              name="otherInfo"
              defaultValue={otherInfo}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContact;
