import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const BASE_URL = "http://10.0.2.2:5001/"
export const TIME_OUT = 30000;
export const TOKEN_NAME = "BLOSSOM_TOKEN"
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const saveToken = async (key: string, value: string) => {
    try {
        if (Platform.OS === 'web') {
            await AsyncStorage.setItem(key, value);
        } else { // mobile
            await SecureStore.setItemAsync(key, value.toString());
        }
    } catch (error) {
        console.log("error in save token", error);
        throw error;

    }
}

axiosInstance.interceptors.request.use(async (req) => {
    try {
        if (Platform.OS === 'web') {
            const result = await AsyncStorage.getItem(TOKEN_NAME);
            if (result) {
                req.headers.Authorization = `Bearer ${result}`;
            }
        }else{
            const access_token = await SecureStore.getItemAsync(TOKEN_NAME)
            req.headers.Authorization = `Bearer ${access_token}`
        }
        return req;
    } catch (error) {
        return req;
    }
})

export const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data)
export default axiosInstance