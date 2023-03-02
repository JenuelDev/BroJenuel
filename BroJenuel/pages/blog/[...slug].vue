<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();
const client = useSupabaseClient();

const slug = route.params.slug[0];
const showContent = ref(false);
const { data }: any = await useAsyncData("blog", async () => {
    const { data }: any = await client
        .from("blogs")
        .select(`*, blog_meta(*)`)
        .eq("slug", slug)
        .single();
    return data;
});
const oldCountViews = data.value.blog_meta && data.value.blog_meta.view_count ? data.value.blog_meta.view_count : 0;
async function addViewCount() {
    await client
        .from("blog_meta")
        .upsert({ blogs_id: data?.value.id, view_count: oldCountViews + 1 })
        .select();
}

useHead({
    ...setMeta({
        title: data.value.title + " - BroJenuel",
        description: data.value.summary,
        path: `/blog/${data.value.slug}`,
        keywords: data.value.keywords,
        lang: "en",
    }),
    ...(process.env.NODE_ENV != "development" ? googleStream() : {}),
});

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

onMounted(() => {
    showContent.value = true;
    addViewCount();
});
</script>
<template>
    <NuxtLayout>
        <main class="pt-40px min-h-80vh">
            <Transition>
                <div v-show="showContent" class="pt-40px">
                    <div class="max-w-600px mx-auto px-10px relative pb-5">
                        <h1 class="text-size-25px font-700 pb-10px">{{ data.title }}</h1>
                        <div class="flex flex-wrap gap-1">
                            <div v-for="tags in data.tags" :key="tags" :class="`tag-${tags}`" class="tag tag-sm">#{{ tags }}</div>
                        </div>
                        <div>
                            <div><Icon name="ic:baseline-remove-red-eye" /> {{ commafy(oldCountViews) }}</div>
                        </div>
                    </div>
                    <div class="content-render max-w-600px mx-auto px-10px relative" v-html="data.content"></div>
                </div>
            </Transition>
        </main>
    </NuxtLayout>
</template>
