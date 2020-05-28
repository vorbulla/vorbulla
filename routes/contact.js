const express = require("express");
const { postContact, getContact } = require("../controllers/contact");

const router = express.Router({ mergeParams: true });

router.route("/").get(getContact).post(postContact);

module.exports = router;
