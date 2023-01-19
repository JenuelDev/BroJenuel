<script setup lang="ts">
const { $Storage } = useNuxtApp();
onBeforeMount(() => {
    const theme = $Storage.get("theme");
    if (theme && theme == "dark") document.body.className = "dark";
    else if (theme && theme == "light") document.body.className = "light";
    else {
        document.body.className = "dark";
        $Storage.set("theme", "dark");
    }
});
</script>
<template>
    <HeadNavigation />
    <slot />
</template>
