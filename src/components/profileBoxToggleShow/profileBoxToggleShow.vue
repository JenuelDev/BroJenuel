<template>
  <div>
    <v-btn
      icon
      @click="overlay = !overlay"
      :x-large="windowWidth <= 650 ? false: true"
      class="button-show-overlay"
      :class="$vuetify.theme.dark ? 'night' : 'day'"
    >
      <v-icon :x-large="windowWidth <= 650 ? false: true">{{showIcon}}</v-icon>
    </v-btn>
    <div :class="overlay ? 'show-overlay' : ''" @click="overlay = !overlay"></div>
    <div class="profile-box-show" :style="overlay ? 'margin-left: 0px;': 'margin-left: -500px;'">
      <ProfileBox :full-height="false">
        <template v-slot:closeButton>
          <v-btn style="float:right;" icon>
            <v-icon @click="overlay = !overlay">{{closeIcon}}</v-icon>
          </v-btn>
        </template>
      </ProfileBox>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import {
  name,
  username,
  about,
  links,
} from "./../../assets/data/profile_box.js";
import ProfileBox from "./../profilebox/profileBox";

import { mdiAccount, mdiClose } from "@mdi/js";

export default {
  name: "Home",
  components: {
    ProfileBox,
  },
  data() {
    return {
      name: name,
      username: username,
      about: about,
      links: links,
      overlay: false,
      showIcon: mdiAccount,
      closeIcon: mdiClose,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
<style lang="scss">
.button-show-overlay {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 12;
  margin-right: 80px;
  margin-top: 20px;
  display: none;
}

.day {
  background-color: #202020 !important;
  color: white !important;
}
.night {
  background-color: white !important;
  color: #202020 !important;
}

.show-overlay {
  z-index: 15;
  background-color: rgba(37, 37, 37, 0.431);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.close-overlay {
  position: fixed;
  z-index: 25;
}
.profile-box-show {
  position: fixed;
  z-index: 100;
  height: 100vh;
  transition: 0.3s;
  overflow: auto;
}
@media only screen and (max-width: 1197px) {
  .button-show-overlay {
    display: block !important;
  }
}

@media only screen and (max-width: 425px) {
  .button-show-overlay {
    margin-top: 10px;
    margin-right: 70px;
  }
}
</style>