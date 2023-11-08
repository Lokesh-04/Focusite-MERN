import express from "express";

const port = 3000;
const app = express();


app.get("/", (req, res)=>{
    res.send("venu and avinash lets complete this project 🔥")
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});