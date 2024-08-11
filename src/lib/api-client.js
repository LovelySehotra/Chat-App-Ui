import axios from "axios"
import { HOST } from "@/utils/constants";

const apiClient = axios.create({
    baseURL:HOST,
    withCredentials:true
})
// Add a request interceptor to include the Bearer token
apiClient.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("data"))?.accessToken; // Retrieve the token from localStorage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export default apiClient


 // const token = JSON.parse(localStorage.getItem("data"))?.accessToken
      // // const response = await dispatch(getUserDetails) 
      // console.log(token)
      // const response = await fetch('http://localhost:3000/api/auth/userInfo', {
      //   method: 'GET',
      //   headers: {
      //     'Authorization': `Bearer ${token}`
      //   }
      // });
      // const data = await response.json();
      // console.log(data)\