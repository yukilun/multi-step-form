import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useInputStore = defineStore("input", () => {
  const prices = {
    Monthly: {
      Arcade: 9,
      Advanced: 12,
      Pro: 15,
      "Online Service": 1,
      "Larger Storage": 2,
      "Customizable Profile": 2,
    },
    Yearly: {
      Arcade: 90,
      Advanced: 120,
      Pro: 150,
      "Online Service": 10,
      "Larger Storage": 20,
      "Customizable Profile": 20,
    },
  };
  const input = reactive({
    name: "",
    email: "",
    phone: "",
    planOption: "Arcade",
    isMonthly: true,
    addOns: [],
  });
  const invalidMsg = reactive({
    name: "",
    email: "",
    phone: "",
  });
  const planPrices = computed(() => {
    return input.isMonthly
      ? {
          Arcade: `$${prices.Monthly["Arcade"]}/mo`,
          Advanced: `$${prices.Monthly["Advanced"]}/mo`,
          Pro: `$${prices.Monthly["Pro"]}/mo`,
        }
      : {
          Arcade: `$${prices.Yearly["Arcade"]}/yr`,
          Advanced: `$${prices.Yearly["Advanced"]}/yr`,
          Pro: `$${prices.Yearly["Pro"]}/yr`,
        };
  });
  const addOnPrices = computed(() => {
    return input.isMonthly
      ? {
          "Online Service": `+$${prices.Monthly["Online Service"]}/mo`,
          "Larger Storage": `+$${prices.Monthly["Larger Storage"]}/mo`,
          "Customizable Profile": `+$${prices.Monthly["Customizable Profile"]}/mo`,
        }
      : {
          "Online Service": `+$${prices.Yearly["Online Service"]}/yr`,
          "Larger Storage": `+$${prices.Yearly["Larger Storage"]}/yr`,
          "Customizable Profile": `+$${prices.Yearly["Customizable Profile"]}/yr`,
        };
  });
  const summary = computed(() => {
    const term = input.isMonthly ? "Monthly" : "Yearly";
    let total = prices[term][input.planOption];
    let summary = {
      plan: {
        item: `${input.planOption} (${term})`,
        price: `$${prices[term][input.planOption]}/${
          input.isMonthly ? "mo" : "yr"
        }`,
      },
      addOns: [],
    };
    input.addOns.forEach((addOn) => {
      total += prices[term][addOn];
      summary.addOns.push({
        item: addOn,
        price: `+$${prices[term][addOn]}/${input.isMonthly ? "mo" : "yr"}`,
      });
    });
    summary.total = {
      item: `Total (per ${input.isMonthly ? "month" : "year"})`,
      price: `$${total}/${input.isMonthly ? "mo" : "yr"}`,
    };
    return summary;
  });
  function validate(field) {
    let isValid = true;
    if (field == "name" || field == "all") {
      if (!input.name) {
        invalidMsg.name = "This field is required";
        isValid = false;
      } else {
        invalidMsg.name = "";
      }
    }
    if (field == "email" || field == "all") {
      if (!input.email) {
        invalidMsg.email = "This field is required";
        isValid = false;
      } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          input.email
        )
      ) {
        invalidMsg.email = "Invalid email address";
        isValid = false;
      } else {
        invalidMsg.email = "";
      }
    }
    if (field == "phone" || field == "all") {
      if (!input.phone) {
        invalidMsg.phone = "This field is required";
        isValid = false;
      } else if (!/^\+?[1][- ]?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(input.phone)) {
        invalidMsg.phone = "Invalid phone number format";
        isValid = false;
      } else {
        invalidMsg.phone = "";
      }
    }
    return isValid;
  }
  return { input, invalidMsg, planPrices, addOnPrices, summary, validate };
});
