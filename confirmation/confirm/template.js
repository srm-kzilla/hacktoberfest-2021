const fs = require('fs');
const path = require('path');
const dot = require('dot');
const { createSesMail } = require('./mailer');

/**
 * @param {string} email Email to send to
 * @param {string} emailFrom Email to send mail from
 * @param {string} fileName The file name (Just the file name without the extension)
 * @param {string|'Seat Confirmed'} text Text
 * @param {string|'Your journey to Open Source greatness has started'} subject Mail Subject
 */
function getStaticMail(email, emailFrom, fileName, text = 'Seat Confirmed', subject = 'Your journey to Open Source greatness has started') {
    const template = dot.template(fs.readFileSync(`./${fileName}.html`, 'utf-8'));
    return createSesMail(template(), text, subject, email, `${emailFrom}@${process.env.DOMAIN}`)
}
module.exports = {
    getStaticMail
}