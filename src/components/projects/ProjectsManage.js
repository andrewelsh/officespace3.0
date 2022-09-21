import React from "react";
import data from "../../data";



let mappedData = data.users.map((items) => (
  
  <div className="projectCardMainContainer">
  <div className="projectCardTitle">
  <p id="projectsText">
   
  
  {items.company.department.todo ? items.company.department.todo  : null}
        
        </p>
      </div>
      <div className="projectCardTitle">
        <p id="projectsText">
        
        {items.company.department.inprogress ? items.company.department.inprogress  : null }
        
        
        </p>
      </div>

      <div className="projectCardTitle">
        <p id="projectsText"> 
        {items.company.department.completed ? items.company.department.completed  : null}
        
        </p>
      </div>
    </div>
  
  
  
  ));
  const ProjectsManage = () => {
    return (
      <div>
      {mappedData}
      </div>)
};

export default ProjectsManage;
