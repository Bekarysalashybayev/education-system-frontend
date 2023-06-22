<template>
    <button @click="onClick"
            :class="['btn', btnType && `btn-${btnType}`, size && `btn-${size}`, classes,]">
        <div class="icon" v-if="icon&&!loading">{{ icon }}</div>
        <be-loader v-if="loading" :size="18" class="loader" :color="loaderColor"/>
        <span>{{ label }}</span>
    </button>
</template>

<script setup lang="ts">
import {computed} from "vue";
import BeLoader from "@/components/ui/loader/BeLoader.vue";

const props = defineProps({
    label: {
        type: String,
        default: 'Submit'
    },
    icon: {
        type: String,
    },
    iconRight: {
        type: Boolean,
        default: false,
        required: false,
    },
    btnType: {
        type: String,
        default: 'primary',
        validator: (value: String): boolean => ['primary', 'secondary'].includes(String(value))
    },
    size: {
        type: String,
        default: 'default',
        validator: (value: String): boolean => ['large', 'small'].includes(String(value)),
    },
    outline: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['click'])

const onClick = () => {
    if (props.loading || props.disabled) return;
    emit('click')
}

const classes = computed(() => {
    return {
        'rounded': props.rounded,
        'outlined': props.outline,
        'icon--left': props.icon && !props.iconRight,
        'icon--right': props.icon && props.iconRight,
        'disabled': props.disabled,
        'loaded': props.loading,
    }
})

const loaderColor = computed(() => {
    if (props.outline && !props.disabled) return undefined;
    return '#FFFFFF'
})
</script>

<style scoped lang="scss">
@use '@/assets/scss/variables.scss' as *;

@mixin primaryStyle {
    background-color: $color-main;
    color: $color-white;
}

@mixin primaryOutlineStyle {
    background-color: transparent;
    border: 1px solid $color-main;
    color: $color-main;
}

@mixin secondaryStyle {
    background-color: $color-second;
    color: $color-white;
}

@mixin secondaryOutlineStyle {
    background-color: transparent;
    border: 1px solid $color-second;
    color: $color-second;
}

.btn {
    @include t1;
    color: $color-white;
    padding: $button-padding-default;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;

    .loader {
        margin-right: 10px;
    }

    &.disabled {
        cursor: no-drop;
        color: $color-white !important;
        border: 1px solid transparent !important;
        background-color: $color-grey !important;
    }

    &.loaded {
        cursor: no-drop;
    }

    &.icon--left .icon {
        margin-right: 10px;
        order: 0;
    }

    &.icon--right .icon {
        margin-left: 10px;
        order: 1;
    }

    &-primary {
        @include primaryStyle;

        &.outlined {
            @include primaryOutlineStyle
        }
    }

    &-secondary {
        @include secondaryStyle;

        &.outlined {
            @include secondaryOutlineStyle;

            .loader {
                border-color: $color-second!important;
                border-bottom-color: transparent!important;
            }
        }
    }

    &:not(.disabled, .loaded):hover {
        &.btn-primary {
            @include primaryOutlineStyle;

            &.outlined {
                @include primaryStyle;
            }
        }

        &.btn-secondary {
            @include secondaryOutlineStyle;

            &.outlined {
                @include secondaryStyle;
            }
        }
    }

    &-large {
        padding: $button-padding-large;
    }

    &-small {
        padding: $button-padding-small;
    }

    &.rounded {
        border-radius: $button-round-1;
    }
}
</style>