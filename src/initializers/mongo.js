import mongoose from 'mongoose'

module.exports = (dbAddr) => {
    mongoose.connect(dbAddr, {useNewUrlParser: true}).then(() => console.log(`Mongoose connected to: ${dbAddr}`));
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};