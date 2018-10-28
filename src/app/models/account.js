import mongoose from 'mongoose'


module.exports = mongoose.model('Account', new mongoose.Schema({
    name: {type: String, required: true, max: 12},
    email: {type: String, required: true, max: 12},
    password: {type: String, required: true},
    membs: Number,
    pin: {type: Number, max: 4},
    active: {type: Boolean, default: false}
}));