<script setup lang="ts">
const show = ref(false);
const dropdownRef = ref(null);
const menus = [
    {
        path: "/",
        icon: "ic:twotone-web",
        label: "Home",
    },
    {
        path: "/blog",
        icon: "fluent-mdl2:blog",
        label: "Blog",
    },
    {
        path: "/my-work",
        icon: "pajamas:project",
        label: "My Work",
    },
    {
        path: "/contact",
        icon: "pixelarticons:contact",
        label: "Contact Me",
    },
];

onClickOutside(dropdownRef, () => (show.value = show.value == true ? false : false));
</script>
<template>
    <div ref="dropdownRef" class="relative inline-block text-left">
        <button @click="show = !show" type="button" class="btn bg-[var(--background-secondary)] px-5px h-25px rounded-md">
            <Icon name="mingcute:menu-fill" />
            Menu
        </button>
        <Transition name="dropdown">
            <div
                v-show="show"
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[var(--background)] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-99"
            >
                <div class="py-1" role="none">
                    <NuxtLink
                        v-for="menu in menus"
                        :key="menu.path"
                        @click="show = false"
                        :href="menu.path"
                        class="block px-4 py-2 text-sm hover:bg-[var(--background-secondary)] flex items-center gap-6px"
                    >
                        <Icon :name="menu.icon" />
                        {{ menu.label }}
                    </NuxtLink>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style lang="scss">
.dropdown-enter-active {
    transition: all 0.3s ease-out;
}

.dropdown-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
