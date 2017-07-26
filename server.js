const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive');

const APP = module.exports = express(),
      PORT = 3000;

massive({
  host: 'ec2-54-221-220-82.compute-1.amazonaws.com',
  database: 'dcpjuaqi868if1',
  user: 'odyobkcuwkyqbn',
  port: 5432,
  password: '5cad1f038d465577c9b595c8eb9bed9230cbfadccd9d5dd594ee35b2535e804e',
  ssl:true
}).then(db => {
  APP.set('db', db);

  db.init.create_users_table().then(response => {
    console.log('users table created');
    db.init.create_vehicles_table().then(response2 => {
      console.log('vehicle table created');
    })
      .catch(err2 => console.log(err2));
  })
    .catch(err => console.log(err));
});

const userctrl = require('./userCtrl');
APP.get('/api/users', userctrl.getAllUsers);

// testing to make sure server is connected
APP.get('/api/test', (req, res) => res.send('Connected!'));

APP.listen(PORT, console.log(`Running on port ${PORT}`));