import axios from "axios";
import { API_ROUTES, STORAGE_KEYS } from "./config";
import { clearItemFromLocalStorage, getItemFromLocalStorage } from "../helpers/helper";

const axiosInstance = axios.create({
    baseURL: API_ROUTES.LOCAL_BASE_URL,
    timeout: 30000,
});

//request interceptor: add token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getItemFromLocalStorage(STORAGE_KEYS.TOKEN);
        if(token) {
            config.headers[STORAGE_KEYS.TOKEN] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//response interceptor: handle auth errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && [401, 403].includes(error.response.status)) {
            if (window.location.pathname !== "/login") {
                clearItemFromLocalStorage();
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;