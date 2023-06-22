<template>
    <div :class="['loader']" :style="styles"></div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    size: {
        type: Number,
        default: 25,
    },
    color: {
        type: String,
        required: false,
    },
    speed: {
        type: Number,
        required: false,
    }
})
const borderSize = computed(() => props.size / 9)

const styles = computed(() => ({
    width: `${props.size}px`,
    height: `${props.size}px`,
    borderWidth: `${borderSize.value}px`,
    borderColor: props.color,
    animationDuration: `${props.speed}s`
}))

</script>

<style scoped lang="scss">
@use '@/assets/scss/colors.scss' as *;
.loader {
    border-style: solid;
    border-color: $color-main;
    border-bottom-color: transparent !important;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>