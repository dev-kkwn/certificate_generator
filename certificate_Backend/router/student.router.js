const express = require("express")
const router = express.Router()
const studentController = require("../controller/student.control")
const Upload = require("../middleware/profile")

router.route("/entry").post(studentController.creation);
router.route("/generation/:id").get(studentController.certificateGeneration);
router.route("/find").get(studentController.Table);
router.route("/findname").get(studentController.FindByName);
router.route("/remove/:id").delete(studentController.ProfileDelete);
router.route("/upload/:id").put(Upload.single("profile"),studentController.fileupload); 

module.exports = router;