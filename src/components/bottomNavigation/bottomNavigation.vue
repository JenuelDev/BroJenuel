<template>
     <v-bottom-navigation :fixed="true" color="primary">
          <v-btn v-for="nav in navs" :key="nav.text" :value="nav.text" :to="nav.path">
               <span>{{nav.text}}</span>
               <v-icon>{{nav.icon}}</v-icon>
          </v-btn>
     </v-bottom-navigation>
</template>
<script src="./bottomNav.js"></script>
<style lang="scss">
     
</style>