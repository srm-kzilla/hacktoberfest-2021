const { Credentials, SESV2 } = require('aws-sdk');

const ses = new SESV2({
    apiVersion: '2019-09-27',
    region: 'ap-south-1',
    credentials: new Credentials({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.ACCESS_KEY_SECRET,
    }),
});

/**
 * 
 * @param mail Mail Body from createSesMail
 * @returns {Object}
 */
const sendEmail = (mail) => {
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
const createSesMail = (
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
        ReplyToAddresses: [`${process.env.REPLY_TO_ADDRESS}`],
        FromEmailAddress: fromEmail,
    };
    return mail;
};

module.exports = {
    sendEmail,
    createSesMail
}