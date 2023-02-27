<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>
<template>
    <div class="max-w-900px mx-auto">
        <div class="flex justify-between">
            <div>Blogs</div>
            <button @click="router.push('/blog/create')">Add Post</button>
        </div>
        <div></div>
    </div>
</template>
