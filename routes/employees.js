const express = require('express');
const EmployeeModel = require('../models/Employees');
const router = express.Router();

router.get('/', (req, res) => {
    EmployeeModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json({msg: 'Data found', result} );
        }
    });
});
router.post("/createEmployee", async (req, res) => {
    const emp = req.body;
    const newEmp = new EmployeeModel(emp);
    await newEmp.save();
    res.json({msg: 'Save Success', emp}) 
});
module.exports = router;