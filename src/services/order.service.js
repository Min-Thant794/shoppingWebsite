import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const createOrder = async (orderData) => {
    try {
        const response = await axiosInstance.post(API_ROUTES.ORDER, orderData);
        response && console.log("Order is successfully created!", response.data);
        return response.data;
    } catch (error) {
        console.error("An Error Occurred at createOrder(): ", error);
        throw error.response?.data || { message: "Failed to create order" };
    }
}

export const getOrdersByUserId = async (userId) => {
    try {
        const response = await axiosInstance.get(`${API_ROUTES.ORDER}/user/${userId}`);
        response && console.log("get order by user id response: ", response.data);
        return response.data;
    } catch (error) {
        console.error("An Error Occurred at getOrdersByUserId(): ", error.response?.data || error.message);
        throw error.response?.data || { message: "Failed to getch orders"};
    }
};

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await axiosInstance.patch(`${API_ROUTES.ORDER}/status`, {
            orderId, 
            status,
        });
        response && console.log("order updated successfully!", response.data);
        return response.data;
    } catch (error) {
        console.error("Update order status failed: ", error.response?.data || error.message);
        throw error.response?.data || { message: "Failed to update order"};
    }
}