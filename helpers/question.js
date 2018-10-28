let db = require('../models');

module.exports = {
    createQuestion(req, res) {
        db.Question.create(req.body)
            .then(question => {
                res.json(question)
            })
            .catch(error => {
                res.send(error)
            })
    },
    getAllQuestion(req, res) {
        db.Question.find()
            .then(questions => {
                res.json(questions)
            })
            .catch(error => {
                res.send(error)
            })
    },
    updateQuestion(req, res) {
        db.Question.findByIdAndUpdate(req.params.questionID, req.body, {new: true})
            .then(updatedQuestion => {
                res.json(updatedQuestion)
            })
            .catch(error => {
                res.sendFile(error)
            })
    }
};