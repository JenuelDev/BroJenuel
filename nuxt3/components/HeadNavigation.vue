<script lang="ts" setup>
const route = useRoute();
const showNav = ref(false);

onMounted(() => {
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        showNav.value = currentScrollPos > 50 ? true : false;
    };
});
</script>
<template>
    <nav
        class="fixed top-0 left-0 w-full h-50px flex justify-between px-20px items-center shadow-md transition-all bg-[var(--opacity-background)] z-50 backdrop-filter backdrop-blur-sm"
        :class="{ 'mt-[-300px]': !showNav && route.path == '/' }"
    >
        <div>BroJenuel</div>
        <ul class="flex gap-10px">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
    </nav>
</template>
