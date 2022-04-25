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


let contract = require('./contract.js');

app.get('/symbol', async(req, res) => {
    res.send(await contract.getSymbol());
})

app.get('/name', async(req, res) => {
    res.send(await contract.getName());
})

let distro = require('./distribute.js');
app.get('/distro', async(req, res) => {
    res.send(await distro.doDistro());
})


app.listen(port, () => console.log(`listening on port ${port}...`));

