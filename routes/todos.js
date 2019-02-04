var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todos')

// GET ROUTE & Create ROUTE
router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo)

// SHOW ROUTE & UDATE ROUTE & DELETE ROUTE
router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deletTodo)

module.exports = router;