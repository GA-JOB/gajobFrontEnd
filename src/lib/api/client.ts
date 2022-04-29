import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// Request interceptor
const interceptorRequestFulfilled = (config: AxiosRequestConfig) => {
  let token = localStorage.getItem("user-token");
  return {
    ...config,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    },
  };
};

instance.interceptors.request.use(interceptorRequestFulfilled);

// Response interceptor
const responseInterceptorFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) return res.data;

  return Promise.reject(...res.data);
};

const responseInterceptorRejected = (error: AxiosError) => {
  const errorMsg = error.response?.data?.message ?? "에러입니다";
  console.log(error);
  alert(errorMsg);
  return new Error(error.response?.data?.message ?? error);
};

instance.interceptors.response.use(
  responseInterceptorFulfilled,
  responseInterceptorRejected
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
