import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

app.use(express.json());
app.use(express.static('public')); // Serve arquivos estáticos do diretório 'public'

app.get('/api/generate', async (req, res) => {
  try {
    const prompt = req.query.prompt || '';
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
