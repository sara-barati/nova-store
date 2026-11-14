import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let message = "Something went wrong";

    if (axios.isAxiosError(error)) {
      if (error.response) {
        message = `API Error: ${error.response.status}`;
      } else if (error.request) {
        message = "Unable to connect to the server";
      }
    }

    return Promise.reject(new Error(message));
  },
);

export default axiosInstance;
