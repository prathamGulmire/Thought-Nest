
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080", // Replace with your backend URL
}); 

// Function to set the Authorization header dynamically
export const setAuthHeader = (userName, password) => {
    const authString = `Basic ${btoa(`${userName}:${password}`)}`;
    axiosInstance.defaults.headers.common["Authorization"] = authString;
};

// Function to clear the Authorization header
export const clearAuthHeader = () => {
    delete axiosInstance.defaults.headers.common["Authorization"];
};

export default axiosInstance;