const replaceNumberInUrl = (data) => {
  const replacedUrlsData = [];
  data.map((catObject) => {
    // Changing the number in the image URL with 64 to access directly the image and not the Tumblr page
    catObject.url = catObject.url.replace(/\/\/\d+\./, "//64.");
    replacedUrlsData.push({ url: catObject.url, id: catObject.id });
  });
  return replacedUrlsData;
};

module.exports = { replaceNumberInUrl };
