<template>
     <div class="blog-container">
          <div class="blog-content">
               <v-alert
                    :icon="blogIcon"
                    prominent
                    class="alert-blog"
               >
                    <div v-html="alertText"></div>
               </v-alert>
               <div v-if="blogItems.length == 0">
                    <v-skeleton-loader
                         v-for="count in 4"
                         :key="count"
                         class="mx-auto"
                         type="list-item-avatar-three-line"
                         style="margin-bottom: 10px;"
                    ></v-skeleton-loader>
               </div>
               
               <BlogItems v-else :datas="blogItems" />
          </div>
     </div>
</template>
<script src="./index.js"></script>