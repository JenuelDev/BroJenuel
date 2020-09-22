<template>
  <div :vs-theme="$vuetify.theme.dark ? 'dark' :'light'">
    <v-app>
      <div class="show-myprofile">
      <profileBoxToggleShow />
    </div>
    <ThemeChanger />
    <vue-page-transition name="fade-in-left">
      <router-view/>
    </vue-page-transition>
  </v-app>
  </div>
</template>

<script>
import ThemeChanger from './components/themeChanger/ThemeChanger';
import profileBoxToggleShow from './components/profileBoxToggleShow/profileBoxToggleShow';

export default {
  name: 'App',
  components: {
    ThemeChanger,
    profileBoxToggleShow
  },
  mounted(){
    let themeSelected = localStorage.getItem('theme-select');
    if(themeSelected){
      this.$vuetify.theme.dark = themeSelected == 'true' ? true : false;
    }else{
      this.$vuetify.theme.dark = true;
    }
  },
  data: () => ({

  }),
};
</script>
