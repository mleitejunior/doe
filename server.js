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
    db.query('SELECT * FROM donors ORDER BY id DESC LIMIT 8', (err, result) => {
        if (err) return res.send("Database error");
    
        const donors = result.rows;

        return res.render("index.html", { donors });
    });
});

server.post("/", (req, res) => {
    // Getting form data
    const { name, email, blood } = req.body;

    // if name or email or blood are empty, send warning
    if (name == "" || email == "" || blood == "") {
        return res.send("All fields are required");
    }

    // Checking if donor already exists
    db.query(`SELECT * from donors WHERE donors.email='${ email }'`, (err, result) => {
        if (err) return res.send(email + "Database error");
    
        console.log(result);
        if (result.rowCount >= 1) {
            return res.send("You are already a donor, thank you!")
        } else {
            // Sending new donor to database
            const query = `INSERT INTO donors ("name", "email", "blood") VALUES ($1, $2, $3)`;
            const values = [name, email, blood];
        
            db.query(query, values, (err) => {
                // handling error
                if (err) return res.send("Database error");
        
                // successful query
                return res.redirect("/");
            });
        };
    })


}); 

// Starting server, port 3000
server.listen(3000);