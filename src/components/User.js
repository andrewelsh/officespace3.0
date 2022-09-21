import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";
import "./componets.css";
import Header from "./Header";

const User = () => {
  const { id } = useParams();

  // scroll to the top of the page
  window.scrollTo(0, 0);

  const user = data.users.find((items) => items.id === parseInt(id));
  let workLocation = data.users[id].workFromHome ? "Working From Home" : null;
  const {
    firstName,
    lastName,
    age,
    email,
    phone,
    username,
    address,
    postalCode,
    company,
  } = user;

  return (
    <div>
      <Header />
      <div>
        <div className="userMainContainer">
          <div>
            <img
              className="userImage"
              src={user.image}
              alt={"image of " + firstName + lastName}
            />

            <div className="wfh">{workLocation}</div>
          </div>
          <div className="user">
            <p id="name">
              {firstName} {lastName}
            </p>

            <p>
              <span id="strong">Department:</span> {company.department}
              <br />
              <span id="strong">Job Title:</span> {company.title}
              <br />
              <span id="strong">Email: </span>
              {email}
              <br />
              <span id="strong">Phone Number: </span> {phone}{" "}
            </p>
            <span id="strong">Address :</span>
            <p>
              {address.address}
              <br />
              {address.city} - (Postal Code) {address.postalCode}
            </p>
          </div>
        </div>
      </div>
      <div className="userTextAreaMainContainer">
        <textarea
          rows="4"
          cols="40"
          className="userTextArea"
          placeholder="send a direct message ..."
        />

        <button className="btn btn-dark">Send</button>
        <Link to="/app">
          <button className="btn btn-danger">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
