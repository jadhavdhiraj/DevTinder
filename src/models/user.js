const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type:String
    },
    lastName :{
        type:String
    },
    email:{
        type:String
    }
})
const User = mongoose.model("DhirajUser",userSchema);
module.exports = User;     

