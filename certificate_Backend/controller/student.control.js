const e = require("express");
const StudentServices = require("../service/student.service");

const creation = async (req, res) => {
  let data = await StudentServices.studentEntry(req);
  if (data == null) {
    res.status(401).send({ message: "Student data is already exists" });
  } else {
    res.status(201).send({ id: data._id });
  }
};

const certificateGeneration = async (req, res) => {
  let name = await StudentServices.PdfGen(req);
  if (name != null) {
    res.status(201).send(name);
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

const FindByName = async (req, res) => {
  let studentName = await StudentServices.FindName(req);
  if (studentName != null) {
    res.status(201).send(studentName);
  } else {
    res.status(401).send({ message: "UserName not exists" });
  }
};

const ProfileDelete = async (req, res) => {
  let profile = await StudentServices.Delete(req);
  if (profile != null) {
    res.status(201).send({ message: "User deleted Successfully..." });
  } else {
    res.status(401).send({ message: "User not Found" });
  }
};

const fileupload = async (req,res)=>{
  let upload = await StudentServices.profile(req)
  if(upload){
    res.status(200).send({upload});
  }else{
    res.status(400).send({message:"file not found"})
  }
}

module.exports = {
  creation,
  certificateGeneration,
  Table,
  FindByName,
  ProfileDelete,
  fileupload,
};
