<script lang="ts" setup>
const client = useSupabaseClient();
const route = useRoute();
const isShowContent = ref(false);
const { setMeta, googleStream } = useMeta();
const search = ref(null);
const { data }: { data: any } = await useAsyncData("blogs", async () => {
    const { data } = await client.from("blogs").select(`*, blog_meta(*)`).eq("is_active", 1).order("id", { ascending: false }).limit(20);
    return data;
});
isShowContent.value = true;

function commafy(num: number) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
}
useHead({
    ...setMeta({
        title: "Blog - BroJenuel",
        description: "Learn about tips and tricks about programming. Read or watch tutorials that will help you on jour journey as a developer.",
        path: route.path,
        keywords: ["brojenuel", "Jenuel", "Jenuel Ganawed", "bro jenuel", "web developer", "blog"],
        image: "https://brojenuel.com/img/profileImage.ac3f181b.webp",
        lang: "en",
    }),
    ...(process.env.NODE_ENV != "development" ? googleStream() : {}),
    ...{
        link: [
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/agate.min.css",
            },
        ],
    },
});

defineOgImageStatic({
    component: "DefaultOgImage",
    path: route.path,
    title: "BroJenuel - Blog",
    description: "Learn programming tips, tricks, and best practices to make programming ",
});
</script>
<template>
    <NuxtLayout>
        <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px max-w-850px mx-auto mt-90px">
            <Icon name="pajamas:project" />
            Blog
        </div>
        <Transition>
            <div v-show="isShowContent" class="min-h-100vh max-w-850px mx-auto lg:px-10px sm:px-100px px-10px pt-10px pb-5 grid lg:grid-cols-4 grid-cols-1 gap-30px">
                <div>
                    <div class="sticky mt-5 top-70px">
                        <input
                            class="w-full shadow appearance-none border border-[var(--background)] rounded w-full py-2 px-3 text-white leading-tight focus:border-gray-400 focus:outline-none focus:shadow-outline bg-[var(--background-secondary)]"
                            id="username"
                            type="text"
                            placeholder="Search..."
                            v-model="search"
                        />
                        <div class="flex-col mt-20px hidden gap-1 lg:flex">
                            <button type="button" class="py-2 px-5 text-sm bg-[var(--background-secondary)] w-full">VueJS</button>
                            <button type="button" class="py-2 px-5 text-sm bg-[var(--background-secondary)] w-full">ReactJs</button>
                            <button type="button" class="py-2 px-5 text-sm bg-[var(--background-secondary)] w-full">SEO</button>
                            <button type="button" class="py-2 px-5 text-sm bg-[var(--background-secondary)] w-full">News</button>
                            <button type="button" class="py-2 px-5 text-sm bg-[var(--background-secondary)] w-full">JOB</button>
                        </div>
                        <div class="text-center">
                            <a class="text-size-10px hover:bg-[var(--primary)] hover:text-[var(--background)] px-3" href="/sitemap.xml" target="_blank">SITEMAP</a>
                        </div>
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <div class="grid grid-cols-1 gap-3 sm:pl-0 pl-20px" v-if="data.length">
                        <NuxtLink
                            v-for="blog in data"
                            :key="blog.id"
                            :href="`blog/${blog.slug}`"
                            class="p-10px rounded-md transform translate-y-1 hover:translate-y-0 transition-transform cursor-pointer group hover:bg-[var(--background-secondary)]"
                        >
                            <div class="relative group">
                                <div
                                    class="absolute h-10px w-10px bg-gray-600 -left-5 group-hover:bg-[var(--primary)] opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-lg delay top-[50%] transform translate-y-[-50%] translate-x-[-50%]"
                                ></div>
                                <div
                                    class="absolute h-1px w-1px group-hover:h-50px bg-[var(--primary)] transition-all duration-500 -left-5 top-[50%] opacity-0 group-hover:opacity-100 transform translate-y-[-50%] translate-x-[-50%]"
                                ></div>
                                <div class="absolute top-40%"></div>
                                <div class="font-700 group-hover:text-[var(--primary)]">
                                    {{ blog.title }}
                                </div>
                                <div class="italic flex gap-2 my-1">
                                    <ul class="flex gap-1">
                                        <li v-for="tags in blog.tags" :key="tags" :class="`tag-${tags}`" class="tag">#{{ tags }}</li>
                                    </ul>
                                </div>
                                <div>{{ blog.summary }}</div>
                                <div>
                                    <span class="italic font-500 opacity-50 whitespace-nowrap flex gap-20px">
                                        {{ $dayjs(blog.created_at).format("MMM. DD, YYYY") }}
                                        <span class="flex items-center gap-7px">
                                            <Icon name="ic:baseline-remove-red-eye" /> {{ blog.blog_meta ? commafy(blog.blog_meta.view_count) : 0 }}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div v-else class="flex flex-col items-center justify-center gap-20px">
                        <div class="text-size-100px">😥</div>
                        <div class="text-center">
                            <div class="text-size-20px font-700">Empty Blogs</div>
                            <div>I'm still writing some blogs ✍️📝.</div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </NuxtLayout>
</template>
