const {Student} = require("../model/student.model")


const studentEntry = async (req)=>{
    let body = req.params.body;
    let studentCreate = await Student.create(body);
    if(!studentCreate){
        return null;
    }else{
        return studentCreate;
    }
}

module.exports = {
    studentEntry,
}