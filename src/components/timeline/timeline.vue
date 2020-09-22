<template>
     <v-timeline dense class="timeline-container-here">
          <v-timeline-item
               v-for="item in items"
               :key="item.text"
               :color="item.color"
               large
          >
               <template v-slot:icon>
                    <v-icon dark>{{item.icon}}</v-icon>
               </template>
               <!-- <template v-slot:opposite>
                    <span>Tus eu perfecto</span>
               </template> -->
               <v-card elevation="0" style="padding: 5px">
                    <h2 class="timeline-title-here">{{item.text}}</h2>
                    <div v-html="item.des" class="timeline-content-here"></div>
               </v-card>
          </v-timeline-item>
     </v-timeline>
</template>
<script>
export default {
     props: {
          items: { type: Array, default: null }
     }
}
</script>
<style lang="scss">

@media only screen and (max-width: 425px) {
     .timeline-container-here{
          .timeline-title-here{
               font-size: 14px !important;
          }
          .timeline-content-here{
               font-size: 12px !important;
          }
     }
}

</style>