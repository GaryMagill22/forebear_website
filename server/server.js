const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const port = 8000;

// CONFIG EXPRESS ===================================================================
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));






// Listen on a port and provide feedback
app.listen(port, () => console.log(`Listening on port: ${port}`));