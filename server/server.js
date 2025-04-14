const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the client folder
app.use(express.static(path.join(__dirname, '../client')));


const { generateStory, fetchImage } = require('./aiStory');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/generate', async (req, res) => {
  const prompt = req.body.prompt;
  console.log('🟡 Request received:', prompt);
  try {
    const story = await generateStory(prompt);
    const imageUrl = await fetchImage(prompt);
    res.json({ story, imageUrl });
  } catch (error) {
    console.error('❌ Error generating:', error.message);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
