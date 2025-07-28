const express = require('express');

const app = express();



app.use((req,res)=>{
    res.send("Hello from the express servewwr");
})

app.listen(4000,()=>{
    console.log("server is successfully runing");
})