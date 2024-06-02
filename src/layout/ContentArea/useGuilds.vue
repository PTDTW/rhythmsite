<template>
    <div class="r-marquee-badge">
        <span v-if="showGuilds"> {{ guildsData[currentGuildIndex].name }} </span> 正在使用
    </div>
    <br>
    <br>
    <br>
    <br>
    <Vue3Marquee style="height: 100px;display: block;" class="r-guilds-Marquee" :gradient="true"
        :gradient-color="[16, 16, 16]" gradient-length="10%" :pause-on-hover="true" :clone="true" :duration="50" :direction="'reverse'">

        <!-- 使用v-for循环渲染guilds数组中的数据 -->
        <div v-for="(guild, index) in guildsData" :key="index" class="r-guilds-Marquee-container"
            @click="openLink(guild.link)">
            <img :src="guild.icon" /> <!-- 使用guild对象中的icon属性 -->
            {{ guild.name }} <!-- 使用guild对象中的name属性 -->
        </div>
    </Vue3Marquee>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import "@/assets/marquee.css"
import { guilds } from "@/config/usageGuilds"

const guildsData = ref(guilds)
const showGuilds = ref(true)
const currentGuildIndex = ref(0)
let timer

onMounted(() => {
    timer = setInterval(() => {
        currentGuildIndex.value++
        if (currentGuildIndex.value >= guildsData.value.length) {
            currentGuildIndex.value = 0
        }
    }, 800)
})

onUnmounted(() => {
    clearInterval(timer)
})

function openLink(link) {
    const win = open(`${link}`, `${link}`, 'height=600,width=800');
}
</script>
