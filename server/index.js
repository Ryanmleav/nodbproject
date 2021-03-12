const express = require('express')
const infoBox = require('./controllers/infoBox')
const report = require('./controllers/report')
const port = 5200
const app = express()

app.use(express.json())