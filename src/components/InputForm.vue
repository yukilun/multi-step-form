<template>
    <form id="input-container" @submit="handleSubmit">
        <div id="input-form" v-if="!stepStore.isSubmitted">
            <InputStep1 v-if="stepStore.step == 1"/>
            <InputStep2 v-if="stepStore.step == 2"/>
            <InputStep3 v-if="stepStore.step == 3"/>
            <InputStep4 v-if="stepStore.step == 4"/>
            
        </div>
        <InputConfirmation v-if="stepStore.isSubmitted"/>
        <InputNav v-if="!stepStore.isSubmitted"/>
    </form>
</template>

<script setup>
import { reactive } from 'vue';
import InputStep1 from './InputStep1.vue';
import InputStep2 from './InputStep2.vue';
import InputStep3 from './InputStep3.vue';
import InputStep4 from './InputStep4.vue';
import InputNav from './InputNav.vue';
import InputConfirmation from './InputConfirmation.vue';
import { useStepStore } from '../stores/step';
const stepStore = useStepStore();
function handleSubmit(e) {
    e.preventDefault();
    stepStore.submit();
}
</script>

<style scoped>
#input-container {
    flex-grow: 1;
    width: 100%;
    min-height: 100vh;
    padding-top: 80px;
    position: absolute;
    top: 0;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: space-between;
}
#input-form {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 5px 10px var(--light-gray);
    padding: 30px 25px;
}


@media screen and (min-width: 768px) {
    #input-container {
        position: relative;
        min-height: auto;
        max-width: 550px;
        margin: 10px auto;
        padding: 30px;
    }
    #input-form {
        box-shadow: none;
        padding: 0;
    }
}
</style>