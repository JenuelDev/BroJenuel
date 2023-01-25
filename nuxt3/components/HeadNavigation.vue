<script lang="ts" setup>
import { useThemeStore } from "~~/store/themeStore";
const themeStore = useThemeStore();
</script>
<template>
    <div
        class="fixed top-0 left-0 flex justify-between px-20px items-center transition-all dark:bg-[var(--opacity-background)] z-50 duration-300 w-full h-50px dark:shadow-md shadow-lg backdrop-filter backdrop-blur-sm bg-light-50 bg-opacity-50"
    >
        <div class="w-full max-w-500px mx-auto flex justify-between">
            <NuxtLink href="/">
                <Icon class="text-size-25px mr-7px" name="gg:boy" />
                <span>Bro</span>
                <span class="text-[var(--primary)] font-800">Jenuel</span>
            </NuxtLink>
            <ul class="flex gap-3">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                <li class="relative">
                    <Transition name="theme-button">
                        <button
                            type="button"
                            v-show="themeStore.isDark"
                            @click="themeStore.isDark = false"
                            class="absolute bg-yellow-50 w-25px h-25px rounded-md text-[var(--background)]"
                        >
                            <Icon name="mdi:white-balance-sunny" />
                        </button>
                    </Transition>
                    <Transition name="theme-button">
                        <button
                            type="button"
                            v-show="!themeStore.isDark"
                            @click="themeStore.isDark = true"
                            class="absolute bg-[var(--background)] w-25px h-25px rounded-md text-light-50"
                        >
                            <Icon name="mdi:moon-waning-crescent" />
                        </button>
                    </Transition>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
.theme-button-enter-active,
.theme-button-leave-active {
    transition: all 0.5s ease;
}

.theme-button-enter-from {
    transform: translateY(20px);
    opacity: 0;
}
.theme-button-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
