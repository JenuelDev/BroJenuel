import { mdiDownload, mdiEye, mdiGithub, mdiGoogle } from '@mdi/js';
import { vue, html, css, js, react, reactNative } from './colorCodes.js';

export default [
     {
          key: 'samplekey',
          title: "sampleprojects",
          icon: mdiGoogle,
          content: "World Time is a simple App that I made using React Native. I was able to fetch data from <a href='http://worldtimeapi.org/' target='_blank'>World Time API</a> and Used it in this app. I was able to build the app as an apk and you can check it by clicking the download button bellow.",
          actions: [
               {
                    text: "Download App",
                    icon: mdiDownload,
                    link: "https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view?usp=sharing",
                    color: ActionColor.download
               },
               {
                    text: "View API's",
                    icon: mdiEye,
                    link: "http://worldtimeapi.org/",
                    color: ActionColor.view
               },
               {
                    text: "Github",
                    icon: mdiGithub,
                    link: "https://github.com/MisterJ936/MyPortFolio/tree/master/appDev/world_time",
                    color: ""
               }
          ],
          image: WorldTime,
          langUsed: [
               {
                    color: react,
                    text: 'React'
               },
               {
                    color: reactNative,
                    text: 'reactNative'
               }
          ]
     },
];