var express = require ('express'),
    app = express();
    bodyParser = require('body-parser')

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
    res.sendFile ("index.html")
});

app.listen (3000, function() {
    console.log("app is runninig on port 3000")
})