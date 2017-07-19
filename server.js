const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');

const APP = module.exports = express(),
      PORT = 3000;

massive({
  host: '',
  database: '',
  user: '',
  port: 5432,
  password: '',
  ssl:true
}).then(db => {
  APP.set('db', db);

  db.init_tables.user_create_seed().then(response => {
    console.log('users table created');
    db.init_tables.vehicle_create_seed().then(response2 => {
      console.log('vehicle table created');
    })
      .catch(err2 => console.log(err2));
  })
    .catch(err => console.log(err));
});

APP.get('/api/test', (req, res) => res.send('Connected!'));

APP.listen(PORT, console.log(`Running on port ${PORT}`));