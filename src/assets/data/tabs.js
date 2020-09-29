import { mdiBlogger, mdiBrain, mdiFileDocumentMultiple, mdiCardAccountDetailsOutline } from '@mdi/js'
export const tabs = [
     {
          path: '/introduction',
          icon: mdiCardAccountDetailsOutline,
          text: "About Me"
     },
     {
          path: "/projects",
          icon: mdiFileDocumentMultiple,
          text: "Projects"
     },
     {
          path: "/challenge",
          icon: mdiBrain,
          text: "Code Challenge"
     },
     {
          path: "/blog",
          icon: mdiBlogger,
          text: "Blog"
     }
];