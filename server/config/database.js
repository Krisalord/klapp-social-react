const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        //connection string, uses mongoose connect method, connection string is read from DB_STRING variable
        const connect = await mongoose.connect(process.env.DB_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${connect.connection.host}`)
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB