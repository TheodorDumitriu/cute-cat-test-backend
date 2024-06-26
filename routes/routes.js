// Packages imports
const express = require("express");

// Routes imports
const { cuteCats, postCuteCat } = require("../controllers/cute-cats");

const router = express.Router();

router.get("/cute-kitties", cuteCats);
router.post("/post-cuteness", postCuteCat);

module.exports = router;
