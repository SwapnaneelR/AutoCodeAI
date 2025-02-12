const aiService = require("../services/ai.services");

const getResponse = async (req, res) => {
  const prompt = req.query.prompt;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }
  const response = await aiService.generateContent(prompt);
  console.log(response);

  res.send(response);
};

module.exports = { getResponse };
