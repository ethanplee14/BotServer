import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

let userSchema = new mongoose.Schema({
    user: {type: String, required: true, unique: true},
    password: {type: String, required: true, set: function(plainTxtPass) {
        return bcrypt.hashSync(plainTxtPass, 10);
    }}
});

module.exports = mongoose.model('User', userSchema);