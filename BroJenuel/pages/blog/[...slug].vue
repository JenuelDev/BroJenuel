<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();
const client = useSupabaseClient();

const { data }: any = await useAsyncData("blog", async () => {
    const { data, error }: any = await client.from("blogs").select().eq("slug", route.params.slug[0]).single();
    return data;
});

useHead({
    ...setMeta({
        title: data.title + " - BroJenuel",
        description: data.summary,
        path: `/blog/${data.slug}`,
        keywords: data.keywords,
        lang: "en",
    }),
    ...(process.env.NODE_ENV != "development" ? googleStream() : {}),
});
</script>
<template>
    <NuxtLayout>
        <main class="pt-40px min-h-80vh">
            <div class="pt-40px">
                <div class="max-w-500px mx-auto px-10px relative">
                    <h1 class="text-size-25px font-700">{{ data.title }}</h1>
                    <div class="flex flex-wrap gap-2">
                        <div v-for="tag in data.tags" :key="tag" :class="`tag-${tag}`" class="tag">#{{ tag }}</div>
                    </div>
                    <div>
                        <small>Technology Used:</small>
                        <div class="flex flex-wrap gap-2">
                            <div v-for="keywords in data.keywords" :key="keywords" :class="`tag-${keywords}`" class="tag tag-sm">
                                {{ keywords }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-render max-w-600px mx-auto px-10px relative pt-5" v-html="data.content"></div>
            </div>
        </main>
    </NuxtLayout>
</template>
