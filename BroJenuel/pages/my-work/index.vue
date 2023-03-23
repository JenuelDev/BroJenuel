<script setup lang="ts">
const route = useRoute();
const isShowContent = ref(false);
const myWork = await queryContent("/my-work").sort({ _id: -1 }).find();
const codeChallenges = useCodeChallenges();
const { setMeta } = useMeta();

onMounted(() => (isShowContent.value = true));

const WORKS = [
    {
        title: "Believers Sword",
        description: "A app for studying the bible for desktop. Currently supports windows only.",
        techs: ["electron", "electron.builder", "Vue3", "windiCss"],
        links: [
            {
                link: "https://github.com/Bible-Projects/believers-sword-app",
                icon: "ant-design:github-filled",
                tooltip: "Open in Github",
            },
            {
                link: "https://believers-sword.brojenuel.com/",
                icon: "mingcute:external-link-line",
                tooltip: "Open Link",
            },
        ],
        imageLink: "https://believers-sword.brojenuel.com/",
        img: "believers-sword.webp",
        tags: ["application"],
        date: "2023-02-17",
        logo: "https://believers-sword.brojenuel.com/_nuxt/believers-sword.7fcefc1c.svg",
        url: "/blog/Believers-Sword",
        url_new_tab: false,
    },
    {
        overline: "Documentation Project",
        title: "Laravel MongoDB Docs",
        description: "Documentation how you can integrate Laravel with MongoDB.",
        techs: ["vuepress", "vue"],
        links: [
            {
                link: "https://github.com/BroJenuel-Youtube/laravel-mongodb",
                icon: "ant-design:github-filled",
                tooltip: "Open in Github",
            },
            { link: "https://laravel-mongo-docs.ml", icon: "mingcute:external-link-line", tooltip: "Open Link" },
        ],
        imageLink: "https://laravel-mongo-docs.ml",
        img: "laravel-mongo-db.webp",
        tags: ["website", "documentation"],
        date: "2023-02-17",
        logo: "https://laravel-mongo-docs.ml/assets/img/logo.png",
        url: "https:://laravel-mongodb.vercel.app",
        url_new_tab: true,
    },
];

useHead({
    ...setMeta({
        title: "My Work - Jenuel Ganawed",
        description: "Check Jenuel Ganawed's Works/Personal Projects.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "works", "projects"],
        lang: "en",
    }),
});

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: "My Works",
    description: "Check out my works I created. Created some ",
    appName: "www.BroJenuel.com",
});
</script>
<template>
    <NuxtLayout>
        <Transition>
            <div v-show="isShowContent" class="pt-90px">
                <div class="max-w-550px mx-auto px-10px">
                    <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                        <Icon name="pajamas:project" />
                        My Work
                    </div>
                    <div class="pt-5">
                        <div class="indent-md">
                            Showing are personal projects that I made during my spare/free time. I don't add projects
                            from my Work/Jobs, only if allowed.
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-3">
                        <NuxtLink
                            v-for="(work, i) in WORKS"
                            :key="i"
                            :href="work.url"
                            class="p-10px rounded-md cursor-pointer group"
                            :target="work.url_new_tab ? '_blank' : '_self'"
                        >
                            <div
                                class="border-5 border-[var(--gray-lightest)] flex justify-center items-center h-150px overflow-hidden rounded-lg relative"
                            >
                                <img
                                    :src="`/img/work/${work.img}`"
                                    class="absolute w-full transform scale-100 group-hover:scale-transform-120 transition-all"
                                    :alt="work.description"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <div class="p-15px flex gap-10px">
                                <div class="w-30px h-30px overflow-hidden rounded-md bg-white">
                                    <img class="w-30px" :src="work.logo" />
                                </div>
                                <div class="w-[80%]">
                                    <div class="font-700 group-hover:text-[var(--primary)] text-size-20px">
                                        {{ work.title }}
                                    </div>
                                    <div>{{ work.description }}</div>
                                </div>
                            </div>
                        </NuxtLink>
                        <NuxtLink
                            v-for="(work, i) in myWork"
                            :key="i"
                            :href="work._path"
                            class="p-10px rounded-md cursor-pointer group"
                        >
                            <div
                                class="border-5 border-[var(--gray-lightest)] flex justify-center items-center h-150px overflow-hidden rounded-lg relative"
                            >
                                <img
                                    :src="`/img/work/${work.img}`"
                                    class="absolute w-full transform scale-100 group-hover:scale-transform-120 transition-all"
                                    :alt="work.description"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <div class="p-15px flex gap-10px">
                                <div class="w-30px h-30px overflow-hidden rounded-md bg-white">
                                    <img class="w-30px" :src="work.logo" />
                                </div>
                                <div class="w-[80%]">
                                    <div class="font-700 group-hover:text-[var(--primary)] text-size-20px">
                                        {{ work.title }}
                                    </div>
                                    <div>{{ work.description }}</div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div>
                        <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px pb-5 pt-10">
                            <Icon name="material-symbols:other-admission-sharp" />
                            Other Projects
                        </div>
                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                            <div
                                v-for="codeChallenge in codeChallenges"
                                :key="codeChallenge.title"
                                class="group bg-[var(--background-secondary)] p-3 rounded-md flex flex-col justify-between transform translate-y-0 hover:translate-y-[-5px] transition-all"
                            >
                                <div>
                                    <div class="font-800 group-hover:text-[var(--primary)]">
                                        {{ codeChallenge.title }}
                                    </div>
                                    <div v-html="codeChallenge.des"></div>
                                </div>
                                <div class="flex gap-2 text-size-20px pt-2">
                                    <template v-for="link in codeChallenge.links">
                                        <a
                                            :href="link.link"
                                            target="_blank"
                                            :title="link.tooltip"
                                            class="hover:text-[var(--primary)]"
                                        >
                                            <Icon :name="link.icon" />
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
