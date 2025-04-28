const express = require("express");
const router = express.Router();
const insertContacts = require("./database/operations/insertContacts");

router.get("/healthCheck", (req, res) => {
  console.log("Health Check hit!");

  return res.status(200).json({
    status: "success",
    message: "AT backend is running!",
  });
});

router.post("/contact", async (req, res) => {
  try {
    const resultOpNewClients = await insertContacts(req.body);

    if (resultOpNewClients?.insertedId) {
      return res.status(201).json({
        status: "success",
        message: "Contact inserted successfully",
        insertedId: resultOpNewClients.insertedId,
      });
    } else {
      return res.status(500).json({
        status: "error",
        message: "Failed to insert contact",
      });
    }
  } catch (error) {
    console.error("Error at insertContacts:", error);

    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = router;
