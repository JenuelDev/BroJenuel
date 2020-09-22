import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js'

export default {
     data() {
          return {
               showButton: this.$vuetify.theme.dark,
               mdiWeatherSunny: mdiWeatherSunny,
               mdiWeatherNight: mdiWeatherNight,
               windowWidth: window.innerWidth
          }
     },
     methods:{
          clickButton() {
               this.showButton = !this.showButton;
               this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
               localStorage.setItem('theme-select', this.$vuetify.theme.dark);
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