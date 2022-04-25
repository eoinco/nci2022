// we're going to create a web server
// that will allow us to:
// upload your code to a computer in the cloud
// then people can interact with it
// using a front end


// rest api


// GET - reads
// POST - writes
// PUT - updates
// DELETE - removes

// CRUD (create, read, update, delete)

const express = require('express');
const app = express()
app.use(express.json())

const port = 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));

