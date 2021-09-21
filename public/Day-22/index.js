var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'binitmishra1124@gmail.com',
    pass: 'mxcdv@Mishra109693'
  }
});

var mailOptions = {
  from: 'binitmishra1124@gmail.com',
  to: 'binitmishra1124@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});