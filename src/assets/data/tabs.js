import { mdiMonitorDashboard, mdiBlogger, mdiNotebookCheckOutline, mdiBagPersonal } from '@mdi/js'
export const tabs = [
     {
          path: '/introduction',
          icon: mdiBagPersonal,
          text: "Introduction"
     },
     {
          path: "/overview",
          icon: mdiNotebookCheckOutline,
          text: "Overview"
     },
     {
          path: "portfolio",
          icon: mdiMonitorDashboard,
          text: "Portfolio"
     },
     {
          path: "/blog",
          icon: mdiBlogger,
          text: "Blog"
     }
];