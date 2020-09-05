// Using Express framework for http REST calls
const express = require('express');
const nodemailer = require('nodemailer');

// For using HTTP.GET, POST, PUT, DELETE in route
const messageRoute = express.Router();

// Send email using nodemailer. Make sure Less Secure Apps are enabled
messageRoute.route('/send').post((req, res) => {
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shaizur1@gmail.com',
        pass: ''
      }
    });
    
    const mailOptions = {
      from: 'shaizur1@gmail.com',
      to: 'shaizur1@gmail.com',
      subject: 'Thank You For Contacting Me',
      html: '<h1>Hello Shopper!</h1>'
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

  module.exports = messageRoute;