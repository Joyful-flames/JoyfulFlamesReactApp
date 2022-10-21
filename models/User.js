const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Login')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const UserModel = mongoose.model('UserModel',UserSchema,'users')

module.exports = UserModel