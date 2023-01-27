<script setup lang="ts">
const isShowContent = ref(false);
const myWork = await queryContent("/my-work").sort({ _path: 1 }).find();

onMounted(() => {
    isShowContent.value = true;
});
</script>
<template>
    <Transition>
        <div v-show="isShowContent" class="pt-90px">
            <div class="max-w-550px mx-auto px-10px">
                <div class="font-800 text-size-20px text-[var(--primary)] flex items-center gap-7px">
                    <Icon name="pajamas:project" />
                    My Work
                </div>
                <div class="pt-5">
                    <div class="indent-md">Showing are personal projects that I made during my spare/free time. I don't add projects from my Work/Jobs, only if allowed.</div>
                </div>
                <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                    <NuxtLink
                        v-for="(work, i) in myWork"
                        :key="i"
                        :href="work._path"
                        class="p-10px rounded-md transform translate-y-1 hover:translate-y-0 transition-transform cursor-pointer group"
                    >
                        <div class="p-10px">
                            <img :src="work.img" class="rounded-md" alt="" srcset="" />
                        </div>
                        <div class="text-center">
                            <div class="font-700 group-hover:text-[var(--primary)]">{{ work.title }} <Icon name="" /></div>
                            <div>{{ work.description }}</div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </Transition>
</template>
