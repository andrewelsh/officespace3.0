import React from "react";
import { Link } from "react-router-dom";

const Management = (props) => {
  return (
    <div className="employeeCard">
      <Link
        id="employees"
        to={{
          pathname: `/user${props.id}`,
        }}
      >
        {" "}
        {props.company.department === "Product Management" && (
          <i class="fa fa-user-circle"></i>
        )}
        {props.company.department === "Product Management" && props.firstName}{" "}
        {props.company.department === "Product Management" && props.lastName}
      </Link>
    </div>
  );
};

export default Management;
