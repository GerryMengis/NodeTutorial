
// import express from "express";


const express = require('express');
const { get } = require('lodash');
const morgan = require('morgan');


// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://nodetutorial:Node2145@nodetuts.f6nwo.mongodb.net/<dbname>?retryWrites=true&w=majority'


// register view engine
app.set('view engine', 'ejs');
// app.set('view', 'myview');

// if you have a different folder, this is how to reach


// listen for request
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

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

