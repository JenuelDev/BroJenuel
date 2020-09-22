<template>
     <div class="backButton" style="z-index: 20;" >
          <v-btn fab v-if="fab" @click="hasHistory() 
               ? $router.go(-1) 
               : $router.push('/')"
          >
               <v-icon>{{icon}}</v-icon>
          </v-btn>
          <v-btn v-else rounded @click="hasHistory() 
               ? $router.go(-1) 
               : $router.push('/')">
               <v-icon>{{icon}}</v-icon>
               Home
          </v-btn>
     </div>
</template>
<script>
import { mdiBackburger } from "@mdi/js";
export default {
     props: {
          text: { type: String, default: 'Home' },
          icon: { type: String, default: mdiBackburger },
          fab: { type: Boolean, default: false }
     },
     data() {
          return {
               mdiBackBurger: mdiBackburger
          }
     },
     methods: {
          hasHistory () { return window.history.length > 2 }
     }
}
</script>

<style lang="scss">
     .backButton{
          position: fixed;
          margin-top: 20px;
          margin-left: 20px;
     }
     @media only screen and (max-width: 425px) {
          .backButton {
               margin-top: 10px;
               margin-left: 10px;
          }
     }
</style>