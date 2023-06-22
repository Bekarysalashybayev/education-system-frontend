import {type authRequestType} from "@/api/auth/AuthTypes";
import http from "@/service/http";

export const login = (user: authRequestType) => http.post('/user/login/', user)
export const authMe = () => http.get('/user/me/')