const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

const NEWS_API_KEY = '08c6016dd4c84ab29d292a2efab337cc';

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching news');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
