
// ===================== Setup Server ===========================

const express = require('express')
const app  = express();

// Env file Import

require('dotenv').config();

//Body-Parser

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import Database

const database = require('./databse')

app.get('/',(req,res)=>{
    res.send("Welcome Sir / Maidam");
})

// Import Routes

const UserRoute = require('./routes/userRoute');

// Use Routes

app.use('/User',UserRoute);

const PORT = process.env.PORT || 7000;

app.listen(PORT,()=>{console.log('Port Runnig On 7000');})