import axios from 'axios';
import { parseResponse } from '../utils/Utils';

//const instance = axios.create({ baseURL: 'http://35.190.131.104:8888' })
//const instance = axios.create({ baseURL: 'http://localhost:8888' }) // this is for blockchain
const instanceDefault = axios.create({ baseURL: 'http://localhost:8000' }); // this is for firebase
/**
 * This File is for parsing and anything processing middleware with diferent directions
 */
export default {
    blog: {
        getAllBlogs: () => {
            return instanceDefault.get('/api/blogs')
        }
           
    }
}
