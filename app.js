
// import express from "express";


const express = require('express');
const { get } = require('lodash');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// if you have a different flder, this is how to reach
// app.set('view', 'myview');

// listen for request
app.listen(3000);

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


