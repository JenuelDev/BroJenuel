<template>
     <div class="pages">
          <v-card class="overview-cards">
               <h2><v-icon :large="windowWidth <= 425 ? false :true" color="primary" class="icon" style="margin-top: -5px;">{{mdiGold}}</v-icon> Objective</h2>
               <div class="overview-cards-sub">
                    <p class="over-qoute" v-html="overviewdata.objective"></p>
               </div>
          </v-card>
          <v-card v-for="(overview, index) in overviewdata.overviews" :key="index" class="overview-cards">
               <h2><v-icon :large="windowWidth <= 425 ? false :true" color="primary" class="icon">{{overview.icon}}</v-icon> {{overview.h2}}</h2>
               <div v-for="sub in overview.sub" :key="sub.h3" class="overview-cards-sub">
                         <h3 class="overview-cards-sub-title">
                              {{ sub.h3 }}
                              <span v-if="sub.current" class="span-current">
                                   <v-icon :small="windowWidth <= 425 ? true :false">{{mdiHandPointingRight}}</v-icon>
                                    Current Work
                              </span>
                         </h3> 
                         <p class="overview-cards-sub-title-def"><v-icon :small="windowWidth <= 425 ? false :true" :x-small="windowWidth <= 425 ? true :false">{{mdiCalendarMonth}}</v-icon> {{ sub.date }}</p>
                         <div class="overview-cards-sub-content" v-html="sub.content + sub.others"></div>
               </div>
               <TimeLine v-if="overview.chips" :items="overview.chips"/>
          </v-card>
     </div>
</template>
<script src="./index.js"></script>
<style lang="scss">
     .overview-cards{
          padding: 20px;
          margin-bottom: 10px;

          h2 {
               font-size: 30px;
          }

          .overview-cards-sub{
               padding-left: 30px;
               margin: 10px;
               margin-bottom: 20px;

               .span-current {
                    font-size: 12px;
                    background-color: rgba(240, 38, 38, 0.513);
                    padding: 5px;
                    border-radius: 10px;
                    margin-left: 10px;
                    display: inline-block;
               }

               .overview-cards-sub-title-def{
                    font-size: 12px;
                    margin: 0px;
               }

               .overview-cards-sub-content{
                    padding-left: 20px;
               }
          }
     }

     @media only screen and (max-width: 425px) {
               .overview-cards{
                    padding: 5px;
                    h2 {
                         font-size: 20px !important;
                    }
                    .icon{
                         margin-top: -10px;
                    }
                    .overview-cards-sub{
                         margin: 5px 5px 15px 5px;
                         padding-left: 10px;
                         .over-qoute{
                              font-size: 12px;
                         }
                         .overview-cards-sub-title-def{
                              font-size: 8px;
                         }
                         
                         .overview-cards-sub-title{
                              font-size: 14px !important;
                              .span-current{
                                   display: inline-block;
                                   font-size: 7px;
                                   padding: 2px 8px;
                              }
                         }
                         .overview-cards-sub-content{
                              font-size: 12px;
                         }
                    }
               }
     }
</style>