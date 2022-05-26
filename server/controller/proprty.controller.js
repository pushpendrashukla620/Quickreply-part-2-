const { Property } = require("../model/property")




const getProperty=async (req,res)=>{
    try{
        const gotProperty=await Property.find();
        if (!gotProperty && !gotProperty.length) {
            return res.status(404).json({ message: "Resource not found" });
        }
        return res.status(200).json({ message: "success",data:gotProperty });

    }catch(error){
        console.log(error)
        return res.status(400).json({ message: "Resource not found" });
        

    }
    
}
const addProperty=async (req,res)=>{
    try{
        const addedproperty=await Property.create(req.body);
        if (!addedproperty) {
            return res.status(404).json({ message: "Resource not found....." });
        }
   
        return res.status(200).json({ message: "success",data:addedproperty });

    }catch(error){
        console.log(error)
        return res.status(400).json({ message: "Resource not found", error:error.message});
        

    }
    
}
const deleteProperty=async (req,res)=>{
    try{
        const deletedProperty=await Property.findByIdAndDelete(req.params.id);
        if (!deleteProperty.length) {
            return res.status(404).json({ message: "Resource not found....." });
        }
   
   
        return res.status(200).json({ message: "success",data:deletedProperty });

    }catch(error){
        console.log(error)
        return res.status(400).json({ message: "Resource not found" });
        

    }
    
}



module.exports={
    getProperty,
    addProperty,
    deleteProperty
}