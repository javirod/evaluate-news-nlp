const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const aylien = require("aylien_textapi")
const dotenv = require('dotenv')
dotenv.config();

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

// app.use(express.static('src/client'))
app.use(express.static('dist'))

// console.log(__dirname)

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
    // res.sendFile('src/client/views/index.html')
})

app.post('/aylienApi', function (req, res) {
    console.log('We are in the aylien api')
    const incomingText = req.body
    console.log(incomingText.text)
    textapi.sentiment({
        url: incomingText.text,
        mode: 'document'
    }, function(error, response) {
        if (error === null) {
            res.send(response)
            console.log(response)
        }
    })
})

// designates what port the app will listen to for incoming requests
const port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})