const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const favicon = require("serve-favicon");
const path = require('path');

// Create Server
const server = express();

// Body Parser Middleware
server.use(bodyParser.json());

// DataBase Config
const db = require('./config/keys').mongoURI;

// DataBase options
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);

// Connect to DataBase
mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));

// Use Item Routes
const items = require('./routes/api/items');
server.use('/api/items', items);

// Use Order Routes
const orders = require('./routes/api/orders');
server.use('/api/order', orders);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') 
{
    server.use(express.static('client/build'));
    server.use(favicon(path.join(__dirname, "build", "favicon.ico")));

    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
};

// Server start listening
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server started on port ${port}`));