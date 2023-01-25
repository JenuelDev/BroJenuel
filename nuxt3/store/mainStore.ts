import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
    const mySocial = ref([
        {
            title: "Facebook",
            icon: "mdi:facebook-box",
            url: "https://www.facebook.com/broJenuel/",
        },
        {
            title: "Youtube",
            icon: "mdi:youtube",
            url: "https://www.youtube.com/@brojenuel",
        },
        {
            title: "Dev.to",
            icon: "mdi:dev-to",
            url: "https://dev.to/brojenuel",
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/brojenuel/",
            icon: "mdi:instagram",
        },
    ]);

    return {
        mySocial,
    };
});
