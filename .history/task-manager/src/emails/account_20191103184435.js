const sgMail = require('@sendgrid/mail');
const sendGridAPIKey =
  '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';

sgMail.setApiKey(sendGridAPIKey);

const msg = {
  to: 'christopher.mancuyas@gmail.com',
  from: 'christopher.mancuyas@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
};
sgMail.send(msg);
