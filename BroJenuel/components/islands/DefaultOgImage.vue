<script setup lang="ts">
const props = defineProps({
    path: String,
    title: String,
    description: String,
    // themeColor: String,
    appName: String,
});
// const theme = computed(() => props.themeColor || "#dbf4ff");

const backgroundColor = "#0a192f";
const white = "#e6f1ff";
const primary = "#64ffdb";
</script>

<template>
    <div
        :style="{
            fontWeight: 400,
            padding: '0 60px',
            width: '100%',
            height: '100%',
            backgroundColor: backgroundColor,
            display: 'flex',
            alignItems: 'center',
        }"
    >
        <div :style="{ display: 'flex', flexDirection: 'column', paddingTop: '40px' }">
            <p :style="{ fontSize: '75px', fontWeight: 'bold', marginBottom: '20px', color: primary }">{{ title }}</p>
            <p :style="{ fontSize: '35px', fontWeight: 400, color: white }">{{ description }}</p>
        </div>
        <div :style="{ position: 'absolute', top: '70px', left: '170px', fontSize: '40px', fontWeight: 300, color: white }">{{ appName }}</div>
        <img :style="{ position: 'absolute', top: '50px', left: '60px', borderRadius: '100%', width: '80px', height: '80px' }" src="/img/picture/small.jpg" />
    </div>
</template>
