var time = require('time');
exports.handler = (event, context, callback) => {
  console.log('process.env', process.env);
  var currentTime = new time.Date();
  currentTime.setTimezone("America/Argentina");
  callback(null, {
    statusCode: '200',
    body: 'The time in Los Angeles is: ' + currentTime.toString(),
  });
};
