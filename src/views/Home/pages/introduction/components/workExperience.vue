<template>
<div class="eeee">
     <v-timeline class="exper-container">
          <v-timeline-item
               v-for="data in datas"
               :key="data.h3"
               :icon="workIcon"
               large
          >
               <!-- <template v-slot:icon>
                    <v-avatar>
                         <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/female-avatar-12-774634.png">
                    </v-avatar>
               </template> -->
               <template v-slot:opposite>
                    <div class="opposite">
                         <v-icon small style="margin: 0px 10px 0px 10px;">{{dateIcon}}</v-icon>
                         <span v-html="data.date"></span><br>
                    </div>
               </template>
               <v-card elevation="0" dark>
                    <div style="padding: 25px" >
                         <h2>{{data.h3}} <v-chip  v-if="data.current" small label color="primary">
                              <v-icon style="margin-right: 8px;">{{pointIcon}}</v-icon>
                              Current Work
                         </v-chip> </h2>
                         
                         <div class="content" v-html="data.content + data.others"></div>
                    </div>
               </v-card>
          </v-timeline-item>
     </v-timeline>
</div>
     
</template>
<script>
import { experiences } from "./../../../../../assets/data/experience.js";
import { mdiBriefcase, mdiBriefcaseOutline, mdiCalendar, mdiHandPointingRight } from '@mdi/js';

export default {
     name: "experience",
     data() {
          return {
               datas: experiences,
               workIcon: mdiBriefcaseOutline,
               dateIcon: mdiCalendar,
               pointIcon: mdiHandPointingRight
          }
     },
}
</script>
<style lang="scss">
     .eeee {
          width: 100%;
          overflow-x: auto;
          .exper-container {
               min-width: 700px;

          }
          h2 {
               font-size: 20px;
          }
     }

     @media only screen and (max-width: 567px) {
          .eeee {
               h2 {
                    font-size: 17px !important;
               }

               .content {
                    font-size: 12px !important;
               }

               .opposite {
                    font-size: 12px !important;
               }
          }
     }
</style>