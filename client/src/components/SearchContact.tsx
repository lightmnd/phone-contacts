import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { Contact } from "../Contacts";

const SearchContact = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/search?query=${searchQuery}`
      );
      setSearchResults(res.data);
    } catch (error) {
      console.error("Error during search", error);
    }
  };

  return (
    <div className="d-flex">
      <input
        className="form-control"
        type="text"
        placeholder="find a contact"
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearchSubmit} className="btn btn-success">
        Search
      </button>
      <div className="resultContainer">
        <ul className="list-group m-2">
          {searchResults?.map((result: Contact) => (
            <li className="list-group-item p-2" key={result?.surname}>
              {result?.surname} {result?.name} - {result?.phoneNumber}
              {/* Other contacts info... */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchContact;
