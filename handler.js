"use strict";

module.exports.hello = async (event) => {
  const oracledb = require("oracledb");
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      connectString: process.env.CONNECTION_STRING,
    });
    console.log("connection", connection);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "successfully connected",
      }),
    };
  } catch (e) {
    console.log("connection error", e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to connnect!",
        error: e,
        input: event,
      }),
    };
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
};
