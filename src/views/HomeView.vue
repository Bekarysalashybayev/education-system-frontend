<template>
    <main :class="$style.main">
        <h1>HOME</h1>
        <h2><strong>Email:</strong> {{ user.username }}</h2>
        <h2>{{ user.first_name + ' ' + user.last_name }}</h2>
        <div :class="$style.ii">
            <be-input
                v-model="val"
                label="test label"
                required
                @blur="blur"
                @focus="focus"
            />
            <br>
            {{ val }}
        </div>
    </main>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/user";
import {computed, ref} from "vue";
import BeInput from "@/components/ui/input/BeInput.vue";
import {authResponseType} from "@/api/auth/AuthTypes";

const val = ref('')

const userStore = useUserStore()
const user = computed<authResponseType>(() => userStore.user)

const blur = () => console.log("blur")
const focus = () => console.log("focus")

</script>

<style lang="scss" module>
@use '@/assets/scss/variables.scss' as *;

.main {
    //background-color: orange;
    //height: 100vh;
    //padding: 20px;
}

h3 {
    color: $color-blue;
    margin-bottom: 20px;
}

.ii {
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>