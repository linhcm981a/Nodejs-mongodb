const { Author } = require("../model/authorModel");
const { Book } = require("../model/bookModel");

const authController = {
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    getAllAuthors: async (req, res) => {
        try {
            const authors = await Author.find();
            res.json(authors);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getAnAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({ $set: req.body });
            res.status(200).json("Update successFully!");
        } catch (err) {
            res.status(500).json(err);
        }
    },
    deleteAuthor: async (req, res) => {
        try {
            await Book.updateMany(
                {
                    books: req.params.id,
                },
                {
                    author: null,
                }
            );
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successFully !");
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = authController;
