import { Link } from "react-router-dom";
import React from "react";
import ShowData from "./showData";
  
const PropertyList = (props) => {

  const {property}=props;



  return (
    <div className="list">
        {property.map((propertyObject,index) => {
        
            return (
                <ShowData propertyobject={propertyObject}
           
                key={index}
                />
            )
        })}
       <Link to="/add"><h1>Add property Details</h1></Link>
    </div>
    );
};
  
export default PropertyList;