// stock_routes.js

const express = require('express');
const router = express.Router();
const db = require('./database'); // Adjust the path as needed
const yahooFinance = require('yahoo-finance2').default;

// Route to fetch stock data for the last 7 days
router.get('/:symbol', async (req, res) => {
    try {
        const { symbol } = req.params;

        if (!symbol) {
            return res.status(400).json({ error: true, message: 'Stock symbol is required' });
        }

        // Fetch real-time data from Yahoo Finance
        const stockData = await yahooFinance.quote(symbol);

        if (!stockData) {
            return res.status(500).json({ error: true, message: 'Error fetching stock data' });
        }

        // Extract relevant data from the response
        const { regularMarketPrice, regularMarketOpen, regularMarketDayHigh, regularMarketDayLow, regularMarketVolume, regularMarketTime } = stockData;

        // Insert stock data into SQLite database
        const query = `INSERT INTO stocks (symbol, date, open, high, low, close, volume) 
                        VALUES (?, ?, ?, ?, ?, ?, ?)`;

        const values = [
            symbol,
            new Date(regularMarketTime).toISOString().slice(0, 10), // Date in YYYY-MM-DD format
            regularMarketOpen || null,
            regularMarketDayHigh || null,
            regularMarketDayLow || null,
            regularMarketPrice || null,
            regularMarketVolume || null
        ];

        db.run(query, values, function (err) {
            if (err) {
                console.error('Error inserting data:', err.message);
                return res.status(500).json({ error: true, message: 'Error saving data to database' });
            }

            // Fetch the last 7 days of data
            const sql = `SELECT * FROM stocks WHERE symbol = ? AND date >= date('now', '-7 days') ORDER BY date DESC`;

            db.all(sql, [symbol], (err, rows) => {
                if (err) {
                    console.error('Error fetching data from database:', err.message);
                    return res.status(500).json({ error: true, message: 'Error fetching data from database' });
                }

                // Transform data for the frontend
                const formattedData = rows.map(row => ({
                    date: row.date,
                    close: row.close
                }));

                res.json({ response: formattedData });
            });
        });
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: true, message: 'Internal server error', details: error.message });
    }
});

module.exports = router;
