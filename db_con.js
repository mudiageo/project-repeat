var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: "project_repeat"
});

con.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + con.threadId);
  var sql = "INSERT INTO links (url) VALUES ('https://ouo.io/jGWIxeU')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});