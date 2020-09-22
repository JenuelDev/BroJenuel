import OverviewData from '../../../../assets/data/overviewdata';
import { mdiGold } from '@mdi/js';
import { mdiHandPointingRight } from '@mdi/js';
import { mdiCalendarMonth } from '@mdi/js';
import TimeLine from './../../../../components/timeline/timeline.vue';

export default {
     components: {
          TimeLine
     },
     data() {
          return {
               overviewdata: OverviewData,
               mdiGold: mdiGold,
               mdiHandPointingRight: mdiHandPointingRight,
               mdiCalendarMonth: mdiCalendarMonth,
               windowWidth: window.innerHeight,
          }
     },
     watch: {
          windowHeight(newHeight, oldHeight) {
               console.log(`it changed to ${newHeight} from ${oldHeight}`);
          }
     },

     mounted() {
          this.$nextTick(() => {
               window.addEventListener('resize', this.onResize);
          })
     },

     beforeDestroy() {
          window.removeEventListener('resize', this.onResize);
     },

     methods: {
          onResize() {
               this.windowWidth = window.innerWidth
          }
     }
}