<script lang="ts" setup>
const route = useRoute();
const showNav = ref(false);

onBeforeMount(() => {
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        showNav.value = currentScrollPos > 50 ? true : false;
    };
});
</script>
<template>
    <div
        class="fixed top-0 left-0 flex justify-between px-20px items-center transition-all bg-[var(--opacity-background)] z-50 duration-500"
        :class="{ 'mt-[-300px]': !showNav && route.path == '/' }"
    >
        BroJenuel
    </div>
    <ul
        class="fixed top-0 right-0 flex justify-between px-20px items-center transition-all bg-[var(--opacity-background)] z-50 duration-500"
        :class="{ 'mt-[-300px]': !showNav && route.path == '/' }"
    >
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
</template>
