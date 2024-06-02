<template>
  <nav class="rhytem_navbar navbar navbar-expand-lg sticky-top" data-bs-theme="dark">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">
        <a class="navbar-brand" href="#" style="padding-left: 10px;">
          <img src="@/assets/favicon.ico" alt="Logo" width="30" height="30" class="r-logo d-inline-block align-text-top">
          Rhytem</a>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="r-navbar-list navbar-nav me-auto mb-2 mb-lg-0">
          <RouterLink to="/" class="rhytem_navbar_link">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: nowPath === '/' }" aria-current="page" href="#">首頁</a>
            </li>
          </RouterLink>
          <RouterLink to="/team" class="rhytem_navbar_link">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: nowPath === '/team' }" href="#">開發團隊</a>
            </li>
          </RouterLink>
          <li class="nav-item">
            <a class="nav-link" href="#">指令清單</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://discord.gg/ugYhBAEVrt">Discord官方群</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">教學文檔</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import "@/assets/navbar.css"

// 在组件挂载后每秒钟获取一次当前路由路径
import { onMounted, ref } from 'vue';
onMounted(() => {
  setInterval(() => {
    getDir();
  }, 50);
});

const nowPath = ref();
const route = useRoute();
function getDir() {
  // 使用 useRoute() 函数获取当前路由对象
  // 获取当前路由的路径
  nowPath.value = route.path;
}
</script>