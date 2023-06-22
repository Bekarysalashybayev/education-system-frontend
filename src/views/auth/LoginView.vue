<template>
    <form @submit.prevent="login">
        <h1>login</h1>
        <input type="text" v-model="form.iin">
        <input type="text" v-model="form.password">
        <button type="submit">Login</button>
    </form>
</template>

<script setup lang="ts">
import {type authRequestType} from "@/api/auth/AuthTypes";
import {userApi} from '@/api'
import {ref} from "vue";
import {useUserStore} from "@/stores/user";
import {useRouter} from "vue-router";
import {useAuthentication} from "@/composables/use-authentication";
import {setToken} from "@/helper/token";

const router = useRouter()

const form = ref<authRequestType>({
    iin: '7472853498',
    password: '12345678'
})

const {loggedIn} = useUserStore()
const {auth} = useAuthentication()

const login = async () => {
    if (!form.value.iin || !form.value.password) {
        alert('error')
        return;
    }
    try {
        const {data} = await userApi.login(form.value)
        if (data) {
            setToken(data.access)
            await loggedIn()
            await auth()
            await router.push('/')
        }
    }catch (e) {
        console.error(e)
    }
}
</script>

<style lang="scss" module>

</style>