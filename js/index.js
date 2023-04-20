const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '190030107cse@gmail.com',
    pass: 'euoyufqazusggyze'
  }
});

let mailOptions = {
  from: '190030107cse@gmail.com',
  to: 'mohandeep2002@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using SMTP from Node.js'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
document.getElementById('staticbutton').addEventListener('click', sendEmail);