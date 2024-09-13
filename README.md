# StockTrack - Inter IIT WebDev Screening Test

## Overview

StockTrack is a web application designed for tracking NIFTY50 stock data. It features a frontend built with React and a backend built with Go. The application fetches minute-wise stock data from the Yahoo Finance API and visualizes it using charts in the frontend.

### Able to create front-end

## Features

- **Frontend**: Developed with React, displays stock data in interactive charts.
- **Backend**: Fetches and stores stock data from Yahoo Finance API, provides RESTful APIs to access the data.
- **Deployment**: Options for hosting or Dockerizing the application.

## Project Structure

```
StockTrack/
├── back-end/
├── front-end/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── .gitignore
└── README.md
```

## Frontend Setup

1. **Navigate to the Frontend Directory**:

   ```bash
   cd stocktrack
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Frontend**:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

   See the hosted website: [StockTrack](https://main--stocktrackdev.netlify.app/)
