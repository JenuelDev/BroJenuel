<template>
    <main class="pt-40px min-h-80vh max-w-500px mx-auto px-10px relative">
        <div class="pt-40px">
            <ContentDoc v-slot="{ doc }">
                <h1 class="text-size-25px font-700">{{ doc.title }}</h1>
                <div class="flex flex-wrap gap-2">
                    <div v-for="tag in doc.tags" :key="tag" class="tag" :class="`tag-${tag}`">#{{ tag }}</div>
                </div>
                <div>
                    <small>Technology Used:</small>
                    <div class="flex flex-wrap gap-2">
                        <div v-for="tech in doc.techs" :key="tech" class="tag tag-sm" :class="`tag-${tech}`">{{ tech }}</div>
                    </div>
                </div>

                <div class="content-render">
                    <ContentRenderer :value="doc" />
                </div>
            </ContentDoc>
        </div>
    </main>
</template>
