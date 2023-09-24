<template>
    <div class="input">
        <div class="input-label">
            <label :for="field">{{ label }}</label>
            <span class="invalid-message">{{ inputStore.invalidMsg[field] }}</span>
        </div>
        <input :id="field" class="input-field" type="text" v-model="inputStore.input[field]" :placeholder="placeholder"
            :class="inputStore.invalidMsg[field] && 'invalid'" @change="() => inputStore.validate(field)"/>
    </div>
</template>

<script setup>
import { useInputStore } from '../../stores/input';
const inputStore = useInputStore();
const { field, label, placeholder } = defineProps(['field', 'label', 'placeholder']);
</script>

<style scoped>
.input {
    margin-bottom: 20px;
}

.input-label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: var(--xsmall);
    font-weight: 500;
}

.input-field {
    width: 100%;
    padding: 12px;
    font-size: var(--regular);
    font-weight: 700;
}

.input-field.invalid {
    border-color: var(--strawberry-red);
}

.invalid-message {
    color: var(--strawberry-red);
}

@media screen and (min-width: 768px) {
    .input-label {
        font-size: var(--small);
    }
}</style>