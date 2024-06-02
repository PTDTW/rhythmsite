<template>
  <Navbar/>
  <RouterView />
  <Footer />

</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/layout/NavigationBar.vue"
import Footer from "@/layout/footer.vue"


</script>