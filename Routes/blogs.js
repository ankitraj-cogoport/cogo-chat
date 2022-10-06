const express = require('express');
let router = express.Router();
const pool = require('../db/config');

pool.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

router.get('/', function (req, res) {
    // res.send('Hello world');
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows);
      })
});

module.exports = router;