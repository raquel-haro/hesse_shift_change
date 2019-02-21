const express = require('express');
const app = express();
const mysql = require('mysql');
 
// Connection configurations
const mc = mysql.createConnection({
  host: 'cs358.cis.valpo.edu',
  user: 'hesse',
  password: '358hesse',
  database: 'hesse'
});
 
// Connect to database
mc.connect(); 

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

// Listen
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log('Node app is running on port ' + port);
});
 
