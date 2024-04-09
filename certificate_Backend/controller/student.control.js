const e = require("express");
const StudentServices =require("../service/student.service")

const creation = async(req,res)=>{
    let data = await StudentServices.studentEntry(req);
    if(data != null){
        res.status(201).send(data);
    }else{
        res.status(401).send({message : "Student data is missing"});
    }
}

const Table = async(req,res)=>{
    let tableValue = await StudentServices.Find(req);
    if(tableValue!=null){
        res.status(200).send(tableValue);
    }else{
        res.status(401).send({message : "user not found"});
    }
}

const FindName = async(req,res)=>{
    let name = await StudentServices.FindByName(req);
    console.log("name----------->>",name);

    if(name!=null){
        res.status(201).send(name);
    }else{
        res.status(401).send({message : "user not found"});
    }
}

module.exports={
    creation,Table,FindName
}