const express = require('express')
const mognoose = require('mongoose')
require('dotenv').config()
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())


//routes for login and registration
const entryRoutes = require('./routes/entry')
app.use('/', entryRoutes)
//routes for posts
const postRoutes = require('./routes/posts')
app.use('/post', postRoutes)

//DB connection
const connectDB = require('./config/database')
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})