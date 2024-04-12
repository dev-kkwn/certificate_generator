const express = require("express")
const router = express.Router()
const studentController = require("../controller/student.control")

router.route("/entry").post(studentController.creation);
router.route("/generation/:id").get(studentController.certificateGeneration);
router.route("/find").get(studentController.Table);
router.route("/findname").get(studentController.FindByName);
router.route("/remove/:id").delete(studentController.ProfileDelete);

module.exports = router;