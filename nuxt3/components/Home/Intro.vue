<script setup lang="ts">
const isShowContent = ref(false);

onMounted(() => {
    // setTimeout(() => (isShowContent.value = true), 200);
    isShowContent.value = true;
});
</script>
<template>
    <section class="min-h-100vh flex items-center justify-center p-20px relative">
        <Transition>
            <div v-show="isShowContent" class="relative flex flex-col items-center gap-20px">
                <div class="flex gap-5 items-center">
                    <div class="text-right">
                        <div class="lg:text-size-34px md:text-size-36px text-size-26px font-300 tracking-tight">
                            hi! <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-36px">👋</span>
                        </div>
                        <div class="lg:text-size-36px md:text-size-29px text-size-25px font-600 tracking-tight mt-10px text-[var(--primary)]">I'm <span> Jenuel</span></div>
                        <div class="lg:text-size-30px md:text-size-25px text-size-20px font-300 tracking-tight">
                            i create apps and<br />
                            websites
                        </div>
                    </div>
                    <div
                        class="rounded-3xl hover:rounded-2xl overflow-hidden opacity-70 h-170px w-165px relative hover:opacity-100 transition-all duration-300 border-5 border-opacity-0 border-light-50 hover:border-[var(--gray)]"
                    >
                        <img
                            src="https://i.imgur.com/3iN1kQym.jpg"
                            class="absolute left-0 top-0 transform rotate-0 hover:rotate-25 transition-all duration-300 scale-100 hover:scale-150 hover:top-20px hover:left-[-20px]"
                        />
                    </div>
                </div>

                <div class="flex justify-center gap-5 flex-wrap">
                    <NuxtLink class="intro-buttons -bottom-60px -left-50px">
                        <Icon name="icon-park-twotone:workbench" />
                        My Work
                    </NuxtLink>
                    <NuxtLink class="intro-buttons -bottom-100px left-[calc(50%-60px)]">
                        <Icon name="icon-park-twotone:boy-two" />
                        About Me
                    </NuxtLink>
                    <NuxtLink class="intro-buttons -bottom-60px -right-50px">
                        <Icon name="icon-park-twotone:time" />
                        My History
                    </NuxtLink>
                </div>
            </div>
        </Transition>
    </section>
</template>
<style lang="postcss">
.intro-buttons {
    @apply flex items-center justify-center gap-1 rounded-md px-10px py-5px whitespace-nowrap cursor-pointer transform translate-y-1 transition-transform duration-150 border border-[var(--gray-lighter)];

    &:hover {
        @apply translate-y-0 bg-[var(--primary)] text-[var(--background)] border-[var(--primary)];
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
