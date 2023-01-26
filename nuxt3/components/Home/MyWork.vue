<script setup lang="ts">
const isShowContent = ref(false);
const myWork = useMyWork();

onMounted(() => {
    isShowContent.value = true;
});
</script>
<template>
    <div id="my-work" class="my-work">
        <Transition>
            <div v-show="isShowContent">
                <div class="w-full max-w-500px mx-auto mt-50px mb-20px px-20px">
                    <div class="font-800 text-size-20px underline underline-offset-4 decoration-4 underline-opacity-50 decoration-gray-500 text-[var(--primary)]">My Work</div>
                    <div class="pt-5">
                        <div class="pb-10px indent-md">
                            Showing are personal projects that I made during my spare/free time. I don't add projects from my Work/Jobs, only if allowed.
                        </div>
                    </div>
                </div>
                <div class="max-w-600px mx-auto px-10px grid sm:grid-cols-2 grid-cols-1 gap-3">
                    <template v-for="(work, i) in myWork.works" :key="i">
                        <div class="bg-[var(--background-secondary)] p-10px rounded-md" :style="'transition-delay:' + 100 + 'ms'">
                            <div>{{ work.title }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </Transition>
    </div>
</template>
