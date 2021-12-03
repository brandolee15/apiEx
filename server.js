const express = require('express');
const app = express();
const port = 3000;
const avatarRoutes = require('./controllers/avatars')

app.get('/', (req, res) => {
    res.send('I will not go into backend!');
});

app.use('/avatars', avatarRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;