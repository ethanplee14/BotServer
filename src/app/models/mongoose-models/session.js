import mongoose from 'mongoose'
let Schema = mongoose.Schema;

module.exports = mongoose.model('Session', new Schema({
    account: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    start: {type: Date, default: Date.now},
    end: {type: Date},
    barsSmithed: {type: Number, default: 0},
    xpGained: {type: Number, default: 0}
}));