// // 

// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const cors = require('cors');

// dotenv.config();

// // Connect to DB
// connectDB();

// const app = express();

// app.use(cors()); // Enable CORS
// app.use(express.json());

// // Routes
// const userRoutes = require('./routes/auth');
// const geminiRoutes = require('./routes/gemini');
// const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// app.use('/api/users', userRoutes);
// app.use('/api/gemini', geminiRoutes);

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// // **Remove app.listen()**
// // Vercel will handle the server
// module.exports = app;
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Only load dotenv in non-production (local) environment
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Connect to MongoDB
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Only load .env locally
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Connect to DB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/auth');
const geminiRoutes = require('./routes/gemini');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/gemini', geminiRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
