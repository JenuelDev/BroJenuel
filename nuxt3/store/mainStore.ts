import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
    const isIntroSocialLinkShowing = ref(false);
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
            title: "LinkedIn",
            icon: "pajamas:linkedin",
            url: "https://www.linkedin.com/in/jenuelganawed/",
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
        isIntroSocialLinkShowing,
    };
});
