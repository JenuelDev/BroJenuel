<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();

useHead(
    setMeta({
        title: "BroJenuel - Jenuel Oras Ganawed",
        description:
            "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "software developer"],
        image: "https://brojenuel.com/img/profileImage.ac3f181b.webp",
    })
);
</script>
<template>
    <section class="h-100vh flex items-center justify-center">
        <div class="text-right">
            <div>Hi! <span class="animate-wave">👋</span></div>
            <div>I am <span>Jenuel Ganawed</span></div>
        </div>
    </section>
</template>
