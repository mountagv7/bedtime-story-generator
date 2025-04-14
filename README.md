# 🌙 Bedtime Story Generator

This project is a fun bedtime story generator that uses AI to create a calming story and fetches a related image using two different APIs.

## 🧠 Features

- Takes a topic as input (e.g., cat, forest, pizza)
- Uses the Hugging Face AI API to generate a calming bedtime story
- Uses the Pexels API to retrieve a matching photo
- Displays both the story and the image nicely styled with CSS
- Built with Node.js, Express, and vanilla HTML/CSS/JS

## 📁 Project Structure

Bonus/
├── client/
│ ├── index.html
│ ├── styles.css
│ └── script.js
├── server/
│ ├── server.js
│ └── aiStory.js
├── .env
├── .gitignore
└── package.json

## 🚀 Getting Started
Clone the repository:  
`git clone https://github.com/mountagv7/bedtime-story-generator.git`  
`cd bedtime-story-generator`  
Install dependencies:  
`npm install`  
Create a `.env` file at the root with your API keys:  
HUGGINGFACE_API_TOKEN=your_huggingface_token
PEXELS_API_KEY=your_pexels_token

Start the server:  
`node server/server.js`  
Then open your browser and go to:  
`http://localhost:3000`
## 🧠 Tech Stack
- Node.js  
- Express  
- Axios  
- Hugging Face API  
- Pexels API  
- Vanilla JavaScript  
- HTML5 & CSS3  
## 🧪 How It Works
- Frontend sends a POST request to `/generate` with a prompt.  
- Backend calls Hugging Face to generate a story.  
- Backend calls Pexels to get a related image.  
- The results are sent back to the frontend and displayed to the user.  
## 🙈 .gitignore
Make sure to exclude sensitive files:  
node_modules/
.env

## 👤 Author
**Mountaga Sy**  
GitHub: [mountagv7](https://github.com/mountagv7)  
## 📷 Preview
*Add a screenshot or demo GIF here later if needed*

