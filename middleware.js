const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 8080;

var app = express();


// app.use((request, response, next) => {
//
// });

app.get('/', (request, response) => {
    // response.send('<h1>Hello Express!</h1>');
    response.send({
        name: 'Your name',
        school: [
            'BCIT',
            'SFU',
            'UBC',
            'UVIC',
            'LUL'
        ]
    })
});


app.use((request, response, next) => {
    var time = new Date().toString();
    var log = `${time}: ${request.method} ${request.url}`;
    fs.appendFile('server.log', log + '\n', (error) => {
        if (error) {
            console.log('Unable to log message');
        }
    });
    //console.log(`${time}: ${request.method} ${request.url}`);
    next();
});



//
// app.get('/info', (request,response) => {
//     response.render('about.hbs', {
//         title: 'UNF',
//         year: new Date().getFullYear()
//         //welcome: 'Hello!'
//     });
// });

app.get('/404', (request,response) => {
    response.send({
        error: 'Page not found'
    })
});

// app.use((request, response, next) => {
//     response.render("maintenance.hbs")
// });

console.log("New Line");


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});