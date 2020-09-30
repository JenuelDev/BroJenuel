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
    // this will set the theme
    let themeSelected = localStorage.getItem('theme-select');
    if(themeSelected){
      this.$vuetify.theme.dark = themeSelected == 'true' ? true : false;
    }else{
      localStorage.setItem('theme-select','true');
      this.$vuetify.theme.dark = true;
    }

    //  this will set the bloglist state
    this.$store.dispatch("setBlogList");
  },
  data: () => ({

  }),
};
</script>
