const express = require('express');
const path = require('path');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3001;

// Collect Node.js default metrics for Prometheus
client.collectDefaultMetrics();

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
    try {
        res.set('Content-Type', client.register.contentType);
        res.end(await client.register.metrics());
    } catch (ex) {
        res.status(500).end(ex);
    }
});

// Route all other requests to index.html (for SPA-like behavior if needed)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend server listening on port ${PORT}`);
});
