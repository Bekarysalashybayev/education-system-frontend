import {ref} from 'vue'
import {defineStore} from 'pinia'
import {type authResponseType} from "@/api/auth/AuthTypes";
import {getToken, removeToken} from "@/helper/token";

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(!!getToken() || false)
  const user = ref<authResponseType>({
    username: '',
    first_name: '',
    last_name: ''
  })
  const loggedIn = () => {
    isLoggedIn.value = true
  }

  const logOut = () => {
    isLoggedIn.value = false
    removeToken()
  }

  const setUser = (data: authResponseType | undefined) => {
    if (data) {
      user.value = data
    }
  }

  return {isLoggedIn, user, loggedIn, logOut, setUser}
})
