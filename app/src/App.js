import React, { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import Add from "./components/Add";
// import ContactUs component
import PropertyList from "./components/PropertyList";

const App = () => {


  const [records, setRecords] = useState([]);
 
  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`/api/property/getproperty`);
      
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      setRecords(records.data);
    }
  
    getRecords();
  
    return;
  }, [records.length]);


  return (
    <div className="App">
      {<h1 className="App">Hello </h1>}

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="add/"
            element={
              <Add
                propertydetails={records}
              />
            }
          />
          <Route
            exact path="/listofproperty"
            element={
              <PropertyList
                property={records}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
