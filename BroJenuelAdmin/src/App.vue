<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>
<template>
    <header>
        <div>
            <ul>
                <RouterLink>Home</RouterLink>
                <RouterLink>About</RouterLink>
            </ul>
        </div>
    </header>
    <RouterView />
</template>
