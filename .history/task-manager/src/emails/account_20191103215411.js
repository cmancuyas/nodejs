const sgMail = require('@sendgrid/mail');
const sendGridAPIKey =
  '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';

sgMail.setApiKey(sendGridAPIKey);

// const msg = {
//   to: 'christopher.mancuyas@cebuoversea.com',
//   from: 'christopher.mancuyas@cebuoversea.com',
//   subject: 'test email',
//   text: 'test send grid',
//   html: '<strong>testing only christopher.mancuyas@cebuoversea.com</strong>'
// };
// sgMail.send(msg);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'christopher.mancuyas@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

module.exports = {
    sendWelcomeEmail,
}