import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const getAllProduct = async (page =1, limit = 12, category = "", discount = false) => {
    try {
        const query = new URLSearchParams({
            page,
            limit,
            ...API_ROUTES(category && { category }),
            ...API_ROUTES(discount && { discount })
        });

        const response = await axiosInstance.get(`${API_ROUTES.GET_ALL_PRODUCT}?${query.toString()}`);
        response && console.log("getAllProduct() response: ", response.data);
        return response.data;
    } catch (error) {
        console.log("getAllProduct() error", error);
        return error.response.data;
    }    
};