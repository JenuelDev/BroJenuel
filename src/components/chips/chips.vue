<template>
     <div>
          <v-chip class="chipsing" v-for="chip in chips" :key="chip.text" :color="chip.color">
               <v-icon left>{{chip.icon}}</v-icon> {{chip.text}}
          </v-chip>
     </div>
</template>
<script>
export default {
     props: {
          chips: { type: Array}
     }
}
</script>
<style lang="scss">
     .chipsing{
          margin: 5px;
          color: white !important;
     }
</style>