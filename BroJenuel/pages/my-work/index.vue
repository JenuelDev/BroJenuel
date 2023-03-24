<script setup lang="ts">
const route = useRoute();
const isShowContent = ref(false);
const codeChallenges = useCodeChallenges();
const { setMeta } = useMeta();

onMounted(() => (isShowContent.value = true));

const WORKS = [
    {
        title: "Believers Sword",
        description:
            "This is a simple bible reading application that gives basic functionality. I am waiting for anyone who wants to own this project, and I am willing to work with you.",
        techs: ["electron", "electron.builder", "Vue3", "windiCss", "naive-ui"],
        img: "https://i.imgur.com/HOGyZ7ql.png",
        date: "2023-02-17",
        logo: "https://believers-sword.brojenuel.com/_nuxt/believers-sword.7fcefc1c.svg",
        url: "/blog/Believers-Sword",
        url_new_tab: false,
    },
    {
        overline: "Documentation Project",
        title: "Laravel MongoDB Docs",
        description:
            "A Documentation website for Laravel MongoDB, a package that you can use to easily connect your laravel project to mongodb.",
        techs: ["vitepress", "vue"],
        img: "https://i.imgur.com/joyBgJBl.png",
        date: "2023-02-17",
        logo: "https://laravel-mongo-docs.ml/assets/img/logo.png",
        url: "https://laravel-mongodb.vercel.app",
        url_new_tab: true,
    },
    {
        overline: "Portfolio Website",
        title: "Portfolio Website",
        description:
            "Created a simple but cool looking portfolio website for my wife. I used pure VueJS to create the website and hosted it on netlify.",
        techs: ["vue", "javascript"],
        img: "https://i.imgur.com/RwAoRLyl.png",
        date: "2023-02-17",
        logo: "https://kateawisan.netlify.app/img/profile-img.d44572f5.jpg",
        url: "https://kateawisan.netlify.app/",
        url_new_tab: true,
    },
    {
        overline: "Search Engine Project",
        title: "Get GIF's",
        description: "Search the wide internet to get GIFs that you can download",
        techs: ["vue", "API", "javascript"],
        img: "gif-search.webp",
        date: "2023-02-17",
        logo: "https://www.getgifs.ml/img/gif.ea9d2c5a.png",
        url: "https://www.getgifs.ml/",
        url_new_tab: true,
    },
    {
        overline: "Personal Website ",
        title: "Portfolio Final Version",
        description:
            "I created a new portfolio website, and it is being served as an SSR for good SEO. I added blogs for publishing my articles.",
        techs: ["vue", "Nuxt", "javascript", "SSR", "SupaBase", "Disqus"],
        img: "https://i.imgur.com/dynz10Bl.png",
        date: "2023-02-17",
        logo: "https://i.imgur.com/3iN1kQym.jpg",
        url: "https://BroJenuel.com",
        url_new_tab: false,
    },
    {
        overline: "Personal Website",
        title: "Portfolio Version 1.**",
        description:
            "Created My Very First Portfolio Website. It looks cool but the performance is too much. I also used google blogSpot API to set my blogs. But my I removed my blogSpot so its not working anymore. But I was able to learn something from it.",
        techs: ["vue", "javascript"],
        img: "https://i.imgur.com/tVN4aOVl.png",
        date: "2017-12-01",
        logo: "https://i.imgur.com/3iN1kQym.jpg",
        url: "https://jenuelganawed-v1.netlify.app/#/challenge",
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
                <div class="max-w-600px mx-auto px-10px">
                    <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                        <Icon name="pajamas:project" />
                        My Work
                    </div>
                    <div class="pt-5 mb-5">
                        <div class="indent-md">
                            Showing are personal projects that I made during my spare/free time. I don't add projects
                            from my Work/Jobs, only if allowed.
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-15">
                        <NuxtLink
                            v-for="(work, i) in WORKS"
                            :key="i"
                            :href="work.url"
                            class="rounded-md cursor-pointer group"
                            :target="work.url_new_tab ? '_blank' : '_self'"
                        >
                            <div
                                class="border-1 border-[var(--gray-lightest)] flex justify-center items-center overflow-hidden rounded-lg relative"
                            >
                                <img
                                    :src="work.img.includes('http') ? work.img : `/img/work/${work.img}`"
                                    class="w-full transform scale-100 group-hover:scale-transform-105 transition-all duration-1000"
                                    :alt="work.description"
                                    width="500"
                                />
                            </div>
                            <div class="pt-15px flex gap-10px items-center">
                                <div class="w-30px h-30px overflow-hidden rounded-md bg-white">
                                    <img class="w-30px" :src="work.logo" />
                                </div>
                                <div class="font-700 group-hover:text-[var(--primary)] text-size-25px">
                                    {{ work.title }}
                                </div>
                            </div>
                            <div>
                                <ul class="flex gap-1 flex-wrap py-10px">
                                    <li v-for="tags in work.techs" :key="tags" :class="`tag-${tags}`" class="tag">
                                        #{{ tags }}
                                    </li>
                                </ul>
                                <div>{{ work.description }}</div>
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
