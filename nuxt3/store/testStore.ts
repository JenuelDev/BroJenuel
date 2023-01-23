import { defineStore } from "pinia";

export const useTestStore = defineStore("test", () => {
    const count = ref(0);

    return {
        count,
        add: () => count.value++,
        minus: () => count.value--,
    };
});
