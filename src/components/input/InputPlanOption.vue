<template>
    <input type="radio" v-model="inputStore.input.planOption" :id="option" :value="option" />
    <label :for="option" class="input-field plan-option">
        <slot> </slot>
        <div class="plan-text">
            <p class="plan-name primary-text">{{ option }}</p>
            <p class="plan-price secondary-text">{{ inputStore.planPrices[option] }}</p>
            <p v-if="!inputStore.input.isMonthly" class="yearly-msg secondary-text">2 months free</p>
        </div>
    </label>
</template>

<script setup>
import { useInputStore } from '../../stores/input';
const inputStore = useInputStore();
const { option } = defineProps(['option']);
</script>

<style scoped>
input[type="radio"] {
    display: none;
}

input[type="radio"]:checked+label {
    border-color: var(--purplish-blue);
    background: var(--alabaster);
}

.plan-option {
    flex-grow: 1;
    padding: 18px 12px;
    display: flex;
    gap: 20px;
}

.plan-name {
    margin-bottom: 8px;
}

.yearly-msg {
    color: var(--marine-blue);
    font-size: var(--xsmall);
    margin-top: 8px;
}

@media screen and (min-width:768px) {
    .plan-option {
        width: 33%;
        flex-grow: 1;
        padding: 18px 12px;
        flex-direction: column;
        gap: 35px;
    }
}
</style>