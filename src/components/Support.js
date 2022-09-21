import React from "react";
import { Link } from "react-router-dom";

const Support = (props) => {
  return (
    <div className="employeeCard">
      <Link
        id="employees"
        to={{
          pathname: `/user${props.id}`,
        }}
      >
        {props.company.department === "Support" && (
          <i class="fa fa-user-circle"></i>
        )}
        {props.company.department === "Support" && props.firstName}{" "}
        {props.company.department === "Support" && props.lastName}
      </Link>
    </div>
  );
};

export default Support;
