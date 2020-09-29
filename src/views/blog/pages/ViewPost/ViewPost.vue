<template>
     <div class="blog-container">
          <BackButton class="backbutton-btn" :fab="true" :icon="backIcon" />
          <div class="blog-content">
               <center v-if="!content">
                    <v-progress-circular
                    :size="100"
                    :width="5"
                    indeterminate
                    style="text-align:center;"
                    ></v-progress-circular>
               </center>
               
               <v-card v-else class="view-content">
                    <h1 style="margin: 0px 0px 20px 0px !important;">{{title}}</h1>
                    <div class="view-title">
                         <v-chip v-for="label in labels" :key="label" style="margin: 3px;">
                              <v-icon small>{{sharpIcon}}</v-icon>
                              {{label}}
                         </v-chip>
                         <span style="float: right;">{{convertDate(date)}}</span>
                    </div>
                    <div class="view-content" v-html="content">
                    </div>
               </v-card>
          </div>
     </div>
</template>
<script>
import { getPOST } from './../../../../constants/request.js';
import  Chips from './../../../../components/chips/chips.vue';
import { mdiKeyboardReturn, mdiMusicAccidentalSharp } from '@mdi/js';
import  BackButton from './../../../../components/backButton/backButton.vue';

export default {
     components: {
          Chips,
          BackButton
     },
     data() {
          return {
               title: '',
               labels: [],
               sharpIcon: mdiMusicAccidentalSharp,
               backIcon: mdiKeyboardReturn,
               date: '',
               content: ''
          }
     },
     mounted() {
          this.viewPost();
     },
     methods: {
          viewPost() {
               getPOST(this.$route.params.id).then(result => {
                    // console.log(result.data);
                    this.title = result.data.title;
                    this.labels = result.data.labels;
                    this.date = result.data.updated;
                    this.content = result.data.content;
               }).catch( error => {
                    console.log(error);
               })
          },
          convertDate(date){
               const dt = date.split("T")[0];
               const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
               ];
               const dateConvert = new Date(dt)
               const tr = months[dateConvert.getMonth()] + ' '+ dateConvert.getDate().toString() + ', '+ dateConvert.getFullYear().toString() + '';
               return tr;
          }
     },
}
</script>