const { MongoClient } = require("mongodb");

const { mongoConfig } = require("../config");

class MongoDB {
  static connectToMongoDB = () => {
    MongoClient.connect(mongoConfig.connectionUrl)
      .then((connection) => {
        console.log("MongoDb Connected");
        this.db = connection.db(mongoConfig.database);
      })
      .catch((error) => console.log(`MongoDb Not Connected : ${error}`));
  };
}

// const url = "mongodb://localhost:27017";

// const connection = () => {
//   MongoClient.connect(url)
//     .then((connection) => console.log(connection))
//     .catch((err) => console.log("Not Connected"));
// };

MongoDB.db = null

module.exports = MongoDB;
