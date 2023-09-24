<template>
    <div id="confirmation">
        <IconThankYou />
        <h1 id="confirmation-title" class="step-title">Thank you!</h1>
        <p id="confirmation-desc" class="step-desc">
            Thanks for confirming your subscription! We hope you have fun
            using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
        </p>
    </div>
</template>

<script setup>
import IconThankYou from './icons/IconThankYou.vue';
</script>

<style scoped>
#confirmation {
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 5px 10px var(--light-gray);
    padding: 100px 30px;
    text-align: center;
}
#confirmation-title {
    margin: 20px 0;
}

@media screen and (min-width: 768px) {
    #confirmation {
        flex-grow: 1;
        box-shadow: none;
        padding: 0;
    }
}
</style>