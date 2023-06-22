import {useUserStore} from "@/stores/user";
import {authMe} from "@/api/auth";
import router from "@/router";
import {storeToRefs} from "pinia";
import {onMounted, watch} from "vue";

export const useAuthentication = () => {
  const {isLoggedIn} = storeToRefs(useUserStore())

  const {loggedIn, logOut, setUser} = useUserStore()

  const auth = async () => {
    try {
      const {data} = await authMe()
      setUser(data)
      loggedIn()
    } catch (e) {
      console.error(e)
    }
  }

  const signOut = async () => {
    logOut()
    await router.push('/login')
  }

  onMounted(async () => {
    if (!isLoggedIn) {
      await signOut()
      return
    }
    await auth()
  })

  watch(() => isLoggedIn.value, async () => {
    if (!isLoggedIn.value) {
      await signOut()
    }
  })

  return {auth, signOut}
}