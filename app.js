const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const comicBookRoutes = require('./routes/comicBookRoutes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', comicBookRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
