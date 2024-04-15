const { Student } = require("../model/student.model");
const PDFkit = require("pdfkit");
const fs = require("fs");

const studentEntry = async (req) => {
  let body = req.body;
  let certify = body.certificate_no;
  let checkId = await Student.findOne({ certificate_no: certify });
  if (!checkId) {
    let creation = await Student.create(body);
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

//pdf generator....
const doc = new PDFkit({
  layout: "portrait",
});

const name = "kaushik",
  duration = "December";

doc.pipe(fs.createWriteStream(`${name} certificate.pdf`));

doc.image("assets/Minithasri_page-0001.jpg", 25, 0, { width: 560 });

doc.fontSize(25).fillColor("white").text(name, 65, 370, { align: "center" });

doc
  .fontSize(14)
  .fillColor("#5B213C")
  .text(
    `has been awarded the Post Graduate certificate with Merit in Full Stack Development`,
    160,
    440,
    { align: "center", width: 300 }
  );

doc.fillColor("#5B213C").fontSize(14).text(`${duration} 2023`,70,500,{align:"center"});

doc.end();

module.exports = {
  studentEntry,
  Find,
  FindById,
  FindName,
  Delete,
};
