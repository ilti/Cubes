const handlebars = require('express-handlebars');
const express = require('express');


function setupExpress(app){
    
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }))
    
    app.set('view engine', 'hbs');
    
    app.use(express.static('public'))

    app.use(express.urlencoded({
        extended:true
    }));// tova e da moje da razbira url zaqvki i go e imalo v urlencoded

}

module.exports = setupExpress;