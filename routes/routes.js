// Packages imports
const express = require("express");

// Routes imports
const {
  cuteCats,
  postCuteCat,
  lovedKitties,
} = require("../controllers/cute-cats");

const router = express.Router();

router.get("/cute-kitties", cuteCats);
router.get("/loved-kitties", lovedKitties);
router.post("/post-cuteness", postCuteCat);

module.exports = router;
