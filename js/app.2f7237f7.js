(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},o={app:0},r={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"adcd779b"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"606a46d3"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],m.parentNode.removeChild(m),a(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"552b":function(t,e,a){t.exports=a.p+"img/salut.4c61e579.webp"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"content"}},[a("v-app",{attrs:{fluid:"",flex:""}},[a("v-card",{staticClass:" overflow-y-hidden",staticStyle:{height:"100%"},attrs:{fluid:"",padless:""}},[a("v-app-bar",{staticClass:"App-bar",attrs:{absolute:"",color:"white","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7",app:"",fluid:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up",staticStyle:{"z-index":"20001"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-app-bar-title",{staticClass:"hidden-sm-and-up"},[a("a",{staticStyle:{"text-decoration":"none",color:"#5000ca"},attrs:{href:"/"}},[t._v("Miharisoa")]),t._v(".fr ")]),a("div",{staticClass:"hidden-xs-only"},[a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[a("v-btn",{staticClass:"ma-3 white--text",attrs:{color:"#5000ca",elevation:"0",dressed:""}},[t._v(" Accueil ")])],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"production"}},[a("v-btn",{staticClass:"ma-3",attrs:{color:"#5000ca",elevation:"0",text:""}},[t._v("Productions")])],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"competences"}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"#5000ca",elevation:"0",text:""}},[t._v(" Compétences ")])],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"stages"}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"#5000ca",elevation:"0",text:""}},[t._v(" Stages ")])],1)],1),a("v-navigation-drawer",{staticStyle:{"z-index":"99999"},attrs:{app:"",clipped:"",absolute:"",fixed:"",floating:"",id:"navDrawer"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[a("v-list-item",[a("v-list-item-content",{attrs:{color:"#5000ca"}},[t._v(" Accueil ")])],1)],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"production"}},[a("v-list-item",[t._v(" Productions ")])],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"competences"}},[a("v-list-item",[t._v(" Compétences ")])],1),a("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"stages"}},[a("v-list-item",[t._v(" Stages ")])],1)],1)],1)],1)],1),a("v-main",[a("v-container",{attrs:{fluid:"","fill-height":"",id:"Test"}},[a("router-view"),a("v-fab-transition",[a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{color:"#5000ca",fab:"",dark:"","x-large":"",fixed:"",bottom:"",right:"",elevation:"15"},on:{click:t.top}},[a("v-icon",[t._v("mdi-chevron-up")])],1)],1)],1)],1),a("v-footer",{attrs:{inset:"",padless:"",bottom:"",color:"white",width:"auto"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[a("path",{attrs:{fill:"#5000ca","fill-opacity":"1",id:"Purple",d:"M0,256L40,218.7C80,181,160,107,240,90.7C320,75,400,117,480,154.7C560,192,640,224,720,208C800,192,880,128,960,133.3C1040,139,1120,213,1200,245.3C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"}})])])],1)],1)],1),a("v-overlay",{attrs:{opacity:1,value:t.overlay,color:"#FFFFFf"}},[a("svg",{staticStyle:{margin:"auto",background:"rgb(255, 255, 255)",display:"block","shape-rendering":"auto"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[a("rect",{attrs:{x:"17.5",y:"30",width:"15",height:"40",fill:"#5000ca"}},[a("animate",{attrs:{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"18;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"}}),a("animate",{attrs:{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"64;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"}})]),a("rect",{attrs:{x:"42.5",y:"30",width:"15",height:"40",fill:"#6900ff"}},[a("animate",{attrs:{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"}}),a("animate",{attrs:{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"}})]),a("rect",{attrs:{x:"67.5",y:"30",width:"15",height:"40",fill:"#b47fff"}},[a("animate",{attrs:{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"}}),a("animate",{attrs:{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"}})])])])],1)},r=[],i={name:"App",data:function(){return{drawer:!1,group:null,svg:!0,zIndex:0,fab:!1,overlay:!0}},methods:{top:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}}},mounted:function(){var t=this;setTimeout((function(){t.overlay=!1}),1200)},watch:{group:function(){this.drawer=!1}}},s=i,l=(a("b1d8"),a("2877")),c=a("6544"),u=a.n(c),d=a("7496"),m=a("40dc"),p=a("5bc1"),f=a("bb78"),v=a("8336"),h=a("b0af"),b=a("a523"),g=a("0789"),y=a("553a"),w=a("132d"),x=a("8860"),C=a("da13"),S=a("5d23"),k=a("1baa"),_=a("f6c4"),V=a("f774"),T=a("a797"),A=a("269a"),M=a.n(A),O=a("f977"),j=Object(l["a"])(s,o,r,!1,null,"28e942e7",null),B=j.exports;u()(j,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:p["a"],VAppBarTitle:f["a"],VBtn:v["a"],VCard:h["a"],VContainer:b["a"],VFabTransition:g["b"],VFooter:y["a"],VIcon:w["a"],VList:x["a"],VListItem:C["a"],VListItemContent:S["a"],VListItemGroup:k["a"],VMain:_["a"],VNavigationDrawer:V["a"],VOverlay:T["a"]}),M()(j,{Scroll:O["b"]});var N=a("f309");n["a"].use(N["a"]);var E=new N["a"]({}),L=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),P=a("bb51");n["a"].use(L["a"]);var I=[{path:"/",name:"Home",component:P["default"],meta:{title:"Accueil"}},{path:"/stages",name:"Stages",component:function(){return a.e("about").then(a.bind(null,"a7df"))},meta:{title:"Mes Stages"}},{path:"/production",name:"production",component:function(){return a.e("about").then(a.bind(null,"7850"))},meta:{title:"Productions"}},{path:"/competences",name:"Competences",component:function(){return a.e("about").then(a.bind(null,"3c2d"))},meta:{title:"Competence"}},{path:"/contact",name:"Accueil",component:function(){return a.e("about").then(a.bind(null,"bb51"))},meta:{title:"Accueil"}}],$=new L["a"]({routes:I});$.afterEach((function(t,e){document.title=t.meta.title,console.log(e)}));var z=$;n["a"].config.productionTip=!1,new n["a"]({vuetify:E,router:z,render:function(t){return t(B)}}).$mount("#app")},b1d8:function(t,e,a){"use strict";a("b2fc")},b2fc:function(t,e,a){},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"text-center mt-13"},[n("v-col",{staticClass:"mb-2"},[n("h1",{staticClass:"hidden-md-and-up font-weight-bold mb-2 "},[t._v(" Hey ! Je suis "),n("span",{staticStyle:{color:"#5000ca"}},[t._v("Miharisoa Babef")]),t._v(" et bienvenue sur mon "),n("span",{staticStyle:{color:"#5000ca"}},[t._v("portfolio")])]),n("h1",{staticClass:"hidden-sm-and-down display-3  font-weight-bold mb-2 "},[t._v(" Hey ! Je suis "),n("span",{staticStyle:{color:"#5000ca"}},[t._v("Miharisoa Babef")]),t._v(" et bienvenue sur mon "),n("span",{staticStyle:{color:"#5000ca"}},[t._v("portfolio")])])])],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"hidden-md-and-up"},[n("v-img",{attrs:{elevation:"12","max-height":"500","max-width":"500",src:a("552b"),id:"pouce"}})],1),n("v-col",[n("v-card",{staticClass:"ma-12 text-md-left text-justify ",attrs:{elevation:"0"}},[n("v-card-title",{class:[t.$vuetify.breakpoint.mdAndUp?"heading":"subtitle-1"],staticStyle:{"font-size":"30px"}},[n("h1",[t._v(" Bienvenue !")])]),n("v-card-text",{staticClass:"text-justify",class:[t.$vuetify.breakpoint.mdAndUp?"title":"body-1"],staticStyle:{"line-height":"1.2em"}},[t._v(" Je suis étudiant au Lycée Victor-et-Hélène-Basch (VHB) en BTS SIO depuis bientôt 2 ans."),n("br"),n("br"),t._v("Je continue à développer et à travailler mes compétences tout au long de ma formation et en dehors de celle-ci. "),n("br"),n("br"),t._v("Vous pouvez consultez mes productions. ")]),n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/production"}},[n("v-btn",{staticClass:"ma-3",attrs:{color:"#5000ca",elevation:"22",fab:"",small:"",dark:"","x-large":"",href:"/production"}},[n("v-icon",[t._v("mdi-folder-multiple")])],1)],1),n("v-btn",{staticClass:"ma-3",attrs:{color:"#5000ca",elevation:"22",fab:"",small:"",dark:"",href:"#contact","x-large":""},on:{click:function(e){t.isShow=!t.isShow}}},[n("v-icon",[t._v("mdi-email")])],1)],1)],1),n("v-col",{staticClass:"ml-26 pl-12 mb-5 hidden-sm-and-down"},[n("v-img",{attrs:{elevation:"12","max-height":"650","max-width":"600",src:a("552b"),id:"pouce"}})],1)],1),n("v-row",[n("v-scroll-x-transition",{attrs:{mode:"in","hide-on-leave":"true"}},[n("Contact",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{msg:"Contactez-moi",id:"contact",transition:"fade-transition"}})],1)],1)],1)},i=[],s=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"block ma-12"},[a("h1",{class:[t.$vuetify.breakpoint.mdAndUp?"heading":"h3"]},[t._v("Contactez-moi !")]),a("v-form",{ref:"form",attrs:{"lazy-validation":"",method:"POST",action:"https://formsubmit.co/miharisoababef@gmail.com"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{name:"name",counter:10,rules:t.nameRules,label:"Nom",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{name:"email",rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-textarea",{attrs:{name:"message",rules:t.messageRules,label:"Message",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"#5000ca",type:"submit",fab:""},on:{click:t.validate}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-send")])],1),a("v-btn",{staticClass:"mr-4",attrs:{icon:"",color:"error"},on:{click:t.reset}},[a("v-icon",[t._v("mdi-restart")])],1)],1)],1)])}),l=[],c=(a("ac1f"),a("00b4"),{data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Nom requis"},function(t){return t&&t.length<=10||"Le nom doit faire moins de 10 caractères"}],email:"",emailRules:[function(t){return!!t||"E-mail requis"},function(t){return/.+@.+\..+/.test(t)||"E-mail invalide"}],message:"",messageRules:[function(t){return!!t||"Message requis"},function(t){return t&&t.length>=10||"Message doit faire plus de 10 caractères"}]}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()}}}),u=c,d=a("2877"),m=a("6544"),p=a.n(m),f=a("8336"),v=a("a523"),h=a("4bd4"),b=a("132d"),g=a("8654"),y=a("a844"),w=Object(d["a"])(u,s,l,!1,null,null,null),x=w.exports;p()(w,{VBtn:f["a"],VContainer:v["a"],VForm:h["a"],VIcon:b["a"],VTextField:g["a"],VTextarea:y["a"]});var C={name:"BaseVue",data:function(){return{isShow:!1}},methods:{showDetails:function(){this.showModal=!0}},computed:{fontSize:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"5px";default:return"30px"}}},components:{Contact:x}},S=C,k=(a("c913"),a("b0af")),_=a("99d9"),V=a("62ad"),T=a("adda"),A=a("0fd9"),M=a("0789"),O=Object(d["a"])(S,r,i,!1,null,"ae359730",null),j=O.exports;p()(O,{VBtn:f["a"],VCard:k["a"],VCardText:_["a"],VCardTitle:_["b"],VCol:V["a"],VContainer:v["a"],VIcon:b["a"],VImg:T["a"],VRow:A["a"],VScrollXTransition:M["d"]});var B={name:"Home",components:{HelloWorld:j}},N=B,E=Object(d["a"])(N,n,o,!1,null,null,null);e["default"]=E.exports},c913:function(t,e,a){"use strict";a("fbef")},fbef:function(t,e,a){}});
//# sourceMappingURL=app.2f7237f7.js.map