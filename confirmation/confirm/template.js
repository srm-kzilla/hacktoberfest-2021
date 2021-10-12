import config from "./config";
import * as fs from 'fs';
import * as path from 'path';
import dot from 'dot';

/**
 * @param {string} email Email to send to
 * @param {string} emailFrom Email to send mail from
 * @param {string} fileName The file name (Just the file name without the extension)
 * @param {string|'Seat Confirmed'} text Text
 * @param {string|'Your journey to Open Source greatness has started'} subject Mail Subject
 */
export function getStaticMail(email, emailFrom, fileName, text = 'Seat Confirmed', subject = 'Your journey to Open Source greatness has started') {
    const template = dot.template(fs.readFileSync(path.join(process.cwd(), `/services/templates/${fileName}.html`), 'utf-8'));
    return createSesMail(template(), text, subject, email, `${emailFrom}@${config.domain}`)
}