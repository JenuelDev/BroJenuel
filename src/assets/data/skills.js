import { mdiAngularjs, mdiBrain, mdiFire, mdiLanguageHtml5, mdiLanguageRubyOnRails, mdiLaravel, mdiVuejs } from '@mdi/js';
import { angular, laravel, php, ruby, vue } from "./colorCodes.js";
export const title ="Skills";
export const icon = mdiBrain;
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