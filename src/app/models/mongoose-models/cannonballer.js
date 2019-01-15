import mongoose from 'mongoose'

let Schema = mongoose.Schema;

let cballerSchema = Schema({
    account: {type: Schema.Types.ObjectId, required: true, ref: 'Account'},
    stocked: {type: Boolean, default: false}
});

module.exports = mongoose.model("Cannonballer", cballerSchema);