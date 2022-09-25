const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Server Config
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// Setup Middleware
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(express.json())
app.use(cookieParser())

// SETUP OUR OWN ROUTERS AS MIDDLEWARE
// const authRouter = require('./routes/auth-router')
// app.use('/auth', authRouter);
// const usersRouter = require('./routes/users-router')
// app.use('/api', usersRouter)
require('./routes/routes')(app);

// INITIALIZE OUR DATABASE OBJECT
const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// PUT THE SERVER IN LISTENING MODE
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))