const aiService = require("../services/ai.services");

const getReview = async (req, res) => {
  const lang = req.body.lang;
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  const response = await aiService.generateContent(lang + prompt);
  // console.log(response);

  res.send(response);
};

module.exports = { getReview };
