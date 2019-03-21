const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
 
// Connection configurations
const mc = mysql.createConnection({
  host: 'cs358.cis.valpo.edu',
  user: 'hesse',
  password: '358hesse',
  database: 'hesse'
});
 
// Connect to database
mc.connect(); 

// For getting post data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Default route
app.get('/api/', function (req, res) {
  return res.json({ message: 'hello' })
});
 
// Retrieve all shifts
app.get('/api/shifts', function (req, res) {
  mc.query('SELECT * FROM shifts', function (error, results, fields) {
    if (error) { throw error; }
    return res.json({ data: results });
  });
});

// Retrieve shift by id
app.get('/api/shift/:id', function (req, res) {
  let shift_id = req.params.id;
  mc.query('SELECT * FROM shifts where id=?', [shift_id], function (error, results, fields) {
    if (error) throw error;
    return res.json({ data: results[0] });
  });
});

// Add a new shift
app.post('/api/shift', function (req, res, next) {
  var shiftDate = req.body.shiftDate;
  var shiftTime = req.body.shiftTime;
  var postedBy = req.body.postedBy;
  var helpSession = req.body.helpSession;
  var majorPreference = req.body.majorPreference;
  var yearPreference = req.body.yearPreference;
  var comments = req.body.comments;

  if (!shiftDate || !shiftTime || !postedBy || !helpSession || !majorPreference || !yearPreference) {
    return res.status(400).json({ message: 'Missing information.' });
  }
  mc.query("INSERT INTO shifts (shiftDate, shiftTime, postedBy, helpSession, majorPreference, yearPreference, comments) VALUES (?,?,?,?,?,?,?)", [shiftDate, shiftTime, postedBy, helpSession, majorPreference, yearPreference, comments], function (error, results, fields) {
    if (error) throw error;
    return res.json({ data: results, message: 'New shift has been created successfully.' });
  });
});

// Listen
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Node app is running on port ' + port);
});
 
