<!-- FIcon.vue -->
<template>
    <span :class="computedClass">{{ name }}</span>
</template>

<script setup>
import { defineProps } from "vue";
import "@/assets/components/badges.css"
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    css: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        required: true
    }
});

// 计算属性，将 nico-tab-icon 和 cssClass 合并
const computedClass = `${props.css ? props.css + ' ' : ''}r-badeg-${props.color} badge rounded-pill`;
</script>
