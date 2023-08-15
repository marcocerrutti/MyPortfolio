const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyparser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendGridTransporter = require('nodemailer-sendgrid-transport')

require('dotenv').config();

app.get('/test', (req, res) => {
    res.send("Hello react and node js");
})
app.listen(PORT,(req, res) =>{
    console.log('server connected...');
});