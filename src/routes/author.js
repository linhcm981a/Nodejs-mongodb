const authController = require("../controllers/authorController")
const router = require("express").Router();

////ADD AUTHOR
router.post("/", authController.addAuthor);
///GET ALL AUTHOR
router.get("/", authController.getAllAuthors);
//GET AN AUTHOR
router.get("/:id", authController.getAnAuthor);
///UPDATE AUTHOR
router.put("/:id", authController.updateAuthor);
//DELETE A AUTHOR
router.delete("/:id", authController.deleteAuthor)

module.exports = router;