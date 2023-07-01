import axios, { AxiosError, AxiosInstance } from "axios";
import { BASE_URL } from "./endpoint";

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20 * 1000,
});

const DEFAULT_HEADERS = {
  Accept: "application/json",
  "Content-type": "application/json",
};

const onRequest = (config: any) => {
  const token = localStorage.getItem("accessToken");

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

// network error
// خطایی در ارسال ریکوست
const onRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

export const onResponse = (config: any) => {
  console.log("fig", config);
  return config;
};

const onResponseError = (error: AxiosError) => {
  const message = error.response?.data;
  alert(message);
  return Promise.reject(error);
};

const setupInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use();
  axiosInstance.interceptors.response.use();

  return axiosInstance;
};

const clientWithInterceptor = setupInterceptor(axiosClient);

const http = {
  get: (
    url: string,
    params: object = {},
    headers: object = DEFAULT_HEADERS
  ) => {
    return clientWithInterceptor.get(url, { params, headers });
  },
  post: (
    url: string,
    data = {},
    params: object = {},
    headers: object = DEFAULT_HEADERS
  ) => {
    return clientWithInterceptor.post(url, data, { params, headers });
  },
};

export default http;
