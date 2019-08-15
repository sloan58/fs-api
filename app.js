const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

app.use('/api/fs', require('./routes/api/fs'));
app.use('/api/saas', require('./routes/api/saas'));

module.exports = app;
