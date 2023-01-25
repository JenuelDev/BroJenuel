<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<style lang="scss">
.layout-enter-active,
.layout-leave-active {
    transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
    filter: grayscale(1);
}

// Transition Component
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.button {
    @apply flex items-center justify-center gap-1 rounded-md sm:px-10px sm:py-5px px-30px py-10px  whitespace-nowrap cursor-pointer  duration-150 border border-[var(--gray-lighter)] md:text-size-16px text-size-14px;

    &.left-up {
        @apply transform translate-y-1 transition-transform;
    }

    &:hover {
        @apply translate-y-0 bg-[var(--primary)] dark:text-[var(--background)] text-white border-[var(--primary)];
    }
}
</style>
