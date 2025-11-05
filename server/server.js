// Step 1: Import Express and cors
const express = require('express');
const cors = require('cors');

// Step 2: Create an Express app
const app = express();

// Step 3: Use cors middleware
app.use(cors());

// Step 4: Define a port
const PORT = 3001;

// Step 5: Start the serv
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It's not whether you get knocked down, it's whether you get up."
];

app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});
require('dotenv').config();
const axios = require('axios');

app.get('/api/weather', async (req, res) => {
  try {
    const city = 'London';
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;
    const simplified = {
      temperature: data.main.temp,
      description: data.weather[0].description
    };
    res.json(simplified);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});
app.get('/api/currency', async (req, res) => {
  const amount = parseFloat(req.query.amount);
  if (isNaN(amount)) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    const apiKey = process.env.CURRENCY_API_KEY;
    const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
    const response = await axios.get(url);
    const rates = response.data.rates;

    // Assuming rates are against USD, convert INR to USD and EUR
    const inrToUsd = amount / rates.INR; 
    const inrToEur = inrToUsd * rates.EUR;

    res.json({
      usd: inrToUsd.toFixed(2),
      eur: inrToEur.toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch currency rates" });
  }
});
// Weather API with error handling
app.get('/api/weather', async (req, res) => {
  try {
    const city = 'London';
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;
    res.json({
      temperature: data.main.temp,
      description: data.weather[0].description
    });
  } catch (error) {
    res.status(500).json({ error: "Could not fetch weather data." });
  }
});

// Currency API with error handling
app.get('/api/currency', async (req, res) => {
  const amount = parseFloat(req.query.amount);
  if (isNaN(amount)) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    const apiKey = process.env.CURRENCY_API_KEY;
    const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
    const response = await axios.get(url);
    const rates = response.data.rates;

    const inrToUsd = amount / rates.INR;
    const inrToEur = inrToUsd * rates.EUR;

    res.json({
      usd: Number(inrToUsd.toFixed(2)),
      eur: Number(inrToEur.toFixed(2))
    });
  } catch (error) {
    res.status(500).json({ error: "Could not fetch currency rates." });
  }
});

