const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/youtube-clone')
    .then(() => {
        console.log('Connected to mongodb...');
    })
    .catch((ex) => {
        console.log(ex.message);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});