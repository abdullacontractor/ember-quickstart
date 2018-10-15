// Get our dependencies
var app = new (require('express'))();
var wt = require('webtask-tools');
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the scientists route which will retrieve a list of all scientists
app.get('/scientists', function(req, res){
    req.webtaskContext.storage.get(function (error, data) {
        if (error) return res.send(error);
        res.json({ scientist: data });
    });
})

// Define the scientists route which will allow additions to the scientists list
app.post('/scientists', function(req, res){
  req.webtaskContext.storage.get(function (error, data) {
      if (error) return cb(error);
      newScientist = req.body.scientist;
      newScientist.id = data[(data.length - 1)].id + 1;
      data.push(newScientist);
      req.webtaskContext.storage.set(data, function (error) {
        if (error) return cb(error);
        res.json({ scientist: newScientist, modelName: 'scientist' });
      });
  });
})

// Once our Webtask is live, we'll hit this route once, to seed our event database
app.get('/seed', function(req, res){
  req.webtaskContext.storage.get(function (error, data) {
    if (error) return cb(error);
      data = scientists();
      req.webtaskContext.storage.set(data, function (error) {
        if (error) return cb(error);
        res.json({status:'ok'});
      });
  });
})

module.exports = wt.fromExpress(app)

// This function will return our seed data.
function scientists(){
  return [
    {
      id: 10432,
      name : "Marie Curie",
    },
    {
      id: 10433,
      name : "Mae Jemison",
    },
    {
      id: 10434,
      name : "Albert Hofmann",
    },
  ]
}
