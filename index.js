const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const body_parser = require('body-parser')
const mongoKey = require('./keys/keys').mongo
const errors = require('./keys/keys').Errors
require('./models/League')
const setupDB = require('./helpers/InitDB').CSV_DB_Migration

const app = express()
mongoose.connect(mongoKey, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => setupDB())
    .catch(error => {
        console.error(errors.DatabaseError.OnConnection, error)
    })

app.use(cors())
app.use(express.json())
app.use(body_parser.json())
app.use(body_parser.urlencoded({
    extended: true
}))

require('./routes/matches')(app)
app.listen(process.env.PORT || 5000, () => console.log('Server Started'))