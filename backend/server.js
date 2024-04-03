require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const port = 3000;


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
console.log(genAI); 

app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies


async function generateStory(prompt) {
    // Use the gemini-pro model for text-only input
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error("Error generating story:", error);
      return "An error occurred while generating the story.";
    }
  }
  
  app.post('/submit', async (req, res) => {
    const prompt = req.body.message;
  
    console.log("Received prompt:", prompt); // Log the received message
  
    try {
      const story = await generateStory(prompt);
      res.json({ message: story });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ message: "An error occurred." });
    }
  });
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
