const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace with your email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider
  auth: {
    user: 'yashmogal2004@gmail.com', // Your email
    pass: 'Mogal@2004',    // Your email password or app password
  },
});

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email, // sender address
    to: 'yashmogal2004@gmail.com', // list of receivers
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
