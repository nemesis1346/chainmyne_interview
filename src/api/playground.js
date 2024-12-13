const axios = require('axios'); // Ensure axios is imported

const options = {
    method: 'GET',
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10',
    headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-AJjQFzrZCQX2muGyMuh1ZjBf',
    },
};

const fetchData = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

fetchData();