const config = require("./package.json").projectConfig

module.exports = {
  mongoConfig: {
    connectionUrl: config.mongoConnectionUrl,
    database: "foodelivery_db",
    collection: {
      USERS: "users",
    },
  },
  serverConfig: {
      ip: config.serverIp,
      port: config.serverPort
  }
};
