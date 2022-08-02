<script setup>
import useTailwindConfig from '~~/composables/useTailwindConfig.js';

    const props = defineProps({
        title: {
            type: String,
            required: true
        }
    })

    const { twitterBorderColor, defaultTransition } = useTailwindConfig();

</script>


<template>
    <div class="m-2 overflow-hidden border bg-gray-50 rounded-2xl  dark:text-white dark:bg-dim-700" :class="twitterBorderColor">
        <h1 class="p-3 text-xl font-extrabold text-gray-900">
            {{ props.title}}
        </h1> 
        <slot></slot>      
        
        <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300" :class="defaultTransition">
            show more
        </div>
    </div>
</template>