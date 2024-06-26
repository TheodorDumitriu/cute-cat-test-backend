const replaceNumberInUrl = (data) => {
  const replacedUrlsData = [];
  data.map((catObject) => {
    // Changing the number in the image URL with 64 to access directly the image and not the Tumblr page
    catObject.url = catObject.url.replace(/\/\/\d+\./, "//64.");
    replacedUrlsData.push({ url: catObject.url, id: catObject.id });
  });
  return replacedUrlsData;
};

const pickTwoRandomCats = (data) => {
  if (data.length < 2) {
    throw new Error("The array must contain at least two objects.");
  }

  const generateRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
  };

  let index1 = generateRandomIndex(data);
  let index2 = generateRandomIndex(data);

  return [data[index1], data[index2]];
};

module.exports = { replaceNumberInUrl, pickTwoRandomCats };
