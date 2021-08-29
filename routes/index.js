const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const config = require('./config');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Computing Association of Mount Royal University' });
});
/* GET home page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About CAMRU' });
});

router.get('/events', function(req, res, next) {
    res.render('events', { title: 'CAMRU Events' });
});

router.get('/thankyou', function(req, res, next) {
    res.render('thankyou', { title: 'Thank you!' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});
router.post('/contact', (req, res) => {

    // Email Template
    const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    // Alert if successfully sending email


    // Alert if failed to sending email


    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host:  config.host,
        port: config.port,
        secure: false,
        auth: {
            user: config.user,
            pass: config.pass,
        },
        tls:{
            rejectUnauthorized:false,
        },
    });

    // Setup email settings
    const mailOptions = {
        from: config.from,
        to: config.to,
        replyTo: req.body.email,
        subject: config.subject,
        html: output,
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.render('contactf');
        } else {

            res.render('contacts');
        }
    });
});

module.exports = router;
