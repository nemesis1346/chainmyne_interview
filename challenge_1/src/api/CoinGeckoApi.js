import axios from 'axios'

class CoinGeckoApi {
    
    static async getCoinsFromCoinGecko() {
        let response
        
        const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-AJjQFzrZCQX2muGyMuh1ZjBf'}
        };
        
        
        try {
            response = await axios.request(options);
            console.log(response.data);
            return response.data; // Return ordered documents
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch coins from CoinGecko API');
        }
        
    }
    
}

export default CoinGeckoApi;
