const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DBURI;

// mongodb+srv://renan:<db_password>@atcluster.r3nia1r.mongodb.net/

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

const databaseConn = async () => {
  try {
    await client
      .connect()
      .then(() => {
        console.log("Connected successfully to MongoDB");
      })
      .catch((err) => {
        console.log("URI: ", uri);

        console.log("Error on connect to MongoDB: ", err);
      });
  } catch (err) {
    client.close();
    console.log("Error on connect database: ", err);
  }
};

module.exports = databaseConn;
