import { profile_image, links, name, intro, subtitle } from "./../../../../assets/data/profile_box.js";
import { objective } from "./../../../../assets/data/overviewdata.js"
import { mdiArrowUp, mdiBrain, mdiBriefcaseOutline, mdiCrosshairsGps, mdiFacebook, mdiMagnet } from "@mdi/js";
import ScrollDown from "./../../../../components/scrollDown/scrollDown.vue";
import TimeLine from "./components/workExperience.vue";
import LongCard from "./../../../../components/longCard/longCard.vue";
import {skills} from "./../../../../assets/data/skills.js"

export default {
     name: "Introduction",
     components: {
          ScrollDown,
          TimeLine,
          LongCard
     },
     data() {
          return {
               fname: name,
               image: profile_image,
               username: subtitle,
               intro: intro,
               icons: {
                    fb: mdiFacebook
               },
               links: links,
               objective: objective,
               objective_icon: mdiCrosshairsGps,
               skills: skills,
               arrowTop: mdiArrowUp,
               skillIcon: mdiBrain,
               workExperienceIcon: mdiBriefcaseOutline
          }
     },
     methods: {
          goToLink(link) {
               window.open(link,'_blank');
          }
     },
}