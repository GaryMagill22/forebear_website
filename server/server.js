const express = require('express');
const User = require('./Models/user.model');  // Importing your user model
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




app.post('/Signup', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required.' });
        }

        const newUser = new User({ email });
        await newUser.save();

        res.json({ message: 'Email registered successfully.' });

    } catch (error) {
        if (error.code === 11000) { // MongoDB error code for duplicate key
            return res.status(400).json({ error: 'Email already registered.' });
        }
        res.status(500).json({ error: 'Server error.' });
    }
});

//... (the rest of your server setup)
