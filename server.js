const mockBlog = require('./mockBlog');
const express = require('express');
const app = express();

app.get('/blog', (req, res) => {
    res.json(mockBlog);
});

//create
app.post('/blog', (req, res) => {
    let newBlog = {
        id: mockBlog.length + 1,
        title: req.body.title,
        description: req.body.description
    }
    mockBlog.push(newBlog)
    res.json(newBlog);
});

//show
app.get('/blog/:id', (req, res) => {
    let blog = mockBlog.filter(b => b.id == req.params.id)
    res.json(blog[0]);
});

//middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.listen(3008, () => {
    console.log('Server is running on port 3008');
});