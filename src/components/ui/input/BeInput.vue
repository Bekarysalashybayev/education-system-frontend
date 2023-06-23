<template>
    <div :class="['input-wrapper', focused && 'focus',]">
        <label @click="focused=true" v-if="label">
            {{ label }} <span v-if="required">*</span>
        </label>
        <input
            type="text"
            ref="inputRef"
            :value="modelValue"
            @input="onInput"
            @blur="blur"
            @focus="focus"
        >
    </div>
</template>

<script setup lang="ts">
import {useFocus} from "@vueuse/core";
import {ref} from "vue";

const inputRef = ref<HTMLInputElement>()
const {focused} = useFocus(inputRef)

defineProps({
    label: {
        type: String,
    },
    // placeholderType: {
    //     type: String,
    //     default: 'block',
    //     validator: (val: string): boolean => ['block', ''].includes(val)
    // },
    required: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: String,
        required: true,
    }
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const blur = () => emit('blur')
const focus = () => emit('focus')

const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables.scss" as *;

.input-wrapper {

    @include t1;
    border: 1px solid $color-main;
    border-radius: $input-round-1;
    padding: 10px;
    overflow: hidden;

    &.focus {
        border-color: $color-blue;
    }


    label {
        @include t1;
        display: block;

        span {
            color: $color-red;
        }
    }

    input {
        border: 0;
        background-color: transparent;
        border-radius: $input-round-1;
        font: inherit;

        &:focus {
            outline: none;
        }
    }
}
</style>