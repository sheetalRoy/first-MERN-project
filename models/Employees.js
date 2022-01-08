const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    }
});
const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;