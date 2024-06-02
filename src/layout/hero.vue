<template>
    <main>

        <div class="Hero">
            <h1 class="introducetext" data-aos="zoom-in" data-aos-delay="100"><b>音樂世界，<span
                        class="botText">Rhytem</span>陪你締造</b></h1>
            <div class="r-slonger font:gray" data-aos="zoom-in" data-aos-delay="300">你的 Discord 音樂夥伴</div>
            <br />
            <div class="content-wrapper" data-aos="zoom-in" data-aos-delay="600">
                <RouterLink to="/invite" class="inviteLink">
                    <button class="inviteBot button-wrapper">
                        <FIcon iconName="robot" />&nbsp邀請機器人
                    </button>
                </RouterLink>
            </div>
            <!-- <a class="joinSupport">加入支援群組</a> -->
        </div>


    </main>
</template>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'

import "@/assets/Hero.css"
import FIcon from "@/components/icon/font-awesome/FIcon.vue"
</script>