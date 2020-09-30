<template>
     <div style="scroll-snap-type: y mandatory;">
          <div class="introduction-page" id="startingline">
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
               <div class="scroll-down-div">
                    <center>
                         <ScrollDown /><br><br>
                         <span style="margin-bottom: 20px;">Scroll Down</span>
                    </center>
               </div>
          </div>
          <v-card elevation="0" style="padding: 50px 20px 50px 20px; text-align:center; margin: 10px; margin-bottom: 100px;">
               <h1 style="margin-bottom: 40px;">
                    <v-icon color="primary" large>{{objective_icon}}</v-icon>
                    Objective
               </h1>
               <q style="font-size: 20px;">
                    {{ objective }}
               </q>
          </v-card>
          <div style="margin: 10px; padding: 20px; margin-bottom: 100px;">
               <h1 style="margin-bottom: 40px; text-align: center;">
                    <v-icon color="primary" large>{{workExperienceIcon}}</v-icon>
                    Journey
               </h1>
               <div class="workplace-experience-timeline">
                    <TimeLine />
               </div>
          </div>
          <div style="margin: 10px;">
               <h1 style="margin-bottom: 40px; text-align: center;">
                    <v-icon color="primary" large>{{skillIcon}}</v-icon>
                    Skills
               </h1>
               <div>
                    <LongCard
                         v-for="skill in skills"
                         :key="skill.text"
                         :title="skill.text"
                         :skill="true"
                         :cardColor="skill.color"
                         elevation="3"
                    >
                         <template v-slot:image>
                              <div>
                                   <v-icon :color="skill.color" size="80px">{{skill.icon}}</v-icon>
                              </div>
                         </template>
                         <template v-slot:content>
                              <div v-html="skill.des"></div>
                         </template>
                    </LongCard>
               </div>
          </div>
          <div style="text-align:center;margin: 50px;">
               <a href="#startingline" style="text-decoration: none;"><v-btn large color="primary">
                    <v-icon>
                         {{arrowTop}}
                    </v-icon>
                    Scroll to TOP
               </v-btn>
               </a>
          </div>
     </div>
</template>
<script src="./introduction.js"></script>
<style lang="scss" src="./introduction.scss"></style>