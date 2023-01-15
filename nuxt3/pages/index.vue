<script lang="ts" setup>
const route = useRoute();
const { setMeta } = useMeta();

useHead({
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
</script>
<template>
    <section class="h-100vh flex items-center justify-center p-20px">
        <div class="text-right">
            <div class="lg:text-size-44px md:text-size-36px text-size-26px font-300 tracking-tight">
                hi! <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-36px">👋</span>
            </div>
            <div class="lg:text-size-52px md:text-size-44px text-size-36px font-600 tracking-tight mt-10px text-[var(--primary)]">I'm <span>Jenuel</span></div>
            <div class="lg:text-size-44px md:text-size-36px text-size-26px font-300 tracking-tight">i create apps and<br />websites</div>
        </div>
    </section>
</template>
