const nodemailer = require('nodemailer')
const { smtp } = require('./config');

const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    auth: {
      user: smtp.user, // generated ethereal user
      pass: smtp.passw // generated ethereal password
    },
  });
transporter.verify().then(() => {
    console.log('Ready for send emails')
} )

module.exports = {
  transporter
}
