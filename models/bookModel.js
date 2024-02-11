const database = require("../database/database");

class BookModel {
  constructor(id, title, year, author_id) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.author_id = author_id;
  }

  static async getBooks() {
    const connection = await database.getConnection();
    const [rows] = await connection.execute("SELECT * FROM book");
    connection.release();
    return rows;
  };

  static async getBookById(bookId) {
    const connection = await database.getConnection();
    const [book] = await connection.execute("SELECT * FROM book WHERE id = ?", [bookId]);
    connection.release();

    if (book.length === 1) {
      const { id, title, year, author_id } = book[0];
      return new BookModel(id, title, year, author_id);
      
    } else {
      throw new Error("Book not found");
  }
};

static async addNewBook({ title, year, author_id }) {
    const connection = await database.getConnection();
    try {
      const [result] = await connection.execute(
        "INSERT INTO book (title, year, author_id) VALUES (?, ?, ?)",
        [title, year, author_id]
      );
      connection.release();
      if (result.affectedRows !== 1) {
        throw new Error("Error, impossible to add new book");
      }
      const newBookId = result.insertId;
      // Récupérez les données du livre nouvellement créé en utilisant getBookById
      return await BookModel.getBookById(newBookId);
    } catch (error) {
      connection.release();
      throw error;
    }
  };

  static async updateBook(id, { title, year, author_id }) {
    const connection = await database.getConnection();
    try {
      const [result] = await connection.execute(
        "UPDATE book SET title = ?, year = ?, author_id = ? WHERE id = ?",
        [title, year, author_id, id]
      );
      connection.release();
      if (result.affectedRows !== 1) {
        throw new Error(`Error updating book`);
      }
      return true; // Indiquer que la mise à jour a été effectuée avec succès
    } catch (error) {
      connection.release();
      throw error;
    }
  }

};
  


module.exports = BookModel;