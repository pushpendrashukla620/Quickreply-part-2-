const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
    }, 
    description:{
        type : String ,
        required : true ,

    },
    size:{
        type : Number ,
        required : true ,
    }
    
})


const Property = mongoose.model("Property", propertySchema);

module.exports ={Property}