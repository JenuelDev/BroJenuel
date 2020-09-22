<template>
     <div class="setting-changer">
          <v-btn @click="clickButton()" icon :x-large="windowWidth <= 425 ? false: true" class="button" :class="showButton ? 'night' : 'day'">
               <v-icon :x-large="windowWidth <= 425 ? false: true" v-if="showButton">{{ mdiWeatherSunny }}</v-icon>
               <v-icon :x-large="windowWidth <= 425 ? false: true" v-else>{{ mdiWeatherNight }}</v-icon>
          </v-btn>
     </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>