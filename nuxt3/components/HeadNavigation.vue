<script lang="ts" setup>
const colorMode = useColorMode();
const theme = ref("");

onMounted(() => {
    theme.value = colorMode.preference;
    console.log(theme.value);
});

watch(
    () => colorMode.value,
    (val) => {
        theme.value = val;
    }
);
</script>
<template>
    <div
        class="fixed top-0 left-0 flex justify-between px-20px items-center transition-all dark:bg-[var(--opacity-background)] z-50 duration-300 w-full h-50px dark:shadow-md shadow-lg backdrop-filter backdrop-blur-sm bg-[var(--background)]"
    >
        <div class="w-full max-w-700px mx-auto flex justify-between">
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
                            v-if="theme === 'dark'"
                            type="button"
                            @click="$colorMode.preference = 'sepia'"
                            class="absolute bg-yellow-50 w-25px h-25px rounded-md text-[var(--background)]"
                        >
                            <Icon name="bx:coffee" />
                        </button>
                        <button v-else-if="theme == 'sepia'" type="button" @click="$colorMode.preference = 'light'" class="absolute bg-white w-25px h-25px rounded-md text-dark-900">
                            <Icon name="mdi:white-balance-sunny" />
                        </button>
                        <button v-else type="button" @click="$colorMode.preference = 'dark'" class="absolute bg-[var(--opacity-background)] w-25px h-25px rounded-md text-light-50">
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
