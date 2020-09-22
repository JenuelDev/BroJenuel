import PageUnderContruction from "./../../../../components/PageUnderContruction/pageUnderConstruction.vue";
import LongCard from "./../../../../components/longCard/longCard.vue";
import { smallApps } from "./../../../../assets/data/portfolio";

export default {
     components: {
          PageUnderContruction,
          LongCard
     },
     data() {
          return {
               active: false,
               datas: smallApps,
               redered: false
          }
     },
     mounted() {
          this.$nextTick(function () {
               this.redered = !this.rendered;
          })
     },
     methods: {
          goToSite(){
               console.log('sdf');
          }
     },
}