const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const axios = require('axios');
const port = 8000;




// CONFIG EXPRESS ===================================================================
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


// Listen on a port and provide feedback
app.listen(port, () => console.log(`Listening on port: ${port}`));



app.post('/Signup', async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;

        if (!email || !firstName || !lastName) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Saving to Shopify as a new customer
        const shopifyResponse = await axios.post('https://fore-2-tour.myshopify.com/admin/api/2022-04/customers.json', {
            customer: {
                first_name: firstName,
                last_name: lastName,
                email: email
            }
        }, {
            headers: {
                'X-Shopify-Access-Token': process.env.PRIVATE_STOREFRONT_API_TOKEN,
                'Content-Type': 'application/json'
            }
        });

        if (shopifyResponse.data && shopifyResponse.data.customer) {
            res.json({ message: 'Registered successfully.' });
        } else {
            throw new Error('Failed to save email in Shopify.');
        }

    } catch (error) {
        console.error("Error occurred:", error);

        let errorMessage = 'Server error.';

        if (error.response && error.response.data && error.response.data.errors) {
            errorMessage = `Shopify error: ${error.response.data.errors}`;

        }

        return res.status(500).json({ error: errorMessage });
    }
});







