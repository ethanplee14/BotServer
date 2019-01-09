import mongoose from 'mongoose'


let accountSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 12, unique: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    memb: Date,
    pin: {type: Number, max: 4},
    status: {type: String, default: "idle", set: function(newStatus) {
        this.lastStatusChange = new Date(Date.now());
        return newStatus;
    }},
    lastStatusChange: Date,
    stocked: {type: Boolean, default: false},
    created: Date,
    breakUntil: Date
});

module.exports = mongoose.model('Account', accountSchema);