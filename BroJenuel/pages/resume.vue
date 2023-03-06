<script setup lang="ts">
const route = useRoute();

definePageMeta({
    layout: "nofooter",
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
        <div class="h-100vh pt-50px">
            <iframe src="/Jenuel Oras Ganawed.pdf" width="100%" height="100%" />
        </div>
    </NuxtLayout>
</template>
