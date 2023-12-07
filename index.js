
require('dotenv').config();
// env means environment
// dotenv is nodemodule,we can use it variables which is inside .env file ,anywhere within this directory
const express = require('express'); 
// express easier to work us 
const mongoose = require('mongoose');
// it's used for connected our mongodb database
const mongoString = process.env.DATABASE_URL;
// it's hiding our mongodb db url and password
mongoose.connect(mongoString);
// it's connet our mongodb database 
const database = mongoose.connection;
// for mongodb connection
database.on('error', (error) => {
    console.log(error)
})
// it will error throwed
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes/routes');

app.use('/api', routes)
