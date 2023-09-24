<template>
    <div id="step-3">
        <h1 class="step-title">Finishing up</h1>
        <p class="step-desc">Double-check everything looks OK before confirming.</p>
        <div id="summary">
            <div id="summary-plan" class="summary-item">
                <div>
                    <p id="summary-plan-item" class="primary-text">{{ inputStore.summary.plan.item }}</p>
                    <button type="button" id="btn-plan-change" @click="stepStore.planStep">Change</button>
                </div>
                <div id="summary-plan-price" class="primary-text">
                    {{ inputStore.summary.plan.price }}
                </div>
            </div>
            <hr v-if="inputStore.summary.addOns.length > 0"/>
            <div v-for="addOn in inputStore.summary.addOns" :key="addOn.item" class="summary-addOn summary-item">
                <p class="summary-addOn-item secondary-text">{{ addOn.item }}</p>
                <p class="summary-addOn-price secondary-text">{{ addOn.price }}</p>
            </div>
        </div>
        <div id="summary-total" class="summary-item">
            <p id="summary-total-item" class="secondary-text">{{ inputStore.summary.total.item }}</p>
            <p id="summary-total-price">{{ inputStore.summary.total.price }}</p>
        </div>
    </div>
</template>

<script setup>
import { useInputStore } from '../stores/input';
import { useStepStore } from '../stores/step';
const inputStore = useInputStore();
const stepStore = useStepStore();
</script>

<style scoped>
#summary {
    padding: 10px 20px;
    background: var(--alabaster);
    border-radius: 10px;
}
hr {
    border:none;
    height: 1px;
    background-color: var(--light-gray);
    margin-top: 20px;
}
.summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
#btn-plan-change {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    margin-top: 5px;
    color: var(--cool-gray);
    font-size: var(--small);
    text-decoration: underline;
}
.summary-addOn-price {
    color: var(--marine-blue);
    font-weight: 500;
}

#summary-total {
    padding: 10px 20px;
}

#summary-total-price {
    color: var(--purplish-blue);
    font-weight: 700;
    font-size: var(--large);
}


@media (hover: hover) {
    #btn-plan-change:hover {
        color: var(--purplish-blue);
    }
}

@media screen and (min-width: 768px) {
    hr {
        margin-top: 30px;
    }
    #btn-plan-change {
        font-size: var(--regular);
    }
    #summary-total-price {
        font-size: var(--xlarge);
    }
}

</style>