import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useInputStore } from './input';

export const useStepStore = defineStore('step', () => {
  const inputStore = useInputStore();
  const step = ref(1);
  const isSubmitted = ref(false);
  function nextStep() {
    if(step.value == 1) {
      if(!inputStore.validate()) return;
    }
    step.value++;
  }
  function prevStep() {
    step.value--;
  }
  function planStep() {
    step.value = 2;
  }
  function submit() {
    if(!inputStore.validate()) return;
    isSubmitted.value = true;
  }
  return { step, nextStep, prevStep, planStep, submit, isSubmitted };
})
