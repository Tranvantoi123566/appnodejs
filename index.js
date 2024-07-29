const express = require('express')
const app = express();
const port = 3000;
const db = require('./db/mysql');
const Router = require('./Routers/router.js');

app.set('views', './views')
app.set("view engine", "ejs");

app.use('/', Router);


app.listen(port, ()=>{
    console.log('hellu');
});