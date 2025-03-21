const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

console.log('APP_USERNAME from .env:', process.env.APP_USERNAME);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/username', (req, res) => {
    const username = process.env.APP_USERNAME || 'Guest';
    console.log('Serving username:', username);
    res.json({ username });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});