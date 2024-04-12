const { Student } = require("../model/student.model");

const studentEntry = async (req) => {
  let body = req.body;
  let certify = body.certificate_no;
  console.log("certificate", certify);
  let checkId = await Student.findOne({ certificate_no: certify });
  if (!checkId) {
    let creation = await Student.create(body);
    console.log(creation);
    return creation;
  } else {
    return null;
  }
};

const FindById = async (req) => {
  let id = req.params.id;
  const findUserByid = await Student.findById(id);
  if (!findUserByid) {
    return null;
  } else {
    return findUserByid;
  }
};

const Find = async (req) => {
  let values = await Student.find();
  if (!values) {
    return null;
  } else {
    return values;
  }
};


const FindName = async (req) => {
  let name = req.query;
  let value = await Student.findOne(name);
  if (!value) {
    return null;
  } else {
    return value;
  }
};

const Delete = async (req) => {
  let id = req.params.id;
  let profile = await Student.findById(id);
  if (!profile) {
    return null;
  } else {
    profile = await Student.findByIdAndDelete(id);
    return profile;
  }
};

module.exports = {
  studentEntry,
  Find,
  FindById,
  FindName,
  Delete,
};
