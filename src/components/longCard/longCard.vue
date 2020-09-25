<template>
  <div class="long-card-container">
    <v-card class="card" elevation="0">
      <div class="con-img">
        <slot name="image"></slot>
        <!-- 
          the slots should have something like this
          <img src="./../../../../assets/logo.png" alt />
        <img class="blur" src="./../../../../assets/logo.png" alt />-->
      </div>
      <div class="con-text">
        <h2>
          <v-icon>{{icon}}</v-icon>
          {{title}}
        </h2>
        <Lang :usedLang="lang" />
        <div class="con-content">
          <!-- ang slot na ito ahy pwedi element text or anything -->
          <slot name="content"></slot>
          <div style="text-align: right; margin-top: 10px;">
            <v-btn dark tile small v-for="action in actions" :key="action.link" :color="action.color" style="margin: 5px;" @click="goToLink(action.link)">
              <v-icon small style="margin-top: -3px; margin-right: 5px;">{{action.icon}}</v-icon>
              {{action.text}}
            </v-btn>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import Lang from "./lang/lang.vue";
export default {
  components: {
    Lang,
  },
  props: {
    title: { type: String, default: "No Title" },
    icon: { type: String, default: "" },
    link: { type: String, default: "#" },
    lang: { type: Array },
    actions: { type: Array, default: null }
  },
  data() {
    return {};
  },
  methods: {
    goToLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss">
.long-card-container {
  .card {
    width: 100%;
    display: flex;
    margin: 15px 0px 0px 0px;
    transition: all 0.25s ease;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    padding: 10px;

    .con-img {

      margin: 0px 10px;
      margin-top: -20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.35s ease-out;
    }

    .con-text {
      padding: 10px;
      opacity: 0.7;
      font-size: 15px;
      transition: 0.3s;
      .lang-used {
        .lang-color {
          height: 10px;
          width: 10px;
          background: red;
        }
      }
      .con-content {
        margin-top: 10px;
      }
    }

    img {
      height: 120px;
      opacity: 0.7;
      transition: 0.2s;
    }

    img.blur {
      position: absolute;
      filter: blur(7px);
      z-index: -1;
      opacity: 0;
      transform: scale(0.20);
      transition: 0.1s;
      transition: 0.4s;
    }
    &:hover {
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.438);
      .con-text {
        transform: translate(0, -5px);
        padding: 10px;
        opacity: 1;
      }
      img {
        height: 120px;
        opacity: 1;
      }
    }
    &:hover .con-img {
      transform: translate(0, -15px) !important;
    }
    &:hover .con-img img.blur {
      opacity: 0.55 !important;
      transform: translate(-10px, 26px) scale(0.85) !important;
    }
  }
}

@media only screen and (max-width: 542px) {
  .long-card-container {
    .card {
      display: block;
      margin: 20px 0px 0px 0px;
      padding: 5px;
      .con-img {
        float: left;
        margin-top: 0px;
      }
      img {
        height: 70px;
        opacity: 1;
      }
      img.blur {
        position: absolute;
        filter: blur(15px);
        z-index: -1;
        opacity: 0;
        transform: scale(0.85);
        transition: 0.1s;
      }

      .con-text {
        transform: translate(0, 0px) !important;
        opacity: 1;
        h2 {
          font-size: 18px;
        }
        .con-content{
          padding-top: 10px;
          font-size: 12px;
          opacity: 1;
        }
      }
      &:hover {
        transform: translate(0, 0px);
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
        .con-text {
          padding: 10px;
          opacity: 1;
          .con-content {
            opacity: 1;
            margin-top: 10px;
            transition: 0.2s;
          }
        }
        img {
          height: 70px;
          opacity: 1;
        }
      }
      &:hover .con-img {
        transform: translate(0, 0px) !important;
      }
      &:hover .con-img img.blur {
        opacity: 0 !important;
        transform: translate(0px, 0px) scale(0) !important;
      }
    }
  }
}
</style>