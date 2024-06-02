<template>
    <div class="error-title">4<FIcon iconName="magnifying-glass" class="font:148"/>4</div>
    <div class="error-subject">你似乎來到了不正確的網址</div>
</template>
<style>
.error-title {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 260px;
    font-weight: bold;
    color: #fff;
    /* top: 50%; */
    /* 垂直居中 */
    /* left: 50%; */
    /* 水平居中 */
    /* transform: translate(-50%, -50%); */
    text-align: center;
}

.error-subject {
    /* position: fixed; */
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #4c4c4c;
    /* top: 56%; */
    /* 垂直居中 */
    /* left: 50%; */
    /* 水平居中 */
    /* transform: translate(-50%, -50%); */
}
</style>
<script setup>
import FIcon from "@/components/icon/font-awesome/FIcon.vue"
</script>