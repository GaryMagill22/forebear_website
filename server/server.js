const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const port = 8000;




app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
