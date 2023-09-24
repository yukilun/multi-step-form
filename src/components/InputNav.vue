<template>
    <div id="input-nav">
        <button type="button" id="btn-prev" class="btn" :disabled="stepStore.step == 1" @click="stepStore.prevStep">
            Go Back
        </button>
        <button v-if="stepStore.step < 4" type="button" id="btn-next" class="btn" @click="stepStore.nextStep">
            Next Step
        </button>
        <button v-else type="submit" id="btn-submit" class="btn">
            Confirm
        </button>
    </div>
</template>

<script setup>
import { useStepStore } from '@/stores/step';
const stepStore = useStepStore(); 
</script>

<style scoped>
#input-nav {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    background: white;
}

.btn {
    padding: 15px 20px;
    border: none;
    border-radius: 10px;
    font-size: var(--small);
    font-weight: 500;
    cursor: pointer;
    transition: all 200ms;
}

#btn-prev {
    background: none;
    color: var(--cool-gray);
    visibility: visible;
}

#btn-next {
    background: var(--marine-blue);
    color: white;
}

#btn-submit {
    background: var(--purplish-blue);
    color: white;
}

#btn-prev:disabled {
    cursor: auto;
    visibility: hidden;
    transition: none;
}

@media (hover: hover) {
    #btn-prev:hover {
        color: var(--marine-blue);
    }
    #btn-next:hover,
    #btn-submit:hover {
        opacity: 50%;
    }
}

@media screen and (min-width: 768px) {
    #input-nav {
        padding: 0;
    }
    .btn {
        font-size: var(--regular);
    }
}</style>