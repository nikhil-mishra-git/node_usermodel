

// =================  Datbase Setup  ======================

const mongoose = require('mongoose');

const mongooseURL = 'mongodb://127.0.0.1:27017/UserAuth';

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