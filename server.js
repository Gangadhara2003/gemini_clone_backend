const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

const userRoutes = require('./routes/auth');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);

const geminiRoutes = require('./routes/gemini');
app.use('/api/gemini', geminiRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
