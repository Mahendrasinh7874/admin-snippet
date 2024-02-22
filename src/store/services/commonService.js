import { message } from "antd";
import axios from "axios";
import { BASE_URL } from "../../components/config/web.config";

// For Get Api 
export const handleGetResponse = async (url) => {
    try {
        const res = await axios.get(`${BASE_URL}/${url}`);
        const { status, message: customMsg, data } = res.data;
        if (parseInt(status) === 200) {
            return data;
        } else if (parseInt(status) === 404) {
            return "";
        } else {
            message.error(customMsg, 5);
            throw new Error(`API Error: ${customMsg}`);
        }
    } catch (error) {
        message.error(error?.message, 5);
    }
};

// For Post API
export const handlePostResponse = async (url, req, navigate, route) => {
    try {
        const response = await axios.post(`${BASE_URL}/${url}`, req);
        const { status, message: customMsg, data } = response.data;
        if (parseInt(status) === 200) {
            message.success(customMsg, 5);
            if (navigate && route) {
                navigate(route);
            }
            return data;
        } else {
            message.error(customMsg, 5);
        }
    } catch (error) {
        message.error(error?.message, 5);
    }
}

// For Patch (Update) API
export const handlePatchResponse = async (url, req, navigate, route) => {
    try {
        const response = await axios.put(`${BASE_URL}/${url}`, req);
        const { status, message: customMsg, data } = response.data;
        if (parseInt(status) === 200) {
            message.success(customMsg, 5);
            if (navigate && route) {
                navigate(route);
            }
            return data;
        } else {
            message.error(customMsg, 5);
        }
    } catch (error) {
        message.error(error?.message, 5);
    }
}

// For Delete API
export const handleDeleteResponse = async (url, req) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${url}`, req);
        const { status, message: customMsg } = response.data;
        if (parseInt(status) === 200) {
            message.success(customMsg, 5);
            return req;
        } else {
            message.error(customMsg, 5);
        }
    } catch (error) {
        message.error(error?.message, 5);
    }
}
