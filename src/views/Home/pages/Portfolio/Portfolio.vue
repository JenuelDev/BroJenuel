<template>
     <div class="pages">
          <v-skeleton-loader
               v-if="redered == false"
               class="mx-auto"
               type="list-item-avatar-three-line"
          ></v-skeleton-loader>
          <LongCard v-else v-for="data in datas" :key="data.key" :actions="data.actions" :title="data.title" :icon="data.icon" :link="data.link" :lang="data.langUsed">
               <template v-slot:image>
                    <img :src="data.image" alt />
                    <img
                         class="blur"
                         :src="data.image"
                         alt
                    />
               </template>
               <template v-slot:content>
                    <div v-html="data.content"></div>
               </template>
          </LongCard>
     </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>