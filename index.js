const express = require('express');
const axios = require('axios');
const app = express();

app.use(async (req, res) => {
    try {
        const r = await axios.get('https://www.iranintl.com' + req.url, {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            responseType: 'arraybuffer'
        });
        res.set('Content-Type', r.headers['content-type']);
        res.send(r.data);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.listen(process.env.PORT || 3000);
