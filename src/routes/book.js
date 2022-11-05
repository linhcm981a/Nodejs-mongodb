const router = require("express").Router();
const bookController = require("../controllers/bookController");

//ADD A BOOK
router.post("/", bookController.addBook);
//GET ALL BOOK
router.get("/", bookController.getAllBooks);
//GET AN BOOK
router.get("/:id", bookController.getAnBook)
//update Book
router.put("/:id", bookController.updateBook)
//DELETE A BOOK
router.delete("/:id", bookController.deleteBook)

module.exports = router;
