import { mdiFileDownload } from '@mdi/js'

export default {
     data() {
          return {
               showButton: this.$vuetify.theme.dark,
               iconLang: mdiFileDownload,
               windowWidth: window.innerWidth
          }
     },
     methods:{
          clickButton() {
               window.open('https://github.com/MisterJ936/MyPortFolio/raw/master/jenuelganawed_home/src/assets/pdf/Jenuel-Ganawed.pdf','_blank');
          },
          onResize() {
               this.windowWidth = window.innerWidth
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
}