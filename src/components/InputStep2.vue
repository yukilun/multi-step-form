<template>
    <div id="step-2">
        <h1 class="step-title">Select your plan</h1>
        <p class="step-desc">You have the option of monthly or yearly billing.</p>
        <div id="plan-options">
            <InputPlanOption option="Arcade">
                <IconArcade />
            </InputPlanOption>
            <InputPlanOption option="Advanced">
                <IconAdvanced />
            </InputPlanOption>
            <InputPlanOption option="Pro">
                <IconPro />
            </InputPlanOption>
        </div>
        <InputPlanType />
    </div>
</template>

<script setup>
import IconArcade from './icons/IconArcade.vue';
import IconAdvanced from './icons/IconAdvanced.vue';
import IconPro from './icons/IconPro.vue';
import InputPlanOption from './input/InputPlanOption.vue';
import InputPlanType from './input/InputPlanType.vue';
</script>

<style scoped>
#plan-options {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    margin-bottom: 30px;
}

@media screen and (min-width:768px) {
    #plan-options {
        display: flex;
        flex-direction: row;
        gap: 20px;
        justify-content: center;
    }
}
</style>