const AuthorModel = require("../models/authorModel");

const authorController = {
  getAllAuthors: async (req, res) => {
    try {
      const authors = await AuthorModel.getAllAuthors();
      const authorsWithNewDateFormat = authors.map(author => {
        const formattedDateOfBirth = new Date(author.birthday).toLocaleDateString("fr-FR", { year: 'numeric', month: '2-digit', day: '2-digit' });
        return {
          ...author,
          birthday: formattedDateOfBirth
          // Ajoutez d'autres propriétés au besoin
        };
      });

      res.json(authorsWithNewDateFormat);
      
    } catch (error) {
      res.status(422).json({ error: "Unprocessable Entity" });
    }
  }
};

module.exports = authorController;