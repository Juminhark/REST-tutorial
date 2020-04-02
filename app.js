const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
		
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
	res.send('we are on home')
});

//Connect To DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true },
	() => {console.log('connected to DB!');}
);
		
//How to we start listening to the server
app.listen(3000);