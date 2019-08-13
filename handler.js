'use strict';
module.exports.hello = async (event) => {
  const oracledb = require('oracledb');
  // var dbConfig = require('./dbconfig.js');// Replace this to your own
  let connection;
  try {
    connection = await oracledb.getConnection(
      {
        user: dbConfig.user, // Replace this to your own
        password: dbConfig.password,// Replace this to your own
        connectString: dbConfig.connectString// Replace this to your own
      });
    console.log('connection', connection);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'successfully connected',
      }),
    };
  }
  catch (e) {
    console.log('connection error', e)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to connnect!',
        error: e,
        input: event,
      }),
    };
  }
  finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
};
