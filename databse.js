

// =================  Datbase Setup  ======================

const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;

// const mongooseURL = DB_URL_LOCAL;
const mongooseURL = DB_URL;

mongoose.connect(mongooseURL);

const databse =  mongoose.connection;

databse.on('connected',()=>{
    console.log('Mogoose Connected');
})
databse.on('error',()=>{
    console.log('Mogoose Connection Error');
})
databse.on('disconnected',()=>{
    console.log('Mogoose disConnected');
})

module.exports = databse;