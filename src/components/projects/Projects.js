import React from "react";
import data from "../../data";

let mappedData = data.users.map((items) => (
  <div className="projectCardMainContainer">
    <div className="projectCardTitle">
      {
        // These 6 trinary operators provide the border and only display items within the array that exsist.  TODO INPROGRESS & COMPLETED
      }

      {
        // TODO
      }
      <p
        id="projectsText"
        style={
          items.company.department.todo
            ? { border: "2px solid steelblue", padding: "5px" }
            : null
        }
      >
        {items.company.department.todo ? items.company.department.todo : null}
      </p>
    </div>

    {
      // INPROGRESS
    }
    <div className="projectCardTitle">
      <p
        id="projectsText"
        style={
          items.company.department.inprogress
            ? { border: "2px solid steelblue", padding: "5px" }
            : null
        }
      >
        {items.company.department.inprogress
          ? items.company.department.inprogress
          : null}
      </p>
    </div>

    {
      // COMPLETED
    }
    <div className="projectCardTitle">
      <p
        id="projectsText"
        style={
          items.company.department.completed
            ? { border: "2px solid steelblue", padding: "5px" }
            : null
        }
      >
        {items.company.department.completed
          ? items.company.department.completed
          : null}
      </p>
    </div>
  </div>
));
const Projects = () => {
  return <div>{mappedData}</div>;
};

export default Projects;
