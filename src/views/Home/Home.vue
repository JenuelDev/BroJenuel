<template>
  <div class="content-container">
    <div class="home">
      <!-- tabs when scrolling down -->
      <ShowTabsOnScroll />
      <div class="profile-container">
        <div
          class="profile-box-here"
          style="margin-top: 10px;"
          :style="$route.name == 'Introduction' ? 'width: 0%; opacity: 0;' : 'width: 25%; opacity: 1 !important;'"
        >
          <ProfileBox class="float-right" />
        </div>
        <div
          class="info-box"
          :style="$route.name == 'Introduction' ? 'width: 100%;' : 'width: 75%;'"
        >
          <!-- tab for tablet and window -->
          <v-tabs class="tab-wide">
            <v-tab v-for="tab in tabs" :key="tab.text" :to="tab.path">
              <v-icon style="margin-right: 5px;">{{tab.icon}}</v-icon>
              {{tab.text}}
            </v-tab>
          </v-tabs>

          <div class="info-box-page-view">
            <!-- <v-card class="page" :loading="false" :disabled="false"> -->
              <vue-page-transition name="fade-in-up">
                <router-view></router-view>
              </vue-page-transition>
            <!-- </v-card> -->
          </div>
        </div>
      </div>
      <!-- tab for phone / small width screen -->
      <div class="bottom-navigations">
        <BottomNav />
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss"></style>
