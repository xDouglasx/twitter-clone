<script setup>
import useTailwindConfig from '~~/composables/useTailwindConfig.js';

const { defaultTransition } = useTailwindConfig();
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')

</script>


<template>
    <nuxt-link to="#" class="flex items-center p-3 w-min text-black hover:bg-gray-200 rounded-full dark:hover:bg-dim-200
    dark:text-white" :class="defaultTransition">
        <div class="w-6 h-6 text-dark">
            <slot name="icon"></slot>
        </div>

        <div class="ml-4 hidden text-xl xl:block" :class="textClasses">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
  
</template>