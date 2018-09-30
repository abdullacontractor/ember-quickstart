// Get our dependencies
var app = new (require('express'))();
var wt = require('webtask-tools');

// Define the events route which will retrieve a list of all events
app.get('/scientists', function(req, res){
    req.webtaskContext.storage.get(function (error, data) {
        if (error) return res.send(error);
        res.json({ scientist: data });
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
