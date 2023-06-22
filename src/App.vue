<template>
    <RouterView/>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
import {useAuthentication} from "@/composables/use-authentication";

useAuthentication()
</script>

<style scoped>

</style>
