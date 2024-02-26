const express=require("express");
const { connection, dbconnection } = require("./configs/datab");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"welcome to the bitverse page"});
})


app.listen(8080,async(req,res)=>{
    try{
        console.log(`connected to mongodb successfully`)

    }
    catch(err){
        await dbconnection;
        console.log(err)
        console.log("error while connecting")
    }
    console.log(`listening on port 8080`);
})