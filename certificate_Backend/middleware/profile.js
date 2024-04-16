const multer = require("multer");

const FileStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/certificate");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = "certificate";
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: FileStore });

module.exports = upload;