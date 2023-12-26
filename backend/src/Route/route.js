const express = require("express");
const router= express.Router();
router.post('/test',function (req, res){
    console.log(req.body);
    res.send({message:"i am get api"});
})
module.exports= router;