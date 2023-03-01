<script lang="ts" setup>
const client = useSupabaseClient();
const route = useRoute();
const isShowContent = ref(false);
const { setMeta, googleStream } = useMeta();

const { data }: { data: any } = await useAsyncData("blogs", async () => {
    const { data } = await client.from("blogs").select().eq("is_active", 1).order("id", { ascending: false }).limit(20);
    return data;
});
isShowContent.value = true;

useHead({
    ...setMeta({
        title: "Blog - BroJenuel",
        description:
            "Jenuel Ganawed(BroJenuel/Bro Jenuel) is a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.",
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
        script: [
            {
                src: "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js",
            },
        ],
    },
});
</script>
<template>
    <NuxtLayout>
        <div class="min-h-80vh">
            <Transition>
                <div v-show="isShowContent" class="pt-90px pb-5">
                    <div class="max-w-550px mx-auto px-10px">
                        <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                            <Icon name="pajamas:project" />
                            Blog
                            <a href="/sitemap.xml" target="_blank">(sitemap)</a>
                        </div>
                        <div class="pt-5">
                            <div class="indent-md"></div>
                        </div>
                        <div class="grid grid-cols-1 gap-3 sm:pl-0 pl-20px" v-if="data.length">
                            <NuxtLink
                                v-for="blog in data"
                                :key="blog.id"
                                :href="`blog/${blog.slug}`"
                                class="p-10px rounded-md transform translate-y-1 hover:translate-y-0 transition-transform cursor-pointer group"
                            >
                                <div class="relative group">
                                    <div
                                        class="absolute h-10px w-10px bg-gray-600 -left-5 group-hover:bg-[var(--primary)] opacity-50 group-hover:opacity-100 transition-all duration-500 rounded-lg delay top-[50%] transform translate-y-[-50%] translate-x-[-50%]"
                                    ></div>
                                    <div
                                        class="absolute h-1px w-1px group-hover:h-50px bg-[var(--primary)] transition-all duration-500 -left-5 top-[50%] opacity-0 group-hover:opacity-100 delay-100 transform translate-y-[-50%] translate-x-[-50%]"
                                    ></div>
                                    <div class="absolute top-40%"></div>
                                    <div class="font-700 group-hover:text-[var(--primary)]">
                                        {{ blog.title }}
                                        <span class="italic font-500 opacity-50 whitespace-nowrap"> - {{ $dayjs(blog.created_at).format("MMM. DD, YYYY") }}</span>
                                    </div>
                                    <div class="italic flex gap-2">
                                        <ul class="flex gap-1">
                                            <li v-for="tags in blog.tags" :key="tags" :class="`tag-${tags}`" class="tag">#{{ tags }}</li>
                                        </ul>
                                    </div>
                                    <div>{{ blog.summary }}</div>
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
        </div>
    </NuxtLayout>
</template>
