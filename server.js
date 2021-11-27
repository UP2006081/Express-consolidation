const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}:${req.originalUrl}`);
    next();
}

// init middleware
app.use(logger);

//json deliver
const members = require('./members');

app.get('/api/members', (req, res) => 
    res.json(members));

//setting static folder for
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('listening on port ' + port));