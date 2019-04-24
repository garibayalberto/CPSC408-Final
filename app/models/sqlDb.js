var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '35.233.130.214',
    database : 'maxxhaul',
    user     : 'ramir266',
    password : 'torNado911!',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM TotalSales', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

connection.end();
