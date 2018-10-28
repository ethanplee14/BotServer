import mongoose from 'mongoose'
let Schema = mongoose.Schema;

module.exports = mongoose.model('Session', new Schema({
    account: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    start: {type: Date},
    end: {type: Date},
    breaks: [[]],
    barsSmithed: {type: Number, required: true},
    xpGained: Number
}));