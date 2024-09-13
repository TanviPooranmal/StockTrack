const express = require('express');
const yahooFinance = require('yahoo-finance2').default;
const db = require('./database');
const stockRoutes = require('./stock_routes');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use('/api/stocks', stockRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
