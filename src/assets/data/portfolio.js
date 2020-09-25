import { mdiTextToSpeech, mdiSpeaker, mdiCalculator, mdiGoogleEarth, mdiDownload, mdiEye, mdiGithub } from '@mdi/js'
import SpeechOnText from './../images/portfolio/speechtotext.png';
import texttospeech from './../images/portfolio/texttospeech.png';
import Calculator from './../../assets/images/portfolio/calculator.png';
import WorldTime from './../images/portfolio/worldtime.png';
import { vue, html, css, js, react, reactNative } from './colorCodes.js';

const ActionColor = {
     view: 'deep-purple',
     download: 'indigo'
};

export const smallApps = [
     {
          key: 4,
          title: "World Time Using React Native",
          icon: mdiGoogleEarth,
          content: "World Time is a simple App that I made using React Native. I was able to fetch data from <a href='http://worldtimeapi.org/' target='_blank'>World Time API</a> and Used it in this app. I was able to build the app as an apk and you can check it by clicking the download button bellow.",
          link: "https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view?usp=sharing",
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
     {
          key: 3,
          title: "Web Calculator",
          icon: mdiCalculator,
          content: "Calculator is one fascinating computer that is created during the early days. People Have been using it for computing a lot of stuff. Its been a useful tool for eveyone specially students and workers. So I created a simple calculator using Vue sincce I have been learning how to create and build using vuejs.",
          link: 'https://jenuelganawed-calculator-vue.netlify.app/',
          actions: [
               {
                    text: "View Demo",
                    icon: mdiEye,
                    link: "https://jenuelganawed-calculator-vue.netlify.app/",
                    color: ActionColor.view
               },
               {
                    text: "Github",
                    icon: mdiGithub,
                    link: "https://github.com/MisterJ936/MyPortFolio/tree/master/calculator-vue",
                    color: ""
               }
          ],
          image: Calculator,
          langUsed: [
               {
                    color: vue,
                    text: 'VueJs'
               }
          ]
     },
     {
          key: 1,
          title: "Speech To Text",
          icon: mdiSpeaker,
          content: "This is a simple speech to text using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition. 👍👍👍",
          image: SpeechOnText,
          link: 'https://jenuelganawed-speechtotext.netlify.app/',
          actions: [
               {
                    text: "View Demo",
                    icon: mdiEye,
                    link: 'https://jenuelganawed-speechtotext.netlify.app/',
                    color: ActionColor.view
               },
               {
                    text: "Github",
                    icon: mdiGithub,
                    link: "https://github.com/MisterJ936/MyPortFolio/tree/master/speach-to-text",
                    color: ""
               }
          ],
          langUsed: [
               {
                    color: html,
                    text: 'html'
               },
               {
                    color: css,
                    text: 'css'
               },
               {
                    color: js,
                    text: 'javaScript'
               }
          ]
     },
     {
          key: 2,
          title: "Text To Speech",
          icon: mdiTextToSpeech,
          content: "This is a simple Text to Speech using HTML, CSS, and JS. I was fascinated with what javascrip can do so I made a simple, project to try and convert speech to text. And JavaScript has a library called Speech Recognition. 👍👍",
          image: texttospeech,
          link: 'https://jenuelganawed-texttospeach.netlify.app/',
          actions: [
               {
                    text: "View Demo",
                    icon: mdiEye,
                    link: 'https://jenuelganawed-texttospeach.netlify.app/',
                    color: ActionColor.view
               },
               {
                    text: "Github",
                    icon: mdiGithub,
                    link: "https://github.com/MisterJ936/MyPortFolio/tree/master/text-to-speach",
                    color: ""
               }
          ],
          langUsed: [
               {
                    color: html,
                    text: 'html'
               },
               {
                    color: css,
                    text: 'css'
               },
               {
                    color: js,
                    text: 'javaScript'
               }
          ]
     }
];