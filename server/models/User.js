const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    userName:{
        type: String,
        unique: true 
    },
    email:{
        type: String,
        unique: true
    },
    friendList:{
        type: Array,
        required: true
    },
    profilePic:{
        type: String,
        require: false
    },
    cloudinaryId:{
        type: String,
        required: false
    },
    password: String,
})