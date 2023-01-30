import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
    const isIntroSocialLinkShowing = ref(false);
    const mySocial = ref([
        {
            title: "Facebook",
            icon: "mdi:facebook-box",
            url: "https://www.facebook.com/broJenuel/",
            ariaLabel: "Check BroJenuel Facebook",
        },
        {
            title: "Youtube",
            icon: "mdi:youtube",
            url: "https://www.youtube.com/@brojenuel",
            ariaLabel: "Check BroJenuel Youtube",
        },
        {
            title: "LinkedIn",
            icon: "pajamas:linkedin",
            url: "https://www.linkedin.com/in/jenuelganawed/",
            ariaLabel: "Check BroJenuel LinkedIn",
        },
        {
            title: "Dev.to",
            icon: "mdi:dev-to",
            url: "https://dev.to/brojenuel",
            ariaLabel: "Check BroJenuel Dev",
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/brojenuel/",
            icon: "mdi:instagram",
            ariaLabel: "Check BroJenuel Instagram",
        },
    ]);

    return {
        mySocial,
        isIntroSocialLinkShowing,
    };
});
