const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // You can use any available port

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up your Gmail SMTP credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ryanrichardson635@gmail.com', // Replace with your Gmail address
      pass: 'wtvxylgfcmqypwju ', // Replace with your Gmail password or use an app password
    },
  });

  const mailOptions = {
    from: 'your-gmail@gmail.com',
    to: 'your-email@gmail.com', // Replace with your email address to receive messages
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
