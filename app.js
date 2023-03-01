const express = require('express');
const axios = require('axios');

require('dotenv').config();

const app = express();

app.get('/weather/:location', async (req, res) => {
  try {
    const { location } = req.params;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = app;
