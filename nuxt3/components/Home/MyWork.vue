<script setup lang="ts">
const isShowContent = ref(false);
const myWork = await queryContent("/my-work").sort({ _path: 1 }).find();

onMounted(() => {
    isShowContent.value = true;
});
</script>
<template>
    <div id="my-work" class="my-work pt-30px">
        <Transition>
            <div v-show="isShowContent">
                <div class="w-full max-w-500px mx-auto mt-50px px-20px">
                    <div class="font-800 text-size-20px underline underline-offset-4 decoration-4 underline-opacity-50 decoration-gray-500 text-[var(--primary)]">My Work</div>
                    <div class="pt-5">
                        <div class="indent-md">Showing are personal projects that I made during my spare/free time. I don't add projects from my Work/Jobs, only if allowed.</div>
                    </div>
                </div>
                <div class="max-w-600px mx-auto px-10px">
                    <div class="grid sm:grid-cols-2 grid-cols-1 gap-3">
                        <NuxtLink
                            v-for="(work, i) in myWork.slice(0, 4)"
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
                    <div class="flex justify-center pt-5">
                        <NuxtLink href="/my-work" class="btn btn-lg btn-filled sm:w-auto w-full group">
                            More Stuff <Icon name="ic:sharp-arrow-forward" class="group-hover:animate-head-shake" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>
