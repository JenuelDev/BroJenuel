<template>
     <div class="lang-used" style="display: block">
          <template v-for="(lang, index) in usedLang">
               <span v-if="typeof lang == 'object'" :key="index"  class="lang-shows">
                    <v-icon x-small style="margin-top: -3px;" :color="lang.color">{{circle}}</v-icon>
                    {{lang.text}}
               </span>
               <span v-else :key="index">
                    <v-icon x-small style="margin-top: -3px;">{{sharpIcon}}</v-icon>
                    {{lang}}
               </span>
          </template>
     </div>
</template>
<script>
import { mdiCheckboxBlankCircle, mdiMusicAccidentalSharp } from '@mdi/js';

export default {
     props: {
          usedLang: {type: Array}
     },
     data() {
          return {
               circle: mdiCheckboxBlankCircle,
               sharpIcon: mdiMusicAccidentalSharp
          }
     },
}
</script>
<style lang="scss">
     .lang-used{
          font-size: 12px;
          margin-top: 5px;
     }
</style>