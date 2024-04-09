const express = require("express")
const router = express.Router()
const studentController = require("../controller/student.control")

router.route("/entry").post(studentController.creation);
router.route("/find").get(studentController.Table);
router.route("/findname/:id").get(studentController.FindName);


module.exports = router;