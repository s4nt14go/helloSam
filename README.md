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
* [AWS Serverless Application Model (SAM) CLI](https://aws.amazon.com/serverless/sam)

Instructions:
1. Clone this repo and cd into it<br />
`git clone https://github.com/s4nt14go/helloSam.git`
1. Check your are using your AWS credentials and region you want<br />
`aws configure list`
1. Create a bucket filling with a random suffix (because the name has to be unique), for example if we want to deploy in region us-east-2 Ohio:<br />
`aws s3 mb s3://lambda-deployment-artifacts-<yourRandomSuffix> --region us-east-2`
1. We will first build the project locally and then deploy it, so `cd` into the repo. As the runtime specified in template.yml is node v12 we have to use the same version locally, so make sure you are using node v12 running `node -v`. If you aren't using v12 you can use [nvm](https://github.com/nvm-sh/nvm) to install and set node v12 as the current node version.
1. Build the project locally<br />
`sam build`
1. Check it works locally<br />
`sam local invoke TimeFunction`
1. Deploy it!<br />
`sam deploy --stack-name myStack --s3-bucket lambda-deployment-artifacts-<yourRandomSuffix> --capabilities CAPABILITY_IAM --region us-east-2`

The last comand will output an url similar to<br />
`https://<randomChars>.execute-api.us-east-2.amazonaws.com/prod/TimeResource`<br />
visit it with your browser and you will get the time from the timezone set in index.js.

You can try changing `tz` value in index.js for the timezone of your choice according to [moment-timezone](https://momentjs.com/timezone) and repeat steps 5, 6 and 7.


As a demo you can browse to the endpoint this repo deploys:<br />
[https://hmddi9jmv3.execute-api.us-east-1.amazonaws.com/prod/TimeResource](https://hmddi9jmv3.execute-api.us-east-1.amazonaws.com/prod/TimeResource)
