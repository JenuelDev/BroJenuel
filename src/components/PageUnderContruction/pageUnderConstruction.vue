<template>
  <div class="under-contruction">
    <v-icon class="icon" x-large>{{mdiHandPeace}}</v-icon>
    <h3>Im Sorry {{pageName}} Page is Under Contruction</h3>
  </div>
</template>

<script>
import { mdiHandPeace } from '@mdi/js'
export default {
  props: {
    pageName: {type: String}
  },
  data() {
    return {
      mdiHandPeace: mdiHandPeace
    }
  },
}
</script>

<style lang="scss">
.under-contruction {
  width: 200px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 200px;
  text-align: center;
  .icon{
    font-size: 140px !important;
  }
}
</style>