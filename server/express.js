const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/db')
const groupRouter = require('./routes/group-router')
const studentRouter = require('./routes/student-router')

const app = express()
const apiPort = 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', groupRouter)
app.use('/api', studentRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))