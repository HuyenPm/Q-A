let mongoose = require('mongoose');

let questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: 'Question is required!'
    },
    vote: {
        type: Number,
        default: 0
    },
    user: {
        type: String,
        default: 'Ẩn danh'
    },
    postTime: Date
});

let Question = mongoose.model("Question", questionSchema);

module.exports = Question;