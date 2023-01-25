import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", () => {
    const { $Storage } = useNuxtApp();
    const isDark = ref(true);

    watch(
        () => isDark.value,
        (val) => {
            $Storage.set("theme", val ? "dark" : "light");
            document.documentElement.style.setProperty("--primary", val ? "#64ffdb" : "#319795");
            document.body.classList.remove(!val ? "dark" : "light");
            document.body.classList.add(val ? "dark" : "light");
        }
    );

    onMounted(() => {
        isDark.value = $Storage.get("theme") && $Storage.get("theme") == "dark" ? true : false;
    });

    return {
        isDark,
    };
});
