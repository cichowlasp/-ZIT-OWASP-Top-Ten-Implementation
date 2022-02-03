//imports
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
	console.log('connected to db!');
});

//Middleware
app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));
app.use(express.json());
//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(3000, () => console.log('Server up and running'));
