const express=require("express");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"welcome to the bitverse page"});
})


app.listen(8080,(req,res)=>{
    console.log(`listening on port 8080`);
})