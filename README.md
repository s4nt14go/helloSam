<h1 align="center">Simple Serverless Application Model app 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

### Description

Deploy an endpoint which will tell you what time is in the timezone you code in index.js file. You will be able to navigate to the url endpoint and you will get the time.

Requirements:
* [AWS account](https://aws.amazon.com)
* [AWS CLI](https://aws.amazon.com/cli)
* [AWS Serverless Application Model (SAM)](https://aws.amazon.com/serverless/sam)

Instructions:
1. Clone this repo: `git clone https://github.com/s4nt14go/helloSam.git`.
2. Create a bucket filling with a random suffix (because the name has to be unique), for example if we want to deploy in region us-east-2 Ohio: `aws s3 mb s3://lambda-deployment-artifacts-<yourRandomSuffix> --region us-east-2`
3. We will first build the project locally and then deploy it, as the runtime specified in template.yml is node v12 we have to use the same version locally, so make sure you are using node v12 running `node -v`. If you aren't using v12 you can use [nvm](https://github.com/nvm-sh/nvm) to install and set node v12 as the current node version.
4. Build the project locally: `sam build`
5. Check it works locally: `sam local invoke TimeFunction`
6. Deploy it! `sam deploy --region us-east-2`

You can try changing `tz` value in index.js for the timezone of your choice according to [moment-timezone](https://momentjs.com/timezone) and repeating steps 4, 5 and 6.

The last comand will output an url similar to `https://<randomChars>.execute-api.us-east-2.amazonaws.com/prod/TimeResource`, visit it with your browser and you will get the time from the timezone set in index.js.

As a demo you can browse to the endpoint this repo deploys:
[https://hmddi9jmv3.execute-api.us-east-1.amazonaws.com/prod/TimeResource](https://hmddi9jmv3.execute-api.us-east-1.amazonaws.com/prod/TimeResource)
