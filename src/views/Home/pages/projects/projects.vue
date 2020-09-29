<template>
     <div>
          <v-alert
               :icon="AlertIcon"
               prominent
          >
               <div v-html="alertText"></div>
          </v-alert>
     </div>
</template>
<script src="./projects.js"></script>
<style lang="scss" src="./projects.scss"></style>