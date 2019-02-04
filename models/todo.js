var mongoose = require('mongoose');

var todoShema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    crated_date: {
        type: Date,
        default: Date.now
    }
});

var Todo = mongoose.model('Todo', todoShema);

module.exports = Todo;