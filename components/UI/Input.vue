<script setup>
    const props = defineProps({
        modelValue : {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: ''
        },
        type : {
            type: String,
            default: ''
        }
    })

    const emits = defineEmits(['update:modelValue'])
</script>

<template>
    <div>
        <label class="block pl-3 ml-px text-sm font-medium text-gray-700" for="" v-if="props.label">{{ props.label }}</label>
        <div class="mt-1">
            <input class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500
            focus:border-blue-500" :type="props.type" :value="props.modelValue" name="" id="" :placeholder="props.placeholder"
            @input="event => emits('update:modelValue', event.target.value)"/>
        </div>
        
    </div>
</template>