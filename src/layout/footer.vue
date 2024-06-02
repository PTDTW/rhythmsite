<template>
    <div class="rFooter" :class="{ hide : isInvite()}">
        Copyright ©2022 - 2023 All rights reserved Rhytem
    </div>
</template>
<script setup>

// 在组件挂载后每秒钟获取一次当前路由路径
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';

const nowPath = ref('');
const route = useRoute();
function getDir() {
  // 使用 useRoute() 函数获取当前路由对象
  // 获取当前路由的路径
  nowPath.value = route.path;
}

function isInvite() {
    if(nowPath.value && nowPath.value.includes('/invite')){
        return true;
    } else {
        return false;
    }
}

onMounted(() => {
  setInterval(() => {
    getDir();
    // console.log(nowPath.value)
  }, 50);
});

</script>
<style scoped>
.rFooter{
    position: relative;
    left: 0;
    right: 0;
    bottom: 0%;
    font-weight: bold;
    color: #444;
    background-color: #24242440;
    text-align: center;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 180px;
}
.rFooter.hide{
    display: none;
}
</style>
