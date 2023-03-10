<script lang="ts" setup>
const route = useRoute();
const client = useSupabaseClient();
const { setMeta } = useMeta();
const loadingBlogs = ref(true);

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

const blogs = ref<Array<any>>([]);
async function getBlogs() {
    loadingBlogs.value = true;
    let query: any = await client.from("blogs").select(`*, blog_meta(*)`).eq("is_active", 1).order("id", { ascending: false }).limit(4);
    blogs.value = query.data;
    loadingBlogs.value = false;
}

onMounted(() => {
    getBlogs();
});
</script>
<template>
    <NuxtLayout>
        <HomeIntro />
        <HomeAboutMe />
        <div class="w-full max-w-550px mx-auto mt-50px px-20px">
            <h2 class="mb-3">Recent Blogs</h2>
            <div v-show="!loadingBlogs" class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <a
                    v-for="blog in blogs"
                    :key="blog.id"
                    :href="`/blog/${blog.slug}`"
                    target="_blank"
                    class="group p-2 bg-[var(--background-secondary)] rounded-md flex flex-col justify-between gap-20px cursor-pointer transform translate-y-0 hover:translate-y-[-3px] transition-all duration-300 opacity-80 hover:opacity-100"
                >
                    <div>
                        <h3 class="font-700 group-hover:text-[var(--primary)]">{{ blog.title }}</h3>
                        <div class="text-size-14px">{{ blog.summary.slice(0, 100) }}...</div>
                    </div>
                    <div>
                        <ul class="flex gap-1 !text-size-10px flex flex-wrap">
                            <li v-for="tags in blog.tags" :key="tags" :class="`tag-${tags}`" class="tag">#{{ tags }}</li>
                        </ul>
                    </div>
                </a>
            </div>
            <div v-show="loadingBlogs" class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                </div>
                <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                </div>
                <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                </div>
                <div role="status" class="max-w-sm animate-pulse">
                    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        <HomeSkills />
        <HomeOffer />
    </NuxtLayout>
</template>
