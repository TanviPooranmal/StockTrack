// netlify/functions/stockData.js

const fetch = require('node-fetch');
const { default: yahooFinance } = require('yahoo-finance2');

exports.handler = async (event, context) => {
    try {
        const symbol = event.queryStringParameters.symbol || 'MSFT';
        const stockData = await yahooFinance.quote(symbol);

        return {
            statusCode: 200,
            body: JSON.stringify(stockData),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching stock data' }),
        };
    }
};
