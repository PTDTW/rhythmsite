<!-- FIcon.vue -->
<template>
    <font-awesome-icon :icon="iconName" :class="computedClass" />
</template>

<script setup>
// import { defineProps } from "vue";

const props = defineProps({
    iconName: {
        type: String,
        required: true
    },
    css: {
        type: String,
        default: ""
    }
});

// 计算属性，将 nico-tab-icon 和 cssClass 合并
const computedClass = `${props.css ? props.css + ' ' : ''}`;
</script>
