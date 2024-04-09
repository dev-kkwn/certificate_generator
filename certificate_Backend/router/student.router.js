const express = require("express")
const router = express.Router()
const studentController = require("../controller/student.control")

router.route("/entry").post(studentController.creation);

module.exports = router;