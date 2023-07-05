import { axiosInstance } from "../plugins/axios";

const useAxiosPrivate = () => {
  return axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${123}`;
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

export { useAxiosPrivate };
