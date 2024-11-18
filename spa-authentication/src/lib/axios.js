import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken:true,
    headers: {
        Accept: 'application/json'
    }
});


const initializeCsrf = async () => {
    try {
        await axios.get('/sanctum/csrf-cookie');
        console.log("CSRF token initialized");
    } catch (error) {
        console.error("Failed to initialize CSRF token:", error);
        throw error; 
    }
};

export { axios, initializeCsrf };
