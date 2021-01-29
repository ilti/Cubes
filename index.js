const express = require('express');

const config = require('./config/config');
const routes = require('./routes')
const setupExpress = require('./config/express') //?? kakvo stana s tova - toy go sakrati na require('./config.express')(app)

const app = express();
setupExpress(app);  // prashtame tozi app vav funciqta predi da pravi kakvo i da e 

//require('./config/express')(app) // use view engine and render

app.use(routes)

app.listen( config.PORT, ()=> console.log(`Server is running on port ${config.PORT}...`));
