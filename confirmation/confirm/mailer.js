import { Credentials, SESV2 } from 'aws-sdk';
import config from './config';

const ses = new SESV2({
    apiVersion: '2019-09-27',
    region: 'ap-south-1',
    credentials: new Credentials({
        accessKeyId: config.accessKey,
        secretAccessKey: config.secretAccessKey,
    }),
});

/**
 * 
 * @param mail Mail Body from createSesMail
 * @returns {Object}
 */
export const sendEmail = (mail) => {
    let request = ses.sendEmail(mail);
    return request.promise();
};
/**
 * @param {string} html HTML of email to be sent
 * @param {string} fromEmail Email to send mail from
 * @param {string} text Text of Email to be sent
 * @param {string} receiverEmail Email of the receiver
 * @param {string} subject Mail Subject
 * @returns {Object}
 */
export const createSesMail = (
    html,
    text,
    subject,
    receiverEmail,
    fromEmail,
) => {
    const mail = {
        Content: {
            Simple: {
                Body: {
                    Html: {
                        Data: html,
                    },
                    Text: {
                        Data: text,
                    },
                },
                Subject: {
                    Data: subject,
                },
            },
        },
        Destination: {
            ToAddresses: [receiverEmail],
        },
        ReplyToAddresses: [`${config.replyToAddress}`],
        FromEmailAddress: fromEmail,
    };
    return mail;
};