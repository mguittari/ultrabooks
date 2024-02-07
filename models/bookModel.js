const database = require("../database/database");

class bookModel {
  constructor(id, title, author_id) {
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
  }
}

module.exports = bookModel;