const mongoose = require('mongoose')


const connectDB = async()=>
{
   await mongoose.connect("mongodb+srv://akshayk47:akshay47@bayorg.lkdzx3q.mongodb.net/test");

}





module.exports = connectDB;





