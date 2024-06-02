<template>
    <div class="inviteArea">
        <div class="inviteTitle" :class="{ 'isHidden': isHide }"><b>快來配置你要的<span class="botText">Rhytem</span>精靈</b></div>
        <div class="inviteCardContainer " :class="{ 'isHidden': isHide }">
            <div class="header">
                <img src="@/assets/img/icon.png" class="logo">
                <FIcon iconName="arrow-right" class="arrowIcon" />
                <img src="@/assets/img/Community.svg" class="dcHome">
            </div>
            <br>
            <br>
            <div class="content">
                <div class="PermissionsCard01 isActive PermissionsCard card ">
                    <div class="card-header">
                        <FIcon iconName="flag" class="font:white" />
                        基礎技能&nbsp;&nbsp;
                        <badge class="PermissionsHeaderBadge" color="yellow" name="必要"/>

                        <!-- <div class="PermissionsCard01Check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled>
                        </div> -->
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>讓Rhytem擁有這些知識，他才不會迷路</p>
                            <div class="PermissionsListArea">
                                <badge class="PermissionsList" color="blue" v-for="permission in Permissions01List" :name="permission" :key="permission"/>
                            </div>
                        </blockquote>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="PermissionsCard02 PermissionsCard card ">
                            <div class="card-header">
                                <FIcon iconName="question" class="font:white" />
                                即將推出&nbsp;&nbsp;
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <footer class="blockquote-footer">即將推出</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="PermissionsCard3 PermissionsCard card ">
                            <div class="card-header">
                                <FIcon iconName="question" class="font:white" />
                                即將推出&nbsp;&nbsp;
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <footer class="blockquote-footer">即將推出</footer>

                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="nextBtn" @click="openInvite()">
                    <button>確定
                        <FIcon iconName="arrow-right" class="btnIcon" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/assets/BotInvite.css"
import FIcon from "@/components/icon/font-awesome/FIcon.vue"
import badge from "@/components/badges/badges.vue"
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 导入 useRouter 函数

const router = useRouter(); // 获取路由器实例
// ------------------------------------------------//
var isHide = ref(false)

const Permissions01List = [
    "讀取訊息",
    "發送訊息",
    "嵌入連結",
    "附加檔案",
    "讀取訊息歷史",
    "新增反應",
    "使用外部表情符號",
    "使用應用程式命令",
    "連接",
    "說話",
    "請求發言"
];

function openInvite() {
    const win = open("https://discord.com/api/oauth2/authorize?client_id=1202153752438505504&permissions=6445976640&scope=bot+applications.commands", "invite", 'height=800,width=600')
    const timer = setInterval(() => {
    if (win.closed) {
        clearInterval(timer);
        router.push("/invite/thanks")
    }
}, 200);
}

</script>

<style scoped>
.rhytem_navbar{
    display: block;
}
</style>
