// Importing required functions from Firebase v9
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, orderBy, query, setDoc } from 'firebase/firestore';
import { getDatabase, ref, get, child, query as dbQuery, orderByKey, equalTo, once, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

// Import Firebase configuration
import FirebaseConfig from './FirebaseConfig';
import axios from 'axios'

// Ensure Firebase is initialized only once
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(FirebaseConfig);
} else {
    firebaseApp = getApp(); // If already initialized, use that one
}

class CoinGeckoApi {
    
    static async getCoinsFromCoinGecko() {
        let response
        
        const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10',
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
