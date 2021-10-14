FROM public.ecr.aws/lambda/nodejs:14

COPY app.js package.json mailer.js template.js confirm.html ./

RUN npm install

# Command can be overwritten by providing a different command in the template directly.
CMD ["app.lambdaHandler"]
