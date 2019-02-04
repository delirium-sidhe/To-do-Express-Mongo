var mongoose = require('mongoose');
    mongoose.set('debug', true);
    mongoose.connect('mongodb://delirium-sidhe:Halfdead9@testingcluster-shard-00-00-4b352.mongodb.net:27017,testingcluster-shard-00-01-4b352.mongodb.net:27017,testingcluster-shard-00-02-4b352.mongodb.net:27017/test?ssl=true&replicaSet=TestingCluster-shard-0&authSource=admin&retryWrites=true');
    // mongodb://delirium-sidhe:<PASSWORD>@testingcluster-shard-00-00-4b352.mongodb.net:27017,testingcluster-shard-00-01-4b352.mongodb.net:27017,testingcluster-shard-00-02-4b352.mongodb.net:27017/test?ssl=true&replicaSet=TestingCluster-shard-0&authSource=admin&retryWrites=true
mongoose.Promise = Promise;

module.exports.Todo = require("./todo")