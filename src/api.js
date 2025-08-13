import axios from 'axios';
const API = import.meta.env.VITE_API_URL || 'https://rapid-acceleration-partner-blaze.onrender.com';
export default axios.create({ baseURL: API, timeout: 20000 });
