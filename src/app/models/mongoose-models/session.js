import mongoose from 'mongoose'
let Schema = mongoose.Schema;

let sessionSchema = new Schema({
    // account: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    account: String,
    start: {type: Number, default: Date.now},
    runtime: Number,
    barsSmithed: {type: Number, default: 0},
    xpGained: {type: Number, default: 0}
});

module.exports = mongoose.model('Session', sessionSchema);