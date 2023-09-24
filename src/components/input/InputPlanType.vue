<template>
    <label id="plan-type">
        <input type="checkbox" v-model="inputStore.input.isMonthly" id="isMonthly" />
        <div id="toggle-container">
            <span :class="inputStore.input.isMonthly && 'selected'">Monthly</span>
            <div id="toggle">
                <div id="toggle-circle" :class="!inputStore.input.isMonthly && 'right'"></div>
            </div>
            <span :class="!inputStore.input.isMonthly && 'selected'">Yearly</span>
        </div>
    </label>
</template>

<script setup>
import { useInputStore } from '../../stores/input';
const inputStore = useInputStore();
</script>

<style scoped>
#plan-type {
    cursor: pointer;
    display: block;
    width: 100%;
    background: var(--alabaster);
    padding: 15px;
    border-radius: 15px;
}

#plan-type input[type="checkbox"] {
    display: none;
}
#toggle-container {
    display: flex;
    gap: 20px;
    justify-content: center;
}
#toggle-container span {
    color: var(--cool-gray);
}
#toggle-container span.selected {
    color: var(--marine-blue);
}
#toggle {
    position: relative;
    display: block;
    width: 35px;
    border-radius: 10px;
    height: 20px;
    background: var(--marine-blue);
}
#toggle-circle {
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translate(0, -50%);
    width: 12px;
    height: 12px;
    background: var(--white);
    border-radius: 50%;
    transition: transform 300ms;
}
#toggle-circle.right {
    transform: translate(15px, -50%);
}
</style>