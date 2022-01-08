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
module.exports = router;