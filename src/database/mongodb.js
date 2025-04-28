const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.DBURI, {
  serverApi: ServerApiVersion.v1,
  tls: true,
  tlsAllowInvalidCertificates: false,
});

const databaseConn = async () => {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Error on connect to MongoDB:", err);
  }
};

module.exports = databaseConn;
