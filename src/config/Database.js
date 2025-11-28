const mongoose = require('mongoose');

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log('Database connected successfully');
    } catch (error) {
        console.log('Error connecting to database:', error);
    }
}
module.exports = connectDB;