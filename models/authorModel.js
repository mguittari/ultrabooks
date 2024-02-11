const database = require("../database/database");

class AuthorModel {
  constructor(id, firstname, lastname,birthday, is_dead) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.is_dead = is_dead;
  }

  static async getAllAuthors() {
    const connection = await database.getConnection();
    const [rows] = await connection.execute("SELECT * FROM author");
    connection.release();
    return rows;
  };
};

module.exports = AuthorModel;

