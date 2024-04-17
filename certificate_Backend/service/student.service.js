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

const PdfGen = async (req) => {
  let id = req.params.id;
  const findUserByid = await Student.findById(id);
  if (!findUserByid) {
    return null;
  } else {
    let details = {
      // _id: name._id,
      name: findUserByid.name,
      course_name: findUserByid.course_name,
      duration: findUserByid.duration,
      certificate_no: findUserByid.certificate_no,
    };
    const doc = new PDFkit({
      layout: "portrait",
      size: "a3",
    });

    // const name = "Kavin Kumar",
    //   duration = "December",
    //   certify = "WHYTAP0011";

    doc.pipe(fs.createWriteStream(`${details.name} certificate.pdf`));

    doc.image("assets/Minithasri_page-0001.jpg", 0, 0, { width: 840 });

    doc.fontSize(32).fillColor("white").text(name, 330, 558);

    doc
      .fontSize(20)
      .fillColor("#5B213C")
      .text(
        `has been awarded the Post Graduate certificate with Merit in ${details.course_name} Development`,
        205,
        660,
        { align: "center", width: 440 }
      );

    doc
      .fillColor("#5B213C")
      .fontSize(20)
      .text(`${details.duration} 2023`, 65, 740, { align: "center" });

    doc
      .fillColor("#5B213C")
      .fontSize(12)
      .text(`Reg No: ${details.certificate_no}`, 70, 1100, { align: "right" });

    doc.end();

    if (!details) {
      return null;
    } else {
      return details;
    }
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
// const doc = new PDFkit({
//   layout: "portrait",
//   size: "a3",
// });

// const name = "Kavin Kumar",
//   duration = "December",
//   certify = "WHYTAP0011";

// doc.pipe(fs.createWriteStream(`${name} certificate.pdf`));

// doc.image("assets/Minithasri_page-0001.jpg", 0, 0, { width: 840 });

// doc.fontSize(32).fillColor("white").text(name, 330, 558);

// doc
//   .fontSize(20)
//   .fillColor("#5B213C")
//   .text(
//     `has been awarded the Post Graduate certificate with Merit in Full Stack Development`,
//     205,
//     660,
//     { align: "center", width: 440 }
//   );

// doc
//   .fillColor("#5B213C")
//   .fontSize(20)
//   .text(`${duration} 2023`, 65, 740, { align: "center" });

// doc
//   .fillColor("#5B213C")
//   .fontSize(12)
//   .text(`Reg No: ${certify}`,70,1100, { align: "right" });

// doc.end();

const profile = async (req) => {
  if (req.file) {
    let id = req.params.id;
    let findUser = await Student.findById(id);
    if (!findUser) {
      return null;
    } else {
      let path = "/certificate/" + req.file.filename;
      findUser = await Student.findByIdAndUpdate(
        { _id: id },
        { profile: path },
        { new: true }
      );
      return findUser;
    }
  }
};

module.exports = {
  studentEntry,
  Find,
  PdfGen,
  FindName,
  Delete,
  profile,
};
