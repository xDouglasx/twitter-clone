<script setup>
import useTailwindConfig from '~~/composables/useTailwindConfig.js';

    const { defaultTransition, twitterBorderColor } = useTailwindConfig()
    const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)

</script>

<template>
    <div class="p-3 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300" :class="wrapperClasses">
        <slot></slot>
    </div>
</template>