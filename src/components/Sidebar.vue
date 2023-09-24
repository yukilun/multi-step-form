<template>
    <div id="sidebar">
        <BgSidebarMobile />
        <BgSidebarDesktop />
        <div id="sidebar-content">
            <SidebarStep v-for="step in stepInfo" :key="step.num" :step="step"/>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import BgSidebarDesktop from './bgs/Bgsidebardesktop.vue';
import BgSidebarMobile from './bgs/BgSidebarMobile.vue';
import SidebarStep from './SidebarStep.vue';
const stepInfo = reactive([
    {num: 1, description: 'Your info'},
    {num: 2, description: 'Select plan'},
    {num: 3, description: 'Add-ons'},
    {num: 4, description: 'Summary'},
]);
</script>

<style scoped>
#sidebar {
    width: 100%;
    position: relative;
}
#sidebar-content {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 15px;
}

@media screen and (min-width: 768px) {
    #sidebar {
        width: auto;
    } 
    #sidebar-content {
        top: 30px;
        flex-direction: column;
        width: 80%;
        gap: 30px;
    }
}
</style>