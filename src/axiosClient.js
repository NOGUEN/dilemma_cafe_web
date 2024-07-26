import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://cfqdnaomjctsvpoczwcm.supabase.co/rest/v1',
  headers: {
    apikey: process.env.REACT_APP_API_KEY,
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  }
});

export default axiosClient;