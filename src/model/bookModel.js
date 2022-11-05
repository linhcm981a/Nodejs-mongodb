const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    publishedDate: {
        type: String,
    },
    genres: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },

});

let Book = mongoose.model('Book', bookSchema);

module.exports = { Book }


