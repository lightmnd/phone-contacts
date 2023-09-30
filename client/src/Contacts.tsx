import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
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
  return (
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
            {contacts?.map((contact) => (
              <tr key={contact.name}>
                <td>{contact.surname}</td>
                <td>{contact.name}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.address}</td>
                <td>{contact.lat + " - " + contact.lon}</td>
                <td>{contact.otherInfo}</td>
                <td>
                  <Link to="/update" className="btn btn-success">
                    Update
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
