/* eslint-disable */
var mysql = require('mysql');

var user = process.env.MYSQL_USER;
var password = process.env.MYSQL_PASSWORD;

var connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'test',
});

connection.connect(function(err) {
  if (err) {
    console.log('connection failed');
    console.error(err);
    process.exit(1);
  }
  console.log('connection successful');
  process.exit(0);
});
