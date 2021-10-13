const { sendEmail } = require("./mailer.js");
const { getStaticMail } = require("./template.js");
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async(event, context) => {
    try {
        const req = JSON.parse(event.body);
        const email = req.form_response.answers[2].email;
        console.log(email);
        await sendEmail(
            getStaticMail(
                email,
                "skilltober",
                "confirm"
            )
        );
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'mail sent',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};