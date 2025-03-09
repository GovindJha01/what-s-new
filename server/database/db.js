import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async (username, password) => {
    const URL = process.env.Mongo_DB_URI;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;