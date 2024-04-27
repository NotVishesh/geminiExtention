const express = require('express');
const cors = require('cors');
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const port = 3000;

app.use(cors());
app.use(express.json()); 

async function generateStory(apiKey, prompt) {
    const genAI = new GoogleGenerativeAI(apiKey);
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
    const { apiKey, message } = req.body;

    try {
        const story = await generateStory(apiKey, message);
        res.json({ message: story });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ message: "An error occurred." });
    }
});

app.get('/' , (req, res) =>{
  res.json({message : 'to use api post request to /submit'})
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
