import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchContact from "./components/SearchContact";

export type Contact = {
  _id: null | undefined | string;
  surname: string;
  name: string;
  phoneNumber: string;
  address: string;
  lat: string;
  lon: string;
  otherInfo: string;
};

const Contacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
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
    },
  ]);

  async function fetchContacts() {
    const res = await axios.get("http://localhost:3001/contacts");
    setContacts(res.data);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDeleteContact = async (id: string | null | undefined) => {
    await axios.delete(`http://localhost:3001/deleteContact/${id}`);
    await fetchContacts();
  };

  return (
    <>
      <h2>Phone Contacts</h2>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <SearchContact />
      </div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-90 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">
            Add
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Surname</th>
                <th>Name</th>
                <th>Ph. Number</th>
                <th>Address</th>
                <th>{"Geo Data [Lat, Lon]"}</th>
                <th>Other Info</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 &&
                contacts?.map((contact) => (
                  <tr key={contact.name}>
                    <td>{contact.surname}</td>
                    <td>{contact.name}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.address}</td>
                    <td>{contact.lat + " - " + contact.lon}</td>
                    <td>{contact.otherInfo}</td>
                    <td>
                      <Link
                        to={`/update/${contact._id}`}
                        className="btn btn-success"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDeleteContact(contact._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
