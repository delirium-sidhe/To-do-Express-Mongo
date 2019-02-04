var express = require ('express'),
    app = express();
    bodyParser = require('body-parser')

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.get('/', function (req, res){
    res.send ("roote route")
});

app.listen (3000, function() {
    console.log("app is runninig on port 3000")
})