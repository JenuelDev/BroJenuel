import { mdiLanguageHtml5, mdiAngularjs, mdiVuejs, mdiLanguageRubyOnRails, mdiLaravel, mdiBrain, mdiFire } from '@mdi/js'
import { mdiSchoolOutline } from '@mdi/js';
import { mdiHeadLightbulbOutline } from '@mdi/js';
import { vue, angular, ruby, laravel, php } from './colorCodes.js';

export const skills = [
     {
          text: "HTML|CSS|JAVASCRIPT",
          color: "red darken-1",
          icon: mdiLanguageHtml5,
          des: "HyperText Markup Language (HTML), Cascading Style Sheets (CSS), and JavaScript are the languages that run the web. They’re very closely related, but they’re also designed for very specific tasks."
     },
     {
          text: "Angular JS",
          color: angular,
          icon: mdiAngularjs,
          des: "<a href='https://angular.io/' target='_blank'><strong>AngularJS</strong></a> is a JavaScript-based open-source front-end web framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."
     },
     {
          text: "Vue JS",
          color: vue,
          icon: mdiVuejs,
          des: "<a href='https://vuejs.org/' target='_blank'><strong>Vue.js</strong></a> is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru."
     },
     {
          text: "Ruby On Rails",
          color: ruby,
          icon: mdiLanguageRubyOnRails,
          des: "<a href='https://rubyonrails.org/'><strong>Ruby on Rails</strong></a>, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages."
     },
     {
          text: "Lumen/Laravel",
          color: laravel,
          icon: mdiLaravel,
          des: "<a href='https://laravel.com/' target='_blank'><strong>Laravel</strong></a> is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony. <a href='https://lumen.laravel.com/' target='_blank'><strong>Lumen</strong></a> is a new project from Laravel creator Taylor Otwell. It's a 'micro-framework', meaning it's a smaller, faster, leaner version of a full web application framework. PHP has two other popular micro-frameworks, Slim and Silex. Lumen has the same <i>foundation</i> as Laravel, and many of the same components."
     },
     {
          text: "CodeIgniter",
          color: php,
          icon: mdiFire,
          des: "<a href='https://codeigniter.com/' target='_blank'><strong>CodeIgniter</strong></a> is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications."
     }
];

export default {
     onjective: "I'm a Web Developer offering enthusiasm and understanding of various web tools. Looking to join an industry where the opportunity for growth and professional development is embraced which will inspire me to enhance my skills in Software Development and work with the team in a positive atmosphere, I welcome challenging projects and enjoying working with all sorts of personalities.",
     overviews: [
          
          {
               h2: "Experience",
               icon: mdiHeadLightbulbOutline,
               sub: [
                    {
                         h3: "UTalk Philippines - Software Developer",
                         current: true,
                         date: "Year 2019 to Current Date",
                         content: "I work as a full-time software developer in this company. I was able to work on different frameworks and tools like VueJS, AngularJS, CodeIgniter, Lumen, Ruby on Rails, MongoDB, MySQL, and WordPress.",
                         others: ""
                    },
                    {
                         h3: "Dapayan Eatery La Trinidad – Web System Developer",
                         date: "Year 2018 to 2019",
                         content: 'I participated as an author of the Project Study entitled as Dap-ayan Ordering Management System during the 1rst public research at Kings College of The Philippines on April 6, 2019. I worked mostly on the front end and back end of the system, using mostly PHP programming. <a href="https://media-exp1.licdn.com/media-proxy/ext?w=1024&h=768&f=n&hash=T5nTfH7WcOgNNs3aDH1L6Q3dlCM%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjsfs_aK7Dz8EAUKX9TjQAyd--1SDDjFI66eNy6eY0j3cXgd8X5agYUbhl4j3lK6w" target="_blank">View Certificate</a>',
                         others: ""
                    },
                    {
                         h3: "ILearn Development Skills Academy - OJT (Graphic Designer and Programmer)",
                         date: "Year 2018",
                         content: 'Creating web designs, mostly used is Bootstrap Framework. Helped in programming the back end and front end of system , Video Editing and Photoshop (Infographics, tarpaulins, images)',
                         others: ""
                    }
               ]
          },
          {
               h2: "Education",
               icon: mdiSchoolOutline,
               sub: [
                    {
                         h3: "Kings College of The Philippines - BS in Information Tech.",
                         date: "Year 2016 to 2019",
                         content: "I took the Bachelor of Science in Information Technology as my course, were I learned how to code using languages such us java, JavaScript, MySQL,PHP and frameworks like bootstrap, wordpress, etc. I took the major for Web Technology.",
                         others: ""
                    },
                    {
                         h3: "Cordillera Career Deveopment College (High School Graduate)",
                         date: "School Year 2012 to 2014",
                         content: "I enrolled as an High School Student in CCDC where I were actively partipated in events and programs.",
                         others: ""
                    }
               ]
          },
          {
               h2: "Skills",
               icon: mdiBrain,
               sub: null,
               chips: skills
          }

     ],
};