import express from 'express';

// Set up express app
const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});