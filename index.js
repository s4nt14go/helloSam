var time = require('time');
exports.handler = (event, context, callback) => {
  console.log('process.env', process.env);
  console.log('3');
  var currentTime = new time.Date();
  currentTime.setTimezone("America/Argentina/Cordoba");
  callback(null, {
    statusCode: '200',
    body: 'The time in Córdoba is: ' + currentTime.toString(),
  });
};
