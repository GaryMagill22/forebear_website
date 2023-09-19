import { createStoreFrontClient } from '@shopify/hydrogen';
require('dotenv').config();


const client = createStoreFrontClient({
    privateStorefrontToken: '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', // Replace with your token
    storeDomain: 'https://fore-2-tour.myshopify.com', // Replace with your shop domain
    storefrontApiVersion: '2023.7.7', // Replace with your API version
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;