import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const prompt = req.query.prompt || '';
            const result = await model.generateContent(prompt);
            const response = await result.response.text();
            res.status(200).json({ response });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
