require('dotenv').config();
const axios = require('axios');

async function generateStory(prompt) {
  const response = await axios.post(
    'https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct',
    {
      inputs: `Tell a calming bedtime story about ${prompt}`
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const full = response.data[0]?.generated_text || 'No story generated.';
  const echoedPrompt = `Tell a calming bedtime story about ${prompt}`;

  // Remove the echoed prompt and any leading punctuation/whitespace
  let clean = full.startsWith(echoedPrompt)
    ? full.slice(echoedPrompt.length)
    : full;

  clean = clean.replace(/^[:\s\-]+/, ''); // Remove leading ": ", "- ", etc.
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

async function fetchImage(prompt) {
  const response = await axios.get(
    'https://api.pexels.com/v1/search',
    {
      params: { query: prompt, per_page: 1 },
      headers: {
        Authorization: process.env.PEXELS_API_KEY
      }
    }
  );

  return response.data.photos[0]?.src.large || '';
}

module.exports = { generateStory, fetchImage };
