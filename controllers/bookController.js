const BookModel = require("../models/bookModel");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await BookModel.getBooks();
      res.json(books);
    } catch (error) {
      res.status(422).json({ error: "Unprocessable Entity" });
    }
  },
  getBookById: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await BookModel.getBookById(id);
      res.json(book);
      console.log(book);
    } catch (error) {
      res.status(404).json({ error: "Book not found" });
    }
  },
}

module.exports = bookController;