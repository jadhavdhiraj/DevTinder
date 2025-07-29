const express = require('express');
const connectDB =require('./config/database');

const app = express();
const User = require('./models/user')

app.post("/saveUser",async (req,res)=>{

const user = new User({
    firstName:"Dhiraj",
    lastName:"Jadhav",
   // email:"jadhavdhieaj"
})


try{
await user.save();
res.send("User saved successfully")
}catch(err){
res.status(500).send("Error"+ err.message);
}



})



connectDB().then(()=>{
    console.log("Database connected succesfully")
    app.listen(7777,()=>{
    console.log("server is successfully runing on port 7777");
})
}).catch(err=>{
    console.error("Database connection failed with error:",err);
})

