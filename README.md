# StockTrack - Inter IIT WebDev Screening Test

StockTrack is a stock tracking application that provides real-time and historical data for stocks. The application includes both a front-end and a back-end component.

   See the hosted website: [StockTrack](https://main--stocktrackdev.netlify.app/)

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Back-End Setup](#back-end-setup)
3. [Front-End Setup](#front-end-setup)
4. [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- SQLite (for the back-end database)
- `curl` or Postman (for testing API endpoints)

## Back-End Setup

1. **Navigate to the back-end directory:**

    ```bash
    cd back-end
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create the SQLite database:**

    Ensure you have a SQLite database file named `stock_data.db` in the `back-end` directory. If not, it will be created automatically when the server runs.

4. **Start the server:**

    ```bash
    node index.js
    ```

    The server should now be running on `http://localhost:5000`.

## Front-End Setup

1. **Navigate to the front-end directory:**

    ```bash
    cd stocktrack
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The front-end application should now be running on `http://localhost:3000`.

## Running the Application

1. **Start the back-end server first:**

    Navigate to the `back-end` directory and run:

    ```bash
    node index.js
    ```

2. **Start the front-end application:**

    Open a new terminal window, navigate to the `frontend` directory, and run:

    ```bash
    npm start
    ```

3. **Open your browser and go to:**

    ```bash
    http://localhost:3000
    ```

## API Endpoints

### Get Stock Data

- **Endpoint:** `GET /api/stock/:symbol`
- **Description:** Fetches minute-wise data for the given stock symbol.
- **Parameters:**
  - `symbol` (path parameter): The stock symbol (e.g., `NSEI`).
- **Response:** Returns JSON data with minute-wise stock information.

#### Example Request

```bash
curl -X GET http://localhost:5000/api/stock/NSEI
```

## Troubleshooting

- **`Cannot GET /api/stock/NIFTY50` Error:**
  - Ensure the back-end server is running and listening on the correct port.
  - Check that the route is correctly defined in `stock_routes.js`.

- **`Unexpected token '<', "<!DOCTYPE "... is not valid JSON` Error:**
  - This error usually indicates that the server is returning an HTML error page instead of JSON. Verify the API route and server logs for issues.

- **Database Errors:**
  - Ensure that SQLite is properly installed and that the database file is accessible.
