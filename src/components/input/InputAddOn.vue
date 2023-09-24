<template>
    <input type="checkbox" v-model="inputStore.input.addOns" :id="addOn" :value="addOn" />
    <label :for="addOn" class="input-field add-on">
        <div class="add-on-checkbox">
            <IconCheckmark />
        </div>
        <div class="add-on-text">
            <p class="add-on-name primary-text">{{ addOn }}</p>
            <p class="add-on-desc secondary-text">{{ description }}</p>
        </div>
        <p class="add-on-price secondary-text">{{ inputStore.addOnPrices[addOn] }}</p>
    </label>
</template>

<script setup>
import IconCheckmark from '../icons/IconCheckmark.vue';
import { useInputStore } from '../../stores/input';
const inputStore = useInputStore();
const { addOn, description } = defineProps(['addOn', 'description' ]);
</script>

<style scoped>
.add-on {
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 15px;
    margin-bottom: 15px;
}

input[type="checkbox"] {
    display: none;
}

input[type="checkbox"]:checked+label {
    border-color: var(--purplish-blue);
    background: var(--alabaster);
}

.add-on-checkbox {
    border: 1px solid var(--light-gray);
    width: 20px;
    height: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

input[type="checkbox"]:checked+label .add-on-checkbox {
    background-color: var(--purplish-blue);
}

.add-on-text {
    flex-grow: 1;
}

.add-on-desc {
    margin-top: 5px;
    font-size: var(--xsmall);
}
.add-on-price {
    color: var(--purplish-blue);
}

@media screen and (min-width: 768px) {
    .add-on {
        padding: 20px;
        gap: 20px;
    }
    .add-on-desc {
        font-size: var(--small);
    }
}
</style>