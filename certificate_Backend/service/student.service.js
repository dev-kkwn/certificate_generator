const { Student } = require("../model/student.model");

const studentEntry = async (req) => {
  let body = req.body;
  let creation = await Student.create(body);
  console.log(creation);
  if (!creation) {
    return null;
  } else {
    return creation;
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

const FindById = async (req) => {
  let id = req.params.id;
  const findUserByid = await Student.findOne({_id : id});
  if (!findUserByid) {
    return null;
  } else {
    return findUserByid;
  }
};

module.exports = {
  studentEntry,
  Find,
  FindById,
};
