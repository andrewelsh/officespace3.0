import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import data from "../data";

function Header() {
  let style = { color: "white", margin: "10px" };

  let nav2style = { "border-bottom": "1px black solid", margin: "0" };
  let placeholder = `Search All ${data.users.length} Users ...`;
  return (
    <>
      {" "}
      <Nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link
          id="header"
          to="/app"
          className="navbar-brand"
          state={localStorage.length - 1}
        >
          Office Space
        </Link>
        <div>
          <i id="white" class="fa fa-search"></i>;
          <input placeholder={placeholder} />
        </div>
        <p id="headerUser">
          Welcome Back - GUEST <i class="fa fa-user-circle" style={style}></i>
        </p>
      </Nav>
      <div id="header2" style={nav2style} className="">
        <ul>
          <div id="dropdownFile" class="dropdown">
            <span>
              <li className="itemFile">File</li>
            </span>
            <div class="dropdown-content">
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">Admin Account</p>
              </Link>
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">Add New User</p>
              </Link>
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">Update User Account</p>
              </Link>
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">Remove User Account</p>
              </Link>
            </div>
          </div>

          <div id="dropdownOptions" class="dropdown">
            <span>
              <li className="itemOptions">Options</li>
            </span>
            <div class="dropdown-content">
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">User Account</p>
              </Link>
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">User Settings</p>
              </Link>
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">Customize Website</p>
              </Link>
              <Link id="dropdownText" to="/admin">
                <p id="dropdownText">Change Password</p>
              </Link>
            </div>
          </div>
          <Link to="/loggedout">
            <li className="itemLogOut">
              <button class="btn btn-dark">LogOut</button>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
