<script lang="ts" setup>
defineProps(["type"]);
</script>
<template>
    <button
        :type="$props.type ?? 'button'"
        class="flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
        <slot />
    </button>
</template>
