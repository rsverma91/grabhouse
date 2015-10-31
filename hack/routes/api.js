var mongoose = require('mongoose');
var app = require('express').Router();
// MongoDB setup
mongoose.connect('mongodb://192.168.0.164/myBackboneApp');

var Schema = mongoose.Schema;
var mySchema = new Schema({
    name: String,
    age: String,
    mob: String
});

mongoose.model('myBAModel', mySchema);
var myBAModel = mongoose.model('myBAModel');

app.get('/all', function (req, res) {
    myBAModel.find(function (error, data) {
        res.send(data);
    });
});

app.post('/all', function (req, res) {
    var mybamodel = new myBAModel(req.body);
    mybamodel.save(function (error, data) {
        res.send(data);
    });
});

app.delete('/all/:id', function (req, res) {
    myBAModel.remove({_id : req.params.id}, function (error, data) {
        res.send(data);
    });
});

app.put('/all/:id', function (req, res) {
    myBAModel.update({_id : req.params.id}, req.body, function (error) {
        res.send({_id : req.params.id});
    });
});

module.exports = app;