const nodemailer = require("nodemailer");
const Email = require("email-templates");
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secureConnection: false,
    tls: { ciphers: "SSLv3" },
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const email = new Email({
    transport: transporter,
    send: true,
    views: {
      options: {
        extension: "ejs",
      },
    },
  });

  email.send({
    template: options.template,
    message: {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.email,
    },
    locals: {
      firstName: options.firstName,
      lastName: options.lastName,
      token: options.token,
      email: options.email,
      password: options.password,
    },
  });
};

module.exports = sendEmail;
