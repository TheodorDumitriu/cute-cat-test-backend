// Packages imports
const express = require("express");

// Routes imports
const { cuteCats } = require("../controllers/cute-cats");

const router = express.Router();

router.get("/cute-kitties", cuteCats);

module.exports = router;
