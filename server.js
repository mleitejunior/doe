// Server configuration
const express = require('express');
const server = express();

// Enable form body
server.use(express.urlencoded({ extended: true }))

// Static files configuration
server.use(express.static('public'));

// Postgress Connection
const Pool = require('pg').Pool;
const db = new Pool({
    user: 'postgres',
    password: 'docker',
    host: 'localhost',
    port: 5432,
    database: 'doe',
});

// Template engine configuration
const nunjucks = require('nunjucks');
nunjucks.configure("./", {
    express: server,
    noCache: true,
});

// Page render configuration
server.get("/", (req, res) => {
    db.query("SELECT * FROM donors", (err, result) => {
        if (err) return res.send("Erro no banco de dados.");
    
        const donors = result.rows;

        return res.render("index.html", { donors });
    });
});

server.post("/", (req, res) => {
    // Getting form data
    const { name, email, blood } = req.body;

    // if name or email or blood are empty, send warning
    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios");
    }

    // Sending new donor to database
    const query = `INSERT INTO donors ("name", "email", "blood") VALUES ($1, $2, $3)`;
    const values = [name, email, blood];

    db.query(query, values, (err) => {
        // handling error
        if (err) return res.send("Erro no banco de dados");

        // successful query
        return res.redirect("/");
    });

}); 

// Starting server, port 3000
server.listen(3000);