import React from "react";

const UpdateContact = () => {
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h3>Update Contact</h3>
          <div className="mb-2">
            <label htmlFor="">Surname</label>
            <input
              type="text"
              placeholder="Enter Surname"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Ph. Number</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Lat</label>
            <input
              type="text"
              placeholder="Enter Latitude"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Lon</label>
            <input
              type="text"
              placeholder="Enter Longitude"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Other Info</label>
            <input
              type="text"
              placeholder="Enter Other Info"
              className="form-control"
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContact;
