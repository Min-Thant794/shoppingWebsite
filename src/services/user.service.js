import axiosInstance from "../config/axiosInstance";
import { API_ROUTES } from "../config/config";

export const updateUserData = async (id, payload) => {
    try {
        const response = await axiosInstance.put(`${API_ROUTES.UPDATE_USER}/${id}`, payload);
        response && console.log("updateuserData() response: ", response.data);
        return response.data;
    } catch (error) {
        console.log("updateUserData() error", error);
    }
}