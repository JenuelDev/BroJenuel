<template>
     <span>
          <v-chip v-for="label in labels" :key="label" style="margin: 3px;">
               <v-icon small>{{sharpIcon}}</v-icon>
               {{label}}
          </v-chip>
     </span>
</template>
<script>
export default {
     props: {
          labels: { type: Array }
     },
     
}
</script>