export const removeToken = () => localStorage.removeItem('access_token')
export const setToken = (token: string) => localStorage.setItem('access_token', token)
export const getToken = () => JSON.parse(JSON.stringify(localStorage.getItem('access_token')))