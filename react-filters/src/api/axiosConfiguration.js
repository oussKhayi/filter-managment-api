import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = "http://localhost:8000/api";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = API_BASE_URL;

const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`, // Add token for authorized requests
    },
});

// Error handling for API calls
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error);
    }
);

// Additional interceptors for specific functionalities
// e.g., logging requests and responses

export { instance };
