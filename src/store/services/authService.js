import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../helpers/web-config";
import { message } from "antd";
import setAuthToken from "../../helpers/setAuthToken";
import axios from "axios";

export const actionLogin = createAsyncThunk("actionLogin",
    async (data, { dispatch, rejectWithValue }) => {
        const { values, navigate, checked } = data;
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, values);
            const { status, message: customMsg, data: responseData } = res.data;
            console.log({ responseData });

            if (parseInt(status) === 200) {
                const { user } = responseData;
                const isAdmin = user.roles === 'admin' ? true : false;
                if (isAdmin) {
                    message.success(customMsg, 5);
                    setAuthToken(responseData.access_token);
                    dispatch(authMe());
                    navigate && navigate(`/`);
                    return responseData;
                } else {
                    message.error("Only Admin Can Login This Portal", 5);
                }
            } else {
                message.error(customMsg, 5);
            }
        } catch (error) {
            message.error(error?.message, 5);
            throw rejectWithValue(error?.message);
        }
    }
);


// Auth me
export const authMe = createAsyncThunk("authMe", async () => {
    try {
        const res = await axios.get(`${BASE_URL}/auth/me`);
        const { status, message: customMsg, data } = res.data;
        if (parseInt(status) === 200) {
            return data;
        } else if (parseInt(status) === 401) {
            localStorage.removeItem("token");
            setAuthToken(false);
            window.location.replace("/login");
            message.error(customMsg, 5);
        } else {
            message.error(customMsg, 5);
            throw new Error(`API Error: ${customMsg}`);
        }
    } catch (error) {
        console.log({ error });
        if (error.response.data.message === "Unauthorized") {
            localStorage.removeItem("token");
            setAuthToken(false);
            window.location.replace("/login");
            message.error(error?.message, 5);
        }
    }
});


export const logoutUser = createAsyncThunk("logoutUser", async ({ navigate }) => {
    try {
        setAuthToken(false);
        localStorage.removeItem('token');
        navigate("/login");
    } catch (err) {
        message.error(err.message, 5);
    }
}) 