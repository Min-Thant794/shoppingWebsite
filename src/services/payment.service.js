import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const getAllPayments = async () => {
    try {
        const response = await axiosInstance.get(API_ROUTES.GET_ALL_PAYMENT);
        response && console.log("response all payments: ", response.data);
        return response.data;
    } catch (error) {
        console.error("gerAllPayments() error!", error);
        throw error.response?.data;
    }
}