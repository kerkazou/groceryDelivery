import express from 'express'
const app = express()
require('dotenv').config();

// Connection to database
require('./config/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routers
const authRoutes = require('./routes/auth.Routes')
app.use('/api/auth', authRoutes)
const notFoundRoutes = require('./routes/notFound.Routes')
app.all('*', notFoundRoutes)


// Port
const port = process.env.PORT || 9001;
app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);

module.exports = app