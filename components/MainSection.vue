<script setup>
import useTailwindConfig from '~~/composables/useTailwindConfig.js';

   const props = defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
   })

   const { twitterBorderColor } = useTailwindConfig();
</script>


<template>
    <div class="border-b" :class="twitterBorderColor">
        <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{props.title}}</h2>
        </div>

        <div v-if="loading" class="flex items-center justify-center p-4 border-b" :class="twitterBorderColor">
           <UISpinner />
        </div>
       
        <slot></slot>
    </div>
</template>