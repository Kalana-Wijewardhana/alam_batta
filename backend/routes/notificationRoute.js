const express = require("express");
const { sendnotification } = require("../controllers/notificationControler");
const router = express.Router();

router.post("/send", createNotification);
// router.get("/", getProducts);
// router.get("/:id", getProduct);
// router.put("/:id", updateProduct);
// router.delete("/:id", deleteProduct);

module.exports = router;