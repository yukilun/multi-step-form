<template>
    <div id="step-3">
        <h1 class="step-title">Pick add-ons</h1>
        <p class="step-desc">Add-ons help enhance your gaming experience.</p>
        <InputAddOn addOn="Online Service" description="Access to multiplayer games"/>
        <InputAddOn addOn="Larger Storage" description="Extra 1TB of cloud save"/>
        <InputAddOn addOn="Customizable Profile" description="Custom theme on your profile"/>
    </div>
</template>

<script setup>
import InputAddOn from './input/InputAddOn.vue';
</script>

<style scoped>

</style>