const studentServices =require("../service/student.service")

const creation = async(req,res)=>{
    let data = await studentServices.studentEntry(req);
    if(!data){
        res.status(401).send({message : "Student data is missing"});
    }else{
        res.status(201).send({message : "Data entered successfully"});
    }
}

module.exports={
    creation,
}