import UnderContruction from "./../../../../components/PageUnderContruction/pageUnderConstruction.vue";
import {getPOSTS} from './../../../../constants/request.js';
import BlogItems from './../../components/blog-item/blogItem.vue';
import { mdiBlogger } from '@mdi/js';
import { alert } from '@//assets/data/blog.js';
import BackButton from "./../../../../components/backButton/backButton.vue";

export default {
     components:{
          UnderContruction,
          BlogItems,
          BackButton
     },
     data() {
          return {
               blogItems: [],
               blogIcon: mdiBlogger,
               alertText: alert
          }
     },
     methods: {
     },
     mounted() {
          getPOSTS().then(result => {
               this.blogItems = result.data.items;
          })
          .catch(error => {
               console.log(error);
          });
     },
}