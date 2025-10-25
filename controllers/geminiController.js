const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log('Incoming request with prompt:', prompt); // Log incoming request

    if (!prompt) {
      console.log('Sending 400 Bad Request: Prompt is required');
      return res.status(400).json({ message: 'Prompt is required' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();
    console.log('Outgoing response:', responseText); // Log outgoing response
    console.log('Sending 200 OK');
    res.json({ text: responseText });
  } catch (error) {
    console.error('Error generating content:', error);
    console.log('Sending 500 Internal Server Error');
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { generateContent };
