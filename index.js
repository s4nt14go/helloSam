var moment = require('moment-timezone');
const tz = 'America/Los_Angeles';
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: '200',
    body: `The time in ${tz} is: ` + moment().tz(tz).format(),
  });
};
