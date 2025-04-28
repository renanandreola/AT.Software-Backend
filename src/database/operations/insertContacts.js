const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const ContactsSchema = require("../Schemas/Contacts");

const Contacts = mongoose.model("Contacts", ContactsSchema);

async function insertContacts(newContact) {
  return new Promise(async (resolve, reject) => {
    const client = new MongoClient(process.env.DBURI);

    try {
      await client.connect();

      let contact = new Contacts(newContact);

      const database = client.db("ATDatabase");
      const collection = database.collection("contacts");

      const result = await collection.insertOne(contact);

      resolve(result);
    } catch (error) {
      console.log("Error on save contact: ", error);
      reject(error);
    } finally {
      await client.close();
    }
  });
}

module.exports = insertContacts;
