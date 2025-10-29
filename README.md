# Gemini Clone - Backend

This is the backend server for the Gemini Clone application. It is built with Node.js and Express, and it handles user authentication, and communication with the Gemini API.

## Features

*   **RESTful API:** Provides a set of endpoints for the frontend application.
*   **User Authentication:** Manages user registration and login using JSON Web Tokens (JWT).
*   **Password Hashing:** Securely hashes user passwords using `bcryptjs`.
*   **Gemini API Integration:** Acts as a proxy to communicate with the Google Gemini API.
*   **Database:** Uses MongoDB with Mongoose for data persistence.
*   **Middleware:** Includes custom middleware for error handling.

## API Endpoints

The server exposes the following API endpoints:

*   `POST /api/users/register`: Creates a new user.
*   `POST /api/users/login`: Authenticates a user and returns a JWT.
*   `POST /api/gemini`: Handles chat requests to the Gemini API (protected route).

## Technologies Used

*   **Node.js:** A JavaScript runtime environment.
*   **Express:** A web application framework for Node.js.
*   **MongoDB:** A NoSQL database for storing user data.
*   **Mongoose:** An ODM (Object Data Modeling) library for MongoDB.
*   **JSON Web Token (JWT):** For creating authentication tokens.
*   **bcryptjs:** For hashing passwords.
*   **CORS:** To enable Cross-Origin Resource Sharing.
*   **dotenv:** For managing environment variables.

## Getting Started

Follow these instructions to get the backend server up and running on your local machine.

### Prerequisites

You need to have the following installed:
*   [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
*   [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1.  Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2.  Install the dependencies:
    ```sh
    npm install
    ```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables. This file is used for local development and should not be committed to version control.

```
MONGO_URI=<Your_MongoDB_Connection_String>
JWT_SECRET=<Your_JWT_Secret>
GEMINI_API_KEY=<Your_Google_Gemini_API_Key>
```

## Available Scripts

### `npm start`

To run the server, it is recommended to add a `start` script to your `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

Then you can start the server by running:
```sh
npm start
```
The server will start on the port defined in your environment variables or a default port.
