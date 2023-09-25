import axios from 'axios';

const service = axios.create({
  baseURL: '',
  timeout: 5000,
});
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，例如添加请求头等
    return config;
  },
  (error) => {
    // 对请求错误做一些处理
    console.log(error);
    return Promise.reject(error);
  },
);
service.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理，例如提取出数据部分等
    return response.data;
  },
  (error) => {
    // 对响应错误做一些处理
    console.log(error);
    return Promise.reject(error);
  },
);
export default service;
