const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'stupagha@gmail.com',
        pass: 'Peacemaker7!',
    },
});

const mailOptions = {
    from: 'stupagha@gmail.com', // sender address
    to: 'stupagha@gmail.com', // list of receivers
    subject: "Job Offer",
    html: `
      <h1>Details Information
      <ul>
        <li><p>Name: ${name}</p></li>
        <li><p>E-mail: ${email}</p></li>
        <li><p>Job Types: ${jobtypes}</p></li>
        <li><p>Message: ${message}</p></li>
      </ul>
  `
  };
  
  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });

  
module.exports = utility;