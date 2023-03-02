<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();

useSeoMeta({
    ...setMeta({
        title: "BroJenuel - Jenuel Oras Ganawed",
        description:
            "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "software developer"],
        image: "https://brojenuel.com/img/profileImage.ac3f181b.webp",
        lang: "en",
    }),
});

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel",
    description:
        "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between",
    themeColor: String,
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <NuxtLayout>
        <HomeIntro />
        <HomeAboutMe />
        <HomeSkills />
        <HomeOffer />
    </NuxtLayout>
</template>
