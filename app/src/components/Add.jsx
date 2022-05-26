import { Link} from "react-router-dom";
import React ,{useState} from "react";
import { useNavigate } from "react-router";
  
const Add = (props) => {
  
  const [form, setForm] = useState({
    name: "",
    description: "",
    size: "",
  });
  const navigate = useNavigate();
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("/api/property/addproperty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

  
    setForm({ name: "", position: "", level: "" });
    navigate("/listofproperty");
    window.location.reload(false);
    
  }

  return (
    <div>
      <div>
       <form onSubmit={onSubmit}>
         <label htmlFor="name">Name</label>
         <input type="text" name="name" id="name" value={form.name} onChange={(e) => updateForm({name:e.target.value})}/>
         
         <br />

         <label htmlFor="description">Description</label>
         <input type="text" name="description" id="description" value={form.description} onChange={(e) => updateForm({description:e.target.value})}/>
         
         <br />

         <label htmlFor="size">Size</label>
         <input type="number" name="size" id="size" value={form.size} onChange={(e) => updateForm({size:e.target.value})}/>
         
         <br />
        
         

         <input type="submit" />

       </form>
      </div>
      <Link to="/listofproperty"><h1>To see Added Data Click here</h1></Link>
      <Link to="/">Home</Link>

    </div>
  );
};
  
export default Add;