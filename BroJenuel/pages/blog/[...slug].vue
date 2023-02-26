<script lang="ts" setup>
const route = useRoute();
const { setMeta, googleStream } = useMeta();

const { page } = useContent();
useHead({
    ...setMeta({
        title: page.value.title + " - BroJenuel",
        description: page.value.description,
        path: route.path,
        keywords: page.value.keywords,
        image: page.value.image_thumbnail,
        lang: "en",
    }),
    ...(process.env.NODE_ENV != "development" ? googleStream() : {}),
});
</script>
<template>
    <NuxtLayout>
        <ContentDoc v-slot="{ doc }">
            <main class="pt-40px min-h-80vh">
                <div class="pt-40px">
                    <div class="max-w-500px mx-auto px-10px relative">
                        <h1 class="text-size-25px font-700">{{ doc.title }}</h1>
                        <div class="flex flex-wrap gap-2">
                            <div v-for="tag in doc.tags" :key="tag" :class="`tag-${tag}`" class="tag">#{{ tag }}</div>
                        </div>
                        <div>
                            <small>Technology Used:</small>
                            <div class="flex flex-wrap gap-2">
                                <div v-for="keywords in doc.keywords" :key="keywords" :class="`tag-${keywords}`" class="tag tag-sm">
                                    {{ keywords }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-render max-w-600px mx-auto px-10px relative pt-5">
                        <ContentRenderer :value="doc" />
                    </div>
                </div>
            </main>
        </ContentDoc>
    </NuxtLayout>
</template>
