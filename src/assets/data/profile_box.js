import { mdiMapMarkerCircle, mdiGmail, mdiLinkedin, mdiGithub, mdiFileDownload, mdiYoutube, mdiDevTo } from '@mdi/js';
import ProfileImage from './../profile.jpg';
export const name = "Jenuel Ganawed";
export const username = "Web Developer";
export const subtitle = "And I am a Web Developer";
export const address = "La Trinidad 2601";
export const phone = "0950-3255-547";
export const email = "Jenuel Oras Ganawed";
export const about = "Hi! I live in La Trinidad, Benguet, Luzon, Philippines. I am a Web Developer. I eat rice and pay bills 👌😁👍😎";
export const intro = "...I am a passionate developer and I like to Code.";
export const profile_image = ProfileImage;
export const links = [
     {
          icon: mdiMapMarkerCircle,
          text: "Benguet, Luzon, Philippines",
          link: "https://goo.gl/maps/t8KxqHTGDw7dfFvr8",
          icon_color: "",
          tooltip: "My Location"
     },
     {
          icon: mdiGmail,
          text: "jenuelganawed936@gmail.com",
          link: "http://jenuelganawed936@gmail.com",
          icon_color: "#d44638",
          tooltip: "Gmail"
     },
     {
          icon: mdiYoutube,
          text: "Youtube Channel",
          link: "https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA",
          icon_color: "red",
          tooltip: "Youtube"
     },
     {
          icon: mdiLinkedin,
          text: "jenuelganawed",
          link: "https://www.linkedin.com/in/jenuelganawed/",
          icon_color: "#0e76a8",
          tooltip: "LinkedIn"
     },
     {
          icon: mdiGithub,
          text: "MisterJ936",
          link: "https://github.com/MisterJ936",
          icon_color: "",
          tooltip: "GitHub"
     },
     {
          icon: mdiFileDownload,
          text: "Download My Resume",
          link: "https://github.com/MisterJ936/jenuelganawedProfileSite/raw/master/src/assets/pdf/Jenuel-Ganawed.pdf",
          icon_color: "#01579B",
          tooltip: "Resume"
     },
];


export const ME = {
     name: name,
     username: username,
     address: address,
     phone: phone,
     email: email,
     about: about,
     links: links
};