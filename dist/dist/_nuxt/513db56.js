(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,7],{273:function(t,e,r){t.exports=function(){"use strict";return function(t,e,r){t=t||{};var o=e.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,r,n){return o.fromToBase(t,e,r,n)}r.en.relativeTime=n,o.fromToBase=function(e,o,i,l,u){for(var c,a,s,h=i.$locale().relativeTime||n,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=d.length,v=0;v<m;v+=1){var f=d[v];f.d&&(c=l?r(e).diff(i,f.d,!0):i.diff(e,f.d,!0));var p=(t.rounding||Math.round)(Math.abs(c));if(s=c>0,p<=f.r||!f.r){p<=1&&v>0&&(f=d[v-1]);var w=h[f.l];u&&(p=u(""+p)),a="string"==typeof w?w.replace("%d",p):w(p,o,f.l,s);break}}if(o)return a;var x=s?h.future:h.past;return"function"==typeof x?x(a):x.replace("%s",a)},o.to=function(t,e){return i(t,e,this,!0)},o.from=function(t,e){return i(t,e,this)};var l=function(t){return t.$u?r.utc():r()};o.toNow=function(t){return this.to(l(this),t)},o.fromNow=function(t){return this.from(l(this),t)}}}()},275:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(25),r(34);var o=function(data){return[{hid:"title",property:"title",content:data.title},{hid:"description",name:"description",content:data.description},{hid:"image",property:"image",content:data.image},{hid:"url",property:"url",content:data.url},{hid:"og:title",property:"og:title",content:data.title},{hid:"og:description",property:"og:description",content:data.description},{hid:"og:image",property:"og:image",content:data.image},{hid:"og:image:alt",property:"og:image:alt",content:"Cover Image"},{hid:"og:url",property:"og:url",content:data.url},{hid:"twitter:title",property:"twitter:title",content:data.title},{hid:"twitter:creator",property:"twitter:creator",content:"@BroJenuel"},{hid:"twitter:card",name:"twitter:card",content:data.cardType||"summary_large_image"}]}},276:function(t,e,r){var content=r(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("2d27eace",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";r(276)},281:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,".blog-tag{padding:3px 10px;background-color:rgba(0,0,0,.8);border-radius:5px;margin:0 3px}.blog-tag.tag-javascript,.blog-tag.tag-JavaScript{background-color:#f0db4f;color:#101010}.blog-tag.tag-vue,.blog-tag.tag-VueJs{color:#101010;background-color:#42b883}.blog-tag.tag-html{background-color:#e34c26;color:#101010}.blog-tag.tag-css{background-color:#264de4;color:#101010}.blog-tag.tag-NuxtJs{background-color:#42b883;color:#101010}.blog-tag.tag-PWA{background-color:#e19e21;color:#101010}.blog-tag.tag-Developer,.blog-tag.tag-developer{background-color:#000;color:#fff}",""]),o.locals={},t.exports=o},284:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("3f675356",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r.r(e);var o={props:["tags"]},n=(r(280),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-3"},t._l(t.tags,(function(e){return r("span",{key:e,class:"blog-tag tag-"+e},[t._v("#"+t._s(e))])})),0)}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,r){"use strict";r.r(e);r(89);var o=r(0).a.extend({props:{url:{type:String},title:{type:String},description:{type:String},quote:{type:String},hashtag:{type:String}},methods:{joinArray:function(t){return t.join()}},data:function(){return{networks:[{network:"facebook",name:"Facebook",icon:'<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 14.5a7 7 0 110-14 7 7 0 010 14zm0 0v-8a2 2 0 012-2h.5m-5 4h5" stroke="currentColor"></path></svg>',color:"#1877f2"},{network:"linkedin",name:"LinkedIn",icon:'<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z" stroke="currentColor"></path></svg>',color:"#007bb5"},{network:"messenger",name:"Messenger",icon:'<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M2.935 12.264l.482.132a.5.5 0 00-.164-.517l-.318.385zM2.326 14.5l-.482-.131a.5.5 0 00.694.584l-.212-.453zm2.435-1.141l.188-.463a.5.5 0 00-.4.01l.212.453zM6.5 6.5l.3-.4-.293-.22-.298.213.291.407zm2 1.5l-.3.4.316.237.304-.253L8.5 8zm-1-8C3.379 0 0 3.201 0 7.196h1C1 3.795 3.889 1 7.5 1V0zM0 7.196c0 2.188 1.023 4.139 2.617 5.454l.636-.771C1.87 10.739 1 9.062 1 7.196H0zm2.452 4.937l-.608 2.236.965.262.608-2.235-.965-.263zm.086 2.82l2.435-1.142-.424-.905-2.435 1.141.424.906zm2.035-1.131c.9.366 1.89.57 2.927.57v-1a6.764 6.764 0 01-2.55-.496l-.377.926zm2.927.57c4.121 0 7.5-3.202 7.5-7.196h-1c0 3.4-2.889 6.195-6.5 6.195v1zM15 7.195C15 3.2 11.621 0 7.5 0v1C11.111 1 14 3.795 14 7.196h1zM3.29 9.406l3.5-2.5-.58-.813-3.5 2.5.58.814zM6.2 6.9l2 1.5.6-.8-2-1.5-.6.8zm2.62 1.484l3-2.5-.64-.768-3 2.5.64.768z" fill="currentColor"></path></svg>',color:"#0084ff"},{network:"quora",name:"Quora",icon:'<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M1.5 6.5h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10A3.5 3.5 0 005 13.5m3.5-7h4a1 1 0 001-1v-3a1 1 0 00-1-1h-3a1 1 0 00-1 1v4zm0 0V10a3.5 3.5 0 003.5 3.5" stroke="currentColor"></path></svg>',color:"#a82400"},{network:"reddit",name:"Reddit",icon:'<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M7.5 1.5l.121-.485A.5.5 0 007 1.5h.5zm5.5 8c0 .774-.55 1.641-1.583 2.343C10.4 12.533 8.998 13 7.5 13v1c1.696 0 3.294-.525 4.479-1.33C13.148 11.876 14 10.743 14 9.5h-1zM7.5 13c-1.498 0-2.9-.466-3.917-1.157C2.551 11.14 2 10.273 2 9.5H1c0 1.243.852 2.376 2.021 3.17C4.206 13.475 5.804 14 7.5 14v-1zM2 9.5c0-.774.55-1.641 1.583-2.343C4.6 6.467 6.002 6 7.5 6V5c-1.696 0-3.294.525-4.479 1.33C1.852 7.124 1 8.257 1 9.5h1zM7.5 6c1.498 0 2.9.467 3.917 1.157C12.449 7.86 13 8.727 13 9.5h1c0-1.243-.852-2.376-2.021-3.17C10.794 5.525 9.196 5 7.5 5v1zm2.306 4.54c-.69.29-1.32.46-2.306.46v1c1.136 0 1.898-.204 2.694-.54l-.388-.92zM7.5 11c-.987 0-1.617-.17-2.306-.46l-.388.92c.796.336 1.558.54 2.694.54v-1zM8 5.5v-4H7v4h1zm-.621-3.515l4 1 .242-.97-4-1-.242.97zM3.974 6.841c-.286-.855-1.12-1.297-1.952-1.297v1c.51 0 .886.261 1.004.615l.948-.318zM2.022 5.544A2.022 2.022 0 000 7.566h1a1.02 1.02 0 011.022-1.022v-1zM0 7.566C0 8.589.76 9.424 1.74 9.56l.139-.99A1.016 1.016 0 011 7.565H0zm11.974-.407c.118-.354.493-.615 1.004-.615v-1c-.832 0-1.666.442-1.952 1.297l.948.318zm1.004-.615A1.02 1.02 0 0114 7.566h1a2.022 2.022 0 00-2.022-2.022v1zM14 7.566c0 .511-.38.934-.879 1.004l.139.99A2.016 2.016 0 0015 7.567h-1zM12.5 3a.5.5 0 01-.5-.5h-1A1.5 1.5 0 0012.5 4V3zm.5-.5a.5.5 0 01-.5.5v1A1.5 1.5 0 0014 2.5h-1zm-.5-.5a.5.5 0 01.5.5h1A1.5 1.5 0 0012.5 1v1zm0-1A1.5 1.5 0 0011 2.5h1a.5.5 0 01.5-.5V1zM5 9h1V8H5v1zm4 0h1V8H9v1z" fill="currentColor"></path></svg>',color:"#ff4500"},{network:"twitter",name:"Twitter",icon:'<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z" fill="currentColor"></path></svg>',color:"#1da1f2"}]}}}),n=r(14),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap items-center"},[t._v("\n    Share: \n    "),t._l(t.networks,(function(e){return r("ShareNetwork",{key:e.network,staticClass:"py-0 px-2 m-1 rounded-sm hover:border-opacity-90 border-opacity-0 border-gray-300 border-t-0  border-r-0 border-l-0 border-b-4 flex items-center duration-300",style:{backgroundColor:e.color},attrs:{network:e.network,url:t.url,title:t.title,description:t.description,quote:t.quote,twitterUser:"BroJenuel"}},[r("span",{staticClass:"text-white mr-2",domProps:{innerHTML:t._s(e.icon)}}),t._v(" "),r("span",{staticClass:"text-white"},[t._v(t._s(e.network))])])}))],2)}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,r){"use strict";r(284)},294:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,".nuxt-content-container p a{cursor:pointer;transition-duration:300ms}.nuxt-content-container p a:hover{--tw-text-opacity:1;color:rgba(96, 165, 250, var(--tw-text-opacity))}@media only screen and (max-width:632px){.nuxt-content-highlight pre{width:90vw;overflow-x:scroll}}",""]),o.locals={},t.exports=o},309:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(25),r(34),r(28),r(273)),l=r.n(n),c=r(275),h={scrollToTop:!0,asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,e.next=3,r("articles",o.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,meta:Object(c.a)({title:this.article.title,description:this.article.description,image:this.article.img,url:"https://brojenuel-blog.ml/view/"+this.$route.params.slug})}},data:function(){return{href:""}},methods:{dateNow:function(t){return this.$dayjs.extend(l.a),this.$dayjs(t).fromNow()}},mounted:function(){this.href=window.location.href}},d=(r(293),r(14)),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text-gray-400 bg-gray-900"},[r("div",{staticClass:"container px-5 py-24 mx-auto flex flex-col"},[r("div",{staticClass:"lg:w-4/6 mx-auto"},[r("div",{staticClass:"rounded-md overflow-hidden"},[r("img",{staticClass:"object-cover object-center h-full w-full",attrs:{id:"focus-here",alt:"content",src:t.article.img}})]),t._v(" "),r("div",{staticClass:"text-center mt-10"},[r("h1",{staticClass:"\n                        text-xl\n                        md:text-2xl\n                        lg:text-4xl\n                        font-bold\n                        text-gray-50\n                    "},[t._v("\n                    "+t._s(t.article.title)+"\n                ")]),t._v(" "),r("CommonTags",{attrs:{tags:t.article.tags}}),t._v(" "),r("p",{staticClass:"flex items-center justify-center"},[r("svg",{attrs:{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15"}},[r("path",{attrs:{d:"M7.5 7.5H7a.5.5 0 00.146.354L7.5 7.5zm0 6.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0zM7 3v4.5h1V3H7zm.146 4.854l3 3 .708-.708-3-3-.708.708z",fill:"currentColor"}})]),t._v(" "),r("span",{staticClass:"ml-3"},[t._v(t._s(t.dateNow(t.article.createdAtDate)))])])],1),t._v(" "),r("div",{staticClass:"flex flex-col sm:flex-row mt-10"},[r("div",{staticClass:"w-full"},[r("CommonShare",{attrs:{url:t.href,title:t.article.title,description:t.article.description,quote:t.article.description,hashtags:t.article.tags}}),t._v(" "),r("article",{staticClass:"\n                            prose\n                            dark:prose-dark\n                            prose-sm\n                            lg:prose-lg\n                            xl:prose-2xl\n                            mx-auto\n                        "},[r("nuxt-content",{attrs:{document:t.article}})],1)],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommonTags:r(287).default,CommonShare:r(288).default})}}]);