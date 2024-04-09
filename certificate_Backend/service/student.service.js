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

const Find = async (req)=>{
    let values = await Student.find();
    if(!values){
        return null
    }else{
        return values;
    }
}

const FindByName = async (req) => {
  let name = req.query;
  const findUserByName = await Student.findOne(name);
  console.log("first name enter",findUserByName);
  if (!findUserByName) {
    return null;
  } else {
    return findUserByName;
  }
};

module.exports = {
  studentEntry,
  Find,
  FindByName,
};
