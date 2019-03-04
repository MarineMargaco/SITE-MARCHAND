// Je vais chercher le driver sqlite dans node_modules
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const express = require('express');


const dbFile = 'TEST.db';
const db = new sqlite3.Database(dbFile);

const app = express();
//app.use(cors());

db.serialize(() => {

    if (!fs.existsSync(dbFile)) {

        db.run('CREATE TABLE products(id INTEGER PRIMARY KEY AUTOINCREMENT,  name TEXT , price INTEGER , like BOOLEAN)');
    }

    db.run('INSERT INTO products(name, price, like) VALUES(?, ?, ?)', 'sac', 40, true);
    db.run('INSERT INTO products(name, price, like) VALUES(?, ?, ?)', 'shoes', 20, false);
    db.run('INSERT INTO products(name, price, like) VALUES(?, ?, ?)', 'shirt', 80, false);

    db.all('SELECT id, name, price, like FROM products', function (error, data) {

        if (!error) console.log(data);
        else console.log(error);
    });

    db.all('SELECT name FROM products', function (error, data) {

        if (!error) console.log(data);
        else console.log(error);
    });

    db.all('SELECT id,name, price, like FROM products WHERE like =true', function (error, data) {

        if (!error) console.log(data);
        else console.log(error);
    });

});

app.get("/url", function (request, response) {
    db.all("SELECT * FROM products", function (error, data) {
        response.send(data);
    });
});

app.listen(3000, function (error) {
    if (!error) console.log("listening at port 3000");
});



