<template>
    <div id="step-1">
        <h1 class="step-title">Personal info</h1>
        <p class="step-desc">Please provide your name, email address, and phone number.</p>
        <InputText field="name" label="Name" placeholder="e.g. Stephen King"/>
        <InputText field="email" label="Email Address" placeholder="e.g. stephenking@lorem.com"/>
        <InputText field="phone" label="Phone Number" placeholder="e.g. +1 123 456 7890"/>
    </div>
</template>

<script setup>
import InputText from './input/InputText.vue';
</script>

<style scoped>

</style>