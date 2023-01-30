<script setup lang="ts">
import { useMainStore } from "~~/store/mainStore";
const showContent = ref(false);
const mainStore = useMainStore();
onMounted(() => (showContent.value = true));
</script>
<template>
    <Transition>
        <div v-show="showContent">
            <div
                class="fixed sm:left-10 transition-all duration-300 left-0 bottom-0 sm:w-auto w-full sm:bg-opacity-0 z-99 filter backdrop-filter backdrop-blur-md"
                :class="mainStore.isIntroSocialLinkShowing ? 'sm:bottom-[-300px]' : 'sm:bottom-[100px]'"
            >
                <ul class="flex sm:flex-col flex-row gap-3 relative justify-center sm:p-0 p-2">
                    <li
                        v-for="social in mainStore.mySocial"
                        class="text-size-40px sm:transform sm:translate-y-2 sm:hover:translate-y-0 sm:transition-all sm:cursor-pointer sm:hover:text-[var(--primary)]"
                    >
                        <a :href="social.url" target="_blank">
                            <Icon :name="social.icon" />
                        </a>
                    </li>
                    <li class="text-size-40px sm:hidden block">
                        <NuxtLink href="/contact"> <Icon name="mdi:gmail" /> </NuxtLink>
                    </li>
                    <div class="absolute sm:block hidden h-70px w-2px dark:bg-light-50 bg-[var(--color)] bottom-[-100px] left-[calc(50%-2px)]"></div>
                </ul>
            </div>
            <div
                class="fixed sm:right-10 transition-all duration-300 right-0 bottom-0 sm:w-auto w-full sm:bg-opacity-0 bg-[var(--opacity-background)] z-99 filter backdrop-filter backdrop-blur-md bottom-[-350px]"
                :class="mainStore.isIntroSocialLinkShowing ? 'sm:bottom-[-350px]' : 'sm:bottom-[100px]'"
            >
                <NuxtLink href="/contact">
                    <div
                        class="write-vertical-left tracking-2px text-size-20px font-100 sm:transform sm:translate-y-2 sm:hover:translate-y-0 sm:transition-all sm:cursor-pointer sm:hover:text-[var(--primary)]"
                    >
                        jenuelganawed936@gmail.com
                    </div>
                    <div class="absolute sm:block hidden h-70px w-2px dark:bg-light-50 bg-[var(--color)] bottom-[-100px] left-[calc(50%-2px)]"></div>
                </NuxtLink>
            </div>
        </div>
    </Transition>
</template>
