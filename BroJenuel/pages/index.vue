<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();

useHead({
    ...setMeta({
        title: "BroJenuel - Jenuel Oras Ganawed",
        description:
            "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a developer with a full-stack background and a keen eye for good design. Currently, I focus on building apps and software using web tools.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "software developer"],
        lang: "en",
    }),
});

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel",
    description:
        "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a developer with a full-stack background and a keen eye for good design. Currently, I focus on building apps and software using web tools.",
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
