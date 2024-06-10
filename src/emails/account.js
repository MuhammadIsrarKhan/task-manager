const sgMail = require("@sendgrid/mail");

const sendgridApiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridApiKey);
const msg = {
  to: "israrkundi420@gmail.com",
  from: "israruetp@gmail.com",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "israruetp@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}.Let me know how to get along with the app`,
  });
};

module.exports = { sendWelcomeMail };
