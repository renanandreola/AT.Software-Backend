const express = require("express");
const router = express.Router();
const insertContacts = require("./database/operations/insertContacts");

router.get("/healthCheck", async (req, res) => {
  console.log("AT test routing in running!");

  return res.json({
    status: 200,
    message: "AT test routing in running!",
  });
});

router.post("/contact", async (req, res) => {
  try {
    const resultOpNewClients = await insertContacts(req.body);

    if (resultOpNewClients && resultOpNewClients.insertedId) {
      res.send({
        status: 200,
      });
    } else {
      res.send({
        status: 500,
      });
    }
  } catch (error) {
    console.log("Error at insertContacts: ", error);
  }
});

module.exports = router;
