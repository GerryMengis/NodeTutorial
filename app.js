
// import express from "express";

const express = require('express');
const { get, result } = require('lodash');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');



// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://nodetutorial:Node2145@nodetuts.f6nwo.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
// app.set('view', 'myview');

// if you have a different folder, this is how to reach


// listen for request
// app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// mongoose and mongodb sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'ne blog 2',
        snippet: 'about my ny blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/single-blog', (req, res) => {
    Blog.findById('5f9d127ecddcf1c234496799')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})


app.get('/', (req, res) => {
    // res.send('<p>./htmlfiles/index.html</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('./htmlfiles/about.html');
    res.render('about', {title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create new Blog' });
});


// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404' });
})

