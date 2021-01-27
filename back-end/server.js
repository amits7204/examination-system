const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(
    process.env.ATLAS_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    (err) => {
      console.log("the database is connected: ", err);
    }
)

app.listen(8080, function(){
    console.log("server is up and running")
})