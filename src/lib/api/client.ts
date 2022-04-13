import axios, { AxiosError, AxiosResponse } from "axios";

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const responseInterceptorFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) return res.data;

  return {
    ...res,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
      // prettier-ignore
      'Authorization': `Bearer ${localStorage.getItem('user-token') ? localStorage.getItem('user-token') : null}`,
    },
  };
};

const responseInterceptorRejected = (error: AxiosError) => {
  const errorMsg = error.response?.data?.message ?? "에러입니다";

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

export function put<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
