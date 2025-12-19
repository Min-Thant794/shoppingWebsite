import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const getAllCategories = async () => {
    try {
        const response = await axiosInstance.get(API_ROUTES.GET_ALL_CATEGORY);
        response && console.log("response all categories", response.data);
        return response.data
    } catch (error) {
        console.log("getAllCategories() error: ", error);
        return error.response.data;
    }
}