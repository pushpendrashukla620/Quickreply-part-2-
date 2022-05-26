const express = require('express');
const { getProperty, addProperty, deleteProperty } = require('../controller/proprty.controller');

const router = express.Router();


router.get("/getproperty",getProperty);
router.post("/addproperty",addProperty)
router.delete("/deleteproperty/:id",deleteProperty)


module.exports = router;
