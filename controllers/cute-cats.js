const axios = require("axios");

const cuteCats = async (req, res) => {
  try {
    const { data } = await axios.get("https://data.latelier.co/cats.json");

    const cleanCuteCatImgsArray = [];
    data.images.map((catObject) => {
      // Changing the image URL to access directly the image and not the Tumblr page
      catObject.url = catObject.url.replace(/\/\/\d+\./, "//64.");
      cleanCuteCatImgsArray.push({ url: catObject.url, id: catObject.id });
    });

    return res.status(200).json({ data: cleanCuteCatImgsArray });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { cuteCats };
