<template>
     <div class="resume-download">
          <v-tooltip left>
               <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs"
          v-on="on" @click="clickButton()" icon :x-large="windowWidth <= 425 ? false: true" class="button" :class="$vuetify.theme.dark ? 'night' : 'day'">
                         <v-icon :x-large="windowWidth <= 425 ? false: true" v-if="showButton">{{ iconLang }}</v-icon>
                    </v-btn>
               </template>
               <span>Download Resume</span>
          </v-tooltip>
          
     </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>