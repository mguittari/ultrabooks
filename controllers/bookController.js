const BookModel = require("../models/bookModel");

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await BookModel.getBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
}

module.exports = bookController;