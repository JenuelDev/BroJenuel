<template>
     <div class="blog-list-show">
          <v-card class="post-module" elevation="0">
               <div class="thumbnail">
                    <img :src="image"/>
               </div>
               <v-card class="post-content" elevation="0">
                    <h1 class="title">{{title}}</h1>
                    <v-chip x-small v-for="label in labels" :key="label" style="margin: 3px;">
                         <v-icon small>{{sharpIcon}}</v-icon>
                         {{label}}
                    </v-chip>
                    <p class="description">{{ strimedContent }}...</p>
                    
                    <div class="post-meta" style="margin-top: -7px;">
                              <v-btn
                                   color="indigo"
                                   dark
                                   small
                                   rounded
                                   elevation="0"
                                   @click="$router.push({ name: 'viewpost', params: { id: id } })"
                              >
                                   Read More
                              </v-btn>
                              <span class="comments" style="float: right; font-size: 12px;">
                                   <v-icon small>{{commentIcon}}</v-icon>
                                   {{ date }}
                              </span>
                         <!-- <v-dialog
                              v-model="dialog"
                              width="800px"
                         >
                              <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                   color="indigo"
                                   dark
                                   small
                                   v-bind="attrs"
                                   v-on="on"
                                   rounded
                                   elevation="0"
                              >
                                   Read More
                              </v-btn>
                              </template>
                              <v-card>
                              <v-card-title>
                                   <span class="headline">{{ title }}</span>
                              </v-card-title>
                              <div  class="modal-contents">
                                   
                                   <div >
                                         <v-chip v-for="label in labels" :key="label" style="margin: 3px;">
                                             <v-icon>{{sharpIcon}}</v-icon>
                                             {{label}}
                                        </v-chip>
                                        <span class="comments" style="float:right;">
                                             <v-icon small>{{commentIcon}}</v-icon>
                                             {{ date }}
                                        </span>
                                   </div>
                                   <div v-html="content" class="this-is-content-modal"></div>
                              </div>
                              <v-card-actions style="position: absolute; top: 0; right: 0;">
                                   <v-spacer></v-spacer>
                              </v-card-actions>
                              </v-card>
                         </v-dialog> -->
                         
                    </div>
               </v-card>
          </v-card>
     </div>
</template>
<script>
import { mdiCalendarOutline, mdiComment, mdiCommentOutline, mdiMusicAccidentalSharp } from '@mdi/js'
export default {
     props: {
          id: { type: String },
          title: { type: String, default: 'No Title' },
          image: { type: String, default: null },
          labels: { type: Array, default: null },
          strimedContent: { type: String, default: 'Thiers no strimedContent' },
          date: { type: String, default: 'No Date' },
          content: { type: String, default: 'no content'}
     },
     data() {
          return {
               sharpIcon: mdiMusicAccidentalSharp,
               commentIcon: mdiCalendarOutline,
               dialog: false,
          }
     },
}
</script>
<style lang="scss" src="./bloglist.scss"></style>