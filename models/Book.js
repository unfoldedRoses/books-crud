//Book schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true, maxLength: 100 },
    author: { type: String, required: true, maxLength: 100 },
    summary: { type: String, required: true, maxLength: 500 },
 
});

// Export model
module.exports = mongoose.model("Book", BookSchema);
