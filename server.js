const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const { dbConnect } = require('./utils/db')
require('dotenv').config()

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api', require('./routes/authRoutes'));
app.use('/api', require('./routes/dashboard/categoryRoutes'));
app.use('/api', require('./routes/dashboard/productRoutes'));
app.use('/api', require('./routes/dashboard/sellerRoutes'));

dbConnect();
const port = process.env.PORT
app.listen(port, (req, res) => console.log(`server listening on port ${port}`));