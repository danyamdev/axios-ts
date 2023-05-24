import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const URL_JP = 'https://jsonplaceholder.typicode.com';
const URL_DJ = 'https://dummyjson.com';

const onFulfilledResponse = (res: AxiosResponse) => {
  console.log('===>res.status', res.status);

  return res;
};

const onRejectedResponse = (error: any) => {
  // if (axios.isAxiosError(error)) {
  //   if (error.status === 401 && token) {
  //     const { data } = axios.post('/auth', { refreshToken: token });
  //     localStorage.setItem('token', data);
  //   }
  // }

  if (axios.isAxiosError(error)) {
    console.log('===>error', error);
    console.log('===>error.response?.data.errorText', error.response?.data.errorText);
  } else if (error instanceof Error) {
    console.log('===>error.message', error.message);
  }
};

const onFulfilledRequest = (config: InternalAxiosRequestConfig) => config;

const onRejectedRequest = (error: any) => error;

const setupAxios = (url: string) => {
  const instance: AxiosInstance = axios.create({
    baseURL: url,
    headers: {
      Authorization: 'Bearer TOKEN',
    },
    withCredentials: true,
  });

  instance.interceptors.response.use(
    res => onFulfilledResponse(res),
    err => onRejectedResponse(err),
  );

  instance.interceptors.request.use(
    config => onFulfilledRequest(config),
    err => onRejectedRequest(err),
  );

  return instance;
};

// несколько URL для микросервисов
export const bffAxiosJP = setupAxios(URL_JP);
export const bffAxiosDJ = setupAxios(URL_DJ);
