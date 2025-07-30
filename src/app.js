const express = require('express');
const connectDB = require('./config/database');

const app = express();



const User = require('./models/user')

app.use(express.json());

app.post("/saveUser", async (req, res) => {

    const user = new User(req.body);



    try {
        await user.save();
        res.send("User saved successfully")
    } catch (err) {
        res.status(500).send("Error" + err.message);
    }



})

app.get("/feed",async (req,res)=>{
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
         res.status(500).send("Error" + err.message);
    }
} )

app.get("/getUser", async (req, res) => {
    try {

        const user = await User.find({ email: req.body.email });

        if (user.length === 0) {
            res.status(404).send("user Not Found")
        }

        else {
            res.send(user);
        }
    } catch (err) {
     res.status(500).send("Error" + err.message);
    }
})



app.delete("/deleteUser",async (req,res)=>{
    try {
        const userId = req.body.userId;
        const deletedUser = await User.findByIdAndDelete(userId)
        if(!deletedUser){
            res.status(400).send("USer not found");
        }else{
            res.send("USer deleted successfully")
        }
    } catch (error) {
               res.status(500).send("Error" + err.message);
    }
})


app.patch("/updateUser",async (req,res)=>{
    const userId = req.body.userId;
    const data = req.body;
    try {
       await User.findByIdAndUpdate(userId,data);
        res.send("user updated successfully");
    } catch (error) {
         res.status(500).send("Error" + err.message);
    }
})

connectDB().then(() => {
    console.log("Database connected succesfully")
    app.listen(7777, () => {
        console.log("server is successfully runing on port 7777");
    })
}).catch(err => {
    console.error("Database connection failed with error:", err);
})

