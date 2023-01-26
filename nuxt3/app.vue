<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
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

.btn {
    @apply flex items-center justify-center gap-1 rounded-md sm:px-10px sm:py-5px px-30px py-10px  whitespace-nowrap cursor-pointer  duration-150 border border-[var(--gray-lighter)] md:text-size-16px text-size-14px;

    &.left-up {
        @apply transform translate-y-1 transition-transform;
    }

    &.btn-lg {
        @apply sm:px-20px sm:py-10px px-40px py-20px;
    }

    &.btn-filled {
        @apply border border-[var(--primary)] bg-[var(--primary)] dark:text-dark-900 text-white;
    }

    &:hover {
        @apply translate-y-0 bg-[var(--primary)] dark:text-[var(--background)] text-white border-[var(--primary)];

        &.btn-filled {
            @apply border-[var(--primary-darker)] bg-[var(--primary-darker)];
        }
    }
}
</style>
