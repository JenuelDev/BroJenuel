<script setup lang="ts">
import { useMainStore } from "~/store/mainStore";
const mainStore = useMainStore();
const isShowContent = ref(false);
const socialRef = ref(null);
const isTargetVisible = useElementVisibility(socialRef);

watch(
    () => isTargetVisible.value,
    (val) => (mainStore.isIntroSocialLinkShowing = val)
);

onMounted(() => {
    isShowContent.value = true;
});
</script>
<template>
    <section class="flex items-center justify-center px-20px pt-20px relative mt-100px">
        <Transition>
            <div v-show="isShowContent" class="relative flex flex-col items-center gap-20px">
                <div class="flex gap-5 sm:flex-row flex-col items-center">
                    <div
                        class="rounded-3xl hover:rounded-2xl overflow-hidden opacity-70 relative hover:opacity-100 transition-all duration-300 border-5 border-opacity-0 border-light-50 hover:border-[var(--primary)] md:h-170px md:w-165px h-140px w-130px sm:order-2 order-1"
                    >
                        <img
                            src="https://i.imgur.com/3iN1kQym.jpg"
                            class="absolute left-0 top-0 transform rotate-0 hover:rotate-25 transition-all duration-300 scale-100 hover:scale-150 hover:top-20px hover:left-[-20px]"
                        />
                    </div>
                    <div class="sm:text-right text-center sm:order-1 order-2">
                        <div class="lg:text-size-34px md:text-size-36px text-size-26px font-300 tracking-tight">
                            hi! <span class="animate-wave lg:text-size-54px md:text-size-46px text-size-30px">👋</span>
                        </div>
                        <div class="lg:text-size-36px md:text-size-29px text-size-25px font-600 tracking-tight mt-10px text-[var(--primary)]">I'm <span> Jenuel</span></div>
                        <div class="lg:text-size-25px md:text-size-25px text-size-20px font-300 tracking-tight md:w-200px w-150px">i create apps and websites</div>
                    </div>
                </div>

                <div class="bg-[var(--background-secondary)] bg-gray-50 sm:w-500px w-250px px-20px pt-10px pb-20px rounded-lg">
                    <div class="flex justify-center gap-2 flex-wrap">
                        <a href="#my-work" class="btn left-up -bottom-60px -left-50px sm:w-auto w-full">
                            <Icon name="icon-park-twotone:workbench" />
                            My Work
                        </a>
                        <a href="#about-me" class="btn left-up -bottom-100px left-[calc(50%-60px)] sm:w-auto w-full">
                            <Icon name="icon-park-twotone:boy-two" />
                            About Me
                        </a>
                        <NuxtLink class="btn left-up -bottom-60px -right-50px sm:w-auto w-full">
                            <Icon name="icon-park-twotone:time" />
                            My History
                        </NuxtLink>
                    </div>
                    <div class="mt-20px">
                        <div ref="socialRef" class="flex gap-10px justify-center flex-wrap">
                            <a
                                v-for="social in mainStore.mySocial"
                                :key="social.title"
                                target="_blank"
                                :href="social.url"
                                class="whitespace-nowrap hover:text-[var(--primary)] flex items-center"
                            >
                                <Icon class="text-size-28px" :name="social.icon" />
                                <span class="ml-7px">{{ social.title }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </section>
</template>
