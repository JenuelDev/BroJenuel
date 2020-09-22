import { profile_image, links, name, intro, subtitle } from "./../../../../assets/data/profile_box.js";
import { mdiFacebook } from "@mdi/js";

export default {
     name: "Introduction",
     data() {
          return {
               fname: name,
               image: profile_image,
               username: subtitle,
               intro: intro,
               icons: {
                    fb: mdiFacebook
               },
               links: links
          }
     },
     methods: {
          goToLink(link) {
               window.open(link,'_blank');
          }
     },
}