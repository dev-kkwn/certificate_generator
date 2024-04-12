const e = require("express");
const StudentServices = require("../service/student.service");

const creation = async (req, res) => {
  let data = await StudentServices.studentEntry(req);
  if (data == null) {
    res.status(401).send({ message: "Student data is already exists" });
  } else {
    res.status(201).send(data);
  }
};

const certificateGeneration = async (req, res) => {
  let name = await StudentServices.FindById(req);
  if (name != null) {
    let details = {
      _id: name._id,
      name: name.name,
      course_name: name.course_name,
      duration: name.duration,
      certificate_no: name.certificate_no,
    };
    if (!name) {
      res.status(401).send({ message: "user not found" });
    } else {
      res.status(201).send(details);
    }
  } else {
    res.status(401).send({ message: "user not found" });
  }
};

const Table = async (req, res) => {
  let tableValue = await StudentServices.Find(req);
  if (tableValue != null) {
    res.status(200).send(tableValue);
  } else {
    res.status(401).send({ message: "user not found" });
  }
};

const FindByName = async(req,res)=>{
  let studentName = await StudentServices.FindName(req);
  if(studentName != null){
    res.status(201).send(studentName);
  }else{
    res.status(401).send({message : "UserName not exists"});
  }
}

const ProfileDelete = async(req,res)=>{
  let profile = await StudentServices.Delete(req);
  if(profile != null){
    res.status(201).send({message : "User deleted Successfully..."});
  }else{
    res.status(401).send({message:"User not Found"});
  }
}


module.exports = {
  creation,
  certificateGeneration,
  Table,
  FindByName,
  ProfileDelete,
};
