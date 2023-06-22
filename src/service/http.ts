import axios from 'axios';
import {getToken} from "@/helper/token";
import {useUserStore} from "@/stores/user";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

instance.interceptors.request.use(async (config) => {
  const accessToken = getToken();
  config.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : '';
  return config;
}, (error) => {
  return Promise.reject(error)
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  if (error.response.status === 401) {
    const {logOut} = useUserStore()
    logOut()
  }

  return Promise.reject(error);
});
export default instance