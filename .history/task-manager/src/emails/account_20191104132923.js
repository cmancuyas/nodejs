const sgMail = require('@sendgrid/mail');

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

const sendEmailCancellation = (email, name) => {
  sgMail.send({
    to: email,
    from: 'christopher.mancuyas@gmail.com',
    subject: 'Sorry to see you go',
    text: `What we could have done ${name} to let you use our app. Please let us now by sending email to christopher.mancuyas@gmail.com`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendEmailCancellation
};
