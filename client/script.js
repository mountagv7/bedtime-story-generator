document.getElementById('generateBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('promptInput').value.trim();
  const storyText = document.getElementById('storyText');
  const storyImage = document.getElementById('storyImage');

  if (!prompt) return alert('Please enter a topic.');

  // Show loading message
  storyText.textContent = '✨ Generating story and image...';
  storyImage.src = '';

  try {
    const response = await fetch('/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    storyText.textContent = data.story;
    storyImage.src = data.imageUrl || '';
  } catch (err) {
    storyText.textContent = '❌ Failed to generate story or image.';
    storyImage.src = '';
    console.error(err);
  }
});
