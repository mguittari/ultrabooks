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
  addNewBook: async (req, res) => {
    const { title, year, author_id } = req.body;

    try {
      const newBook = await BookModel.addNewBook({ title, year, author_id });

      if (!newBook) {
        res.send("Error, impossible to add new book");
      } else {
        res.send(`Created with id : ${newBook.id}`);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
 
};
    
  

module.exports = bookController;