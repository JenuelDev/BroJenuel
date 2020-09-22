<template>
     <div>
          <div class="introduction-page">
               <div class="intropage-container">
                    <div class="intropage-img">
                         <div class="intropage-img-container">
                              <div class="intropage-img-here">
                                   <img :src="image" alt="">
                              </div>
                         </div>
                    </div>
                    <div class="intropage-info">
                         <div class="intropage-info-container">
                              <h2>Hola! My name is</h2>
                              <h1>{{fname}}</h1>
                              <h2>{{username}}</h2>
                              <div class="intropage-info-text">
                                   <p>{{intro}}</p>
                                   <div class="button-links">
                                        <v-tooltip  v-for="link in links" :key="link.text" bottom>
                                             <template v-slot:activator="{on, attrs}">
                                                  <v-btn 
                                                       v-bind="attrs" 
                                                       v-on="on"  
                                                       icon 
                                                       large
                                                       :color="link.icon_color" 
                                                       @click="goToLink(link.link)"
                                                  >
                                                       <v-icon large>{{link.icon}}</v-icon>
                                                  </v-btn>
                                             </template>
                                             <span>{{link.tooltip}}</span>
                                        </v-tooltip>
                                        
                                   </div>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     </div>
     
</template>
<script src="./introduction.js"></script>
<style lang="scss" src="./introduction.scss"></style>