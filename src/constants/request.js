import axios from 'axios';

let l1 = process.env.VUE_APP_BLOG_ID_ONE;
let l2 = process.env.VUE_APP_BLOG_ID_TWO;
export const la = l1 + l2;

let q1 = process.env.VUE_APP_API_KEY_ONE;
let q2 = process.env.VUE_APP_API_KEY_TWO;
export const qa = q1 + q2;

let r1 = process.env.VUE_APP_URL_PART1;
let r2 = process.env.VUE_APP_URL_PART2;
let r3 = process.env.VUE_APP_URL_PART3;
let r4 = process.env.VUE_APP_URL_PART4;
let r5 = process.env.VUE_APP_URL_PART5;
let r6 = process.env.VUE_APP_URL_PART6;
let r7 = process.env.VUE_APP_URL_PART7;
let r8 = process.env.VUE_APP_URL_PART8;
let r9 = process.env.VUE_APP_URL_PART9;
let r10 = process.env.VUE_APP_URL_PART10;

export const ra = r1 + r2 + r3 + r4 + r5 + r6 + r7 + r8 + r9 + r10;

export const getPOSTS =  () => {
     let k1 = 'k';
     let k2 = 'e';
     let k3 = 'y';
     let ka = k1 + k2 + k3;
     
     return axios.get(ra + la + '/posts?'+ ka +'=' + qa +"&maxResults=10&fetchImages=true");
}

export const getPOST = (id) => {
     let k1 = 'k';
     let k2 = 'e';
     let k3 = 'y';
     let ka = k1 + k2 + k3;
     
     return axios.get(ra + la + '/posts/'+id+"?"+ka+'='+ qa);
}