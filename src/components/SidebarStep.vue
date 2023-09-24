<template>
    <div class="step">
        <div class="step-circle" :class="stepStore.step == step.num && 'active'">{{ step.num }}</div>
        <div class="step-text">
            <div class="step-text-name">Step {{ step.num }}</div>
            <div class="step-text-desc">{{ step.description }}</div>
        </div>
    </div>
</template>

<script setup>
const { step } = defineProps(['step']);
import { useStepStore } from '@/stores/step';
const stepStore = useStepStore(); 
</script>

<style scoped>
.step {
    display: flex;
    color: var(--white);
    font-size: var(--small);
    gap: 20px;
    align-items: center;
}
.step-circle {
    width: 30px;
    height: 30px;
    border: 1px solid var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
}
.step-circle.active {
    border: none;
    background: var(--light-blue);
    color: var(--marine-blue)
}
.step-text {
    display: none;
    text-transform: uppercase;
}

.step-text-name {
    color: var(--cool-gray);
    font-size: var(--xsmall);
    margin-bottom: 2px;
}

.step-text-desc {
    font-weight: 500;
    letter-spacing: 0.06rem;
}

@media screen and (min-width: 768px) {
    .step-circle {
        height: 35px;
        width: 35px;
    }
    .step-text {
        display: block;
    }
}
</style>