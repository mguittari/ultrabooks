const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");
const authorController = require ("../controllers/authorController");

router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.post("/books", bookController.addNewBook);
router.put("/books/:id", bookController.updateBook);

router.get("/authors", authorController.getAllAuthors);

module.exports = router;