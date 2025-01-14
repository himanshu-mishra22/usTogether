const db = require("mongoose");

const connectDatabase = () => {
    db
      .connect(process.env.DB_URI, {
      })
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      });
  };
  module.exports = connectDatabase;