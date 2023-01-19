const mockBlog = require('./mockBlog');
const express = require('express');
const app = express();

app.get('/blog', (req, res) => {
    res.json(mockBlog);
});

app.listen(3008, () => {
    console.log('Server is running on port 3008');
});