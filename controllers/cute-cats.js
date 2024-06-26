const axios = require("axios");

const Kitty = require("../models/Kitty");

const cuteCats = async (req, res) => {
  try {
    const { data } = await axios.get("https://data.latelier.co/cats.json");

    const cleanCuteCatImgsArray = [];
    data.images.map((catObject) => {
      // Changing the number in the image URL with 64 to access directly the image and not the Tumblr page
      catObject.url = catObject.url.replace(/\/\/\d+\./, "//64.");
      cleanCuteCatImgsArray.push({ url: catObject.url, id: catObject.id });
    });

    return res.status(200).json({ data: cleanCuteCatImgsArray });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postCuteCat = async (req, res) => {
  try {
    const { kittyUrl, id } = req.body;

    // Pattern: check if items exist is DB => if not, "findOne" method returns "null" => if "null" => create new item => else increment loveScore by one
    const isKittyExisting = await Kitty.findOne({ id });

    if (isKittyExisting === null) {
      const newKitty = new Kitty({
        id,
        url: kittyUrl,
        loveScore: 1,
      });

      await newKitty.save();
      return res
        .status(201)
        .json({ message: "You just gave some love to this kitty" });
    } else {
      // If it exists, we increment the love score
      isKittyExisting.loveScore += 1;

      await isKittyExisting.save();
      return res.status(204).json({ message: "Kitty received even more love" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { cuteCats, postCuteCat };
