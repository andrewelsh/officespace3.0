import React from "react";
import { Link } from "react-router-dom";

const Marketing = (props) => {
  return (
    <div className="employeeCard ">
      <Link
        id="employees"
        to={{
          pathname: `/user${props.id}`,
        }}
      >
        {props.company.department === "Marketing" && (
          <i class="fa fa-user-circle"></i>
        )}
        {props.company.department === "Marketing" && props.firstName}{" "}
        {props.company.department === "Marketing" && props.lastName}
      </Link>
    </div>
  );
};

export default Marketing;
