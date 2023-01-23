<script setup lang="ts">
import { useTestStore } from "~~/store/testStore";

const testStore = useTestStore();
</script>

<template>
    <div class="max-w-700px md:px-30px px-10px mx-auto mt-80px">This is Contact Page count: {{ testStore.count }}</div>
</template>
