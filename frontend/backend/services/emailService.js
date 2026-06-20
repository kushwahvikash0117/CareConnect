const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'CareConnect OTP Verification',
    html: `
      <div style="font-family: Arial;">
        <h2>CareConnect Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>Valid for 5 minutes.</p>
      </div>
    `,
  });
};

const sendEmergencyEmail = async (email, seniorName, location) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: '🚨 Emergency Alert - CareConnect',
    html: `
      <h2>Emergency Alert</h2>
      <p>${seniorName} triggered SOS.</p>
      <p>Location:</p>
      <a href="https://www.google.com/maps?q=${location.latitude},${location.longitude}">
        Open Location
      </a>
    `,
  });
};

module.exports = {
  sendOTPEmail,
  sendEmergencyEmail,
};