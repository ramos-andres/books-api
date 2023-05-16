//depenencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

//configurations
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())



//optional but recommended to remove some warnings
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
});

//root index
app.get('/', (req, res) => {
    res.send('Hello World');
});

//controllers
app.use('/books', require('./controllers/books.js'));

//listener
app.listen(process.env.PORT, function(){
    console.log('Port: 3000')
});