'use strict';

module.exports.hello = async (event) => {
  var oracledb = require('oracledb');
  // var dbConfig = require('./dbconfig.js');// Replace this to your own

  await oracledb.getConnection(
    {
      user: dbConfig.user, // Replace this to your own
      password: dbConfig.password,// Replace this to your own
      connectString: dbConfig.connectString// Replace this to your own
    },
    function (err, connection) {
      if (err) {
        console.error(err.message);
        return {
          statusCode: 500,
          body: JSON.stringify({
            message: error.message,
            input: event,
          }),
        };
      }
      console.log('Connection was successful!');
      connection.close(
        function (err) {
          if (err) {
            console.error(err.message);
            return {
              statusCode: 500,
              body: JSON.stringify({
                message: error.message,
                input: event,
              }),
            };
          }
        });
    });

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
