const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../config/mail.json');

//console.log(host, port, user, pass);

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
  });

  transport.use('compile', hbs({
      viewEngine: 'handlebars',
      viewPath: path.resolve('./src/resources/mail/'),
      extName: '.html',
  }));

  module.exports = transport;