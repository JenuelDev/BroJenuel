<template>
     <div class="showOnScroll" :class="active ? 'showOnScroll-show':'showOnScroll-hide'" >
          <v-tabs class="tab-wide" :background-color="$vuetify.theme.dark ? '#121212' : 'grey lighten-5'" centered>
               <v-tab v-for="tab in tabs" :key="tab.text" :to="tab.path">
                    <v-icon style="margin-right: 5px;">{{tab.icon}}</v-icon>
                    {{tab.text}}
               </v-tab>
        </v-tabs>
     </div>
</template>
<script>
import { tabs } from './../../assets/data/tabs.js';
export default {
     data() {
          return {
               active: false,
               tabs: tabs
          }
     },
     methods: {

     },
     mounted() {
          window.document.onscroll = () => {
               this.active = window.scrollY > 40 ? true : false;
          }    
     },
}
</script>
<style lang="scss">
     .showOnScroll {
          position: fixed;
          z-index: 5;
          top: 0;
          transition: 0.5s;
          width: 100%;
     }
     .showOnScroll-hide{
          margin-top: -200px;
     }
     .showOnScroll-show{
          margin-top: 0px;
     }
     @media only screen and (max-width: 1197px) {
          .showOnScroll {
               display: none;
          }
     }
</style>