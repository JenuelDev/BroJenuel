<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();
const client = useSupabaseClient();

const showContent = ref(false);
const { data }: any = await useAsyncData("blog", async () => {
    const { data }: any = await client.from("blogs").select().eq("slug", route.params.slug[0]).single();
    return data;
});

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

onMounted(() => {
    showContent.value = true;
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
                    </div>
                    <div class="content-render max-w-600px mx-auto px-10px relative" v-html="data.content"></div>
                </div>
            </Transition>
        </main>
    </NuxtLayout>
</template>
