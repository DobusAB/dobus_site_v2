webpackJsonp([1,0],[function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var n=o(3),a=i(n),s=o(34),l=i(s),r=o(46),d=i(r),c=o(45),p=i(c),u=o(21),f=i(u),v=o(20),g=i(v);o(33);var m=o(4),h=i(m);o(43),a["default"].use(f["default"]),a["default"].use(d["default"]),a["default"].use(p["default"]),a["default"].use(a["default"].lazyimg,{fade:!0,nohori:!0,speed:20}),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){g["default"].attach(document.body)},!1);var _=new d["default"]({history:!0});_.map({"/":{name:"start",component:o(36)},"/about":{name:"about",component:o(35)},"/projects":{name:"project",component:o(42),subRoutes:{"/:name":{name:"project_by_name",component:o(40)}}},"/work":{name:"work",component:o(44)},"/process":{name:"process",component:o(39)}}),_.beforeEach(function(t){"project_by_name"===t.to.name?t.next():"project_by_name"===t.from.name&&"project"===t.to.name?t.next():((0,h["default"])(document.body,0,500,function(){}),t.next())}),_.redirect({"*":"/"}),_.start(l["default"],"app")},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="http://beta.labb.dobus.se/";e["default"]={globalUrl:function(){return o}}},function(t,e,o){var i,n;i=o(9),n=o(25),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},,,function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(38),a=i(n),s=o(37),l=i(s),r=o(2),d=i(r);e["default"]={data:function(){return{msg:"About",global:{projectOpen:!1,loading:!0}}},components:{menu:a["default"],sidfot:l["default"],loading:d["default"]},ready:function(){}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=i(n),s=o(2),l=i(s);e["default"]={data:function(){return{msg:"About",data:[],show:!1}},methods:{getAboutPage:function(t){var e=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages/4").then(function(o){e.data=o.data,e.show=!0,e.$root.global.loading=!1,t.next()},function(t){})}},head:{title:{inner:"Kontakta oss"}},components:{loading:l["default"]},route:{data:function(t){},activate:function(t){this.getAboutPage(t)},deactivate:function(t){this.$root.global.loading=!0,setTimeout(function(){t.next(t)},250)}},ready:function(){}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=i(n),s=o(2),l=i(s);e["default"]={data:function(){return{msg:"Hello World",show:!1,data:[],featured:[],featuredRandom:[],hidden:!1}},head:{title:{inner:"Dobus"}},components:{loading:l["default"]},methods:{getPageData:function(t){var e=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages/37").then(function(o){e.data=o.data,e.getFeatured(t)},function(t){})},getFeatured:function(t){var e=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages?filter[category_name]=featured").then(function(o){e.featured=o.data,e.featuredRandom=e.featured[Math.floor(Math.random()*e.featured.length)],e.show=!0,e.$root.global.loading=!1,t.next(t)},function(t){})},goToProject:function(){console.log(this.featuredRandom),this.$router.go({name:"project_by_name",params:{name:this.featuredRandom.slug}})}},route:{activate:function(t){this.getPageData(t)},deactivate:function(t){this.$root.global.loading=!0,setTimeout(function(){t.next(t)},250)}}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=i(n);e["default"]={data:function(){return{msg:"About",logos:[]}},methods:{getLogos:function(){var t=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/media?parent=1").then(function(e){t.logos=e.data},function(t){})}},ready:function(){}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{data:[],enter:!1}},props:{show:!1},ready:function(){}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=i(n);e["default"]={data:function(){return{data:[],show:!1}},head:{title:{inner:"Såhär jobbar vi"}},components:{},methods:{getPageData:function(t){var e=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages/39").then(function(o){e.data=o.data,e.show=!0,e.$root.global.loading=!1,t.next()},function(t){})}},route:{activate:function(t){this.getPageData(t)},deactivate:function(t){this.$root.global.loading=!0,setTimeout(function(){t.next(t)},250)}},ready:function(){}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=i(n);e["default"]={data:function(){return{data:[],nextProject:[],currentProjectIndex:0,body:document.getElementsByTagName("body")[0]}},props:{project:[]},methods:{getDetailData:function(){var t=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages?filter[name]="+this.$route.params.name).then(function(e){t.data=e.data;var o=document.getElementById("projecttop");o&&(o.scrollTop=0)},function(t){})},getAllProjects:function(){var t=this,e=[];this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages/2").then(function(o){for(var i=0;i<o.data.sub_pages.length;i++)for(var n=0;n<o.data.sub_pages[i].sub_pages.length;n++)e.push(o.data.sub_pages[i].sub_pages[n]);for(var a=e.length,s=0;s<a;s++)t.data[0].id===e[s].ID&&(t.currentProjectIndex=s);t.currentProjectIndex===a-1?t.currentProjectIndex=0:t.currentProjectIndex+=1,t.nextProject=e[t.currentProjectIndex],console.log(t.nextProject)},function(t){})},NextProject:function(t){this.$router.go({name:"project_by_name",params:{name:t}})}},route:{data:function(t){this.getDetailData(),this.getAllProjects()},deactivate:function(t){this.$root.global.projectOpen=!1,this.body.className="",t.next(t)}},ready:function(){this.$root.global.projectOpen=!0,this.body.classList.add("project-open")}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{}},props:{project:[]},ready:function(){}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=i(n),s=o(41),l=i(s),r=o(2),d=i(r);e["default"]={data:function(){return{data:[],show:!1}},components:{projects:l["default"],loading:d["default"]},methods:{getProject:function(t){var e=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages/2").then(function(o){e.data=o.data,e.show=!0,e.$root.global.loading=!1,t.next()},function(t){})}},route:{data:function(t){},activate:function(t){this.getProject(t)},deactivate:function(t){this.$root.global.loading=!0,setTimeout(function(){t.next(t)},250)}},ready:function(){}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),a=i(n),s=o(2),l=i(s);e["default"]={data:function(){return{msg:"Hello World",data:[],show:!1}},head:{title:{inner:"Jobba här"}},components:{loading:l["default"]},methods:{getPageData:function(t){var e=this;this.$http.get(a["default"].globalUrl()+"index.php/wp-json/wp/v2/pages/41").then(function(o){e.data=o.data,e.show=!0,e.$root.global.loading=!1,t.next()},function(t){})}},route:{activate:function(t){this.getPageData(t)},deactivate:function(t){this.$root.global.loading=!0,setTimeout(function(){t.next(t)},250)}},ready:function(){}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports=" <div class=container v-bind:class=\"{'nav--project_open': this.$root.global.projectOpen, 'fadeIn' : global.loading}\"> <menu></menu> <router-view></router-view> </div> <sidfot></sidfot> "},function(t,e){t.exports=' <div class="page--intro flex align-left align-middle" v-if=show> <h1 v-bind:class="{\'fadeIn\' : this.$root.global.loading}">{{data.title.rendered}}</h1> </div> <div class=about--container v-bind:class="{\'fadeIn\' : this.$root.global.loading}" v-if=show> <div class="row about--employee" v-for="sub in data.sub_pages" v-bind:style="{background: sub.custom_fields.work_color }"> <div class="col-xs-12 col-md-8 text-left about--description"> <h1>{{sub.post_title}}</h1> <h2>{{sub.custom_fields.work_title}}</h2> <a href=tel:{{sub.custom_fields.work_phone}}>{{sub.custom_fields.work_phone}} <span><?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width=25px height=25px viewBox="0 0 36 36" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <defs></defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round> <g id=Tjänster-&amp;-Projekt-Copy-6 transform="translate(-1261.000000, -3125.000000)" stroke=#FFFFFF stroke-width=5.59999957> <g id=Group-12 transform="translate(1264.000000, 3128.000000)"> <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id=Path-36></path> <polyline id=Path-37 points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline> </g> </g> </g> </svg> </span> </a> <a href="mailto:{{sub.custom_fields.work_email}}?Subject=Hej!" target=_top>{{sub.custom_fields.work_email}} <span> <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width=25px height=25px viewBox="0 0 36 36" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <defs></defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round> <g id=Tjänster-&amp;-Projekt-Copy-6 transform="translate(-1261.000000, -3125.000000)" stroke=#FFFFFF stroke-width=5.59999957> <g id=Group-12 transform="translate(1264.000000, 3128.000000)"> <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id=Path-36></path> <polyline id=Path-37 points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline> </g> </g> </g> </svg> </span> </a> </div> <img v-bind:src=sub.custom_fields.work_image /> </div> </div> '},function(t,e){t.exports=' <div class=footer v-bind:class="{\'fadeIn\' : this.$root.global.loading}"> <div class=row> <div class="col-xs-12 col-md-6 col-lg-3"> <h4>Hitta oss</h4> <p>Kristian IV:s väg 3</p> <p>302 51, Halmstad</p> <p>Våning 2</p> </div> <div class="col-xs-12 col-md-6 col-lg-3"> <h4>Socialisera</h4> <p><a href=https://www.facebook.com/dobuswebb/ target=_blank>Facebook</a></p> <p><a href=https://twitter.com/dobuswebb target=_blank>Twitter</a></p> <p><a href=https://www.linkedin.com/company/dobus target=_blank>LinkedIn</a></p> <p><a href=https://github.com/DobusAB target=_blank>Github</a></p> </div> <div class="col-xs-12 col-md-6 col-lg-3"> <h4>Våra tjänster</h4> <p><a v-link="{ name: \'project\'}">Apputveckling</a></p> <p><a v-link="{ name: \'project\'}">Digital design</a></p> <p><a v-link="{ name: \'project\'}">Webbutveckling</a></p> <p><a v-link="{ name: \'project\'}">Internet of Things</a></p> <p><a v-link="{ name: \'project\'}">Startuphjälpen</a></p> </div> <div class="col-xs-12 col-md-6 col-lg-3"> <h4>Kontakta oss</h4> <p><a href="">Ekonomi</a></p> <p><a href="">Jobba här</a></p> <p><a href="">Nya projekt</a></p> </div> </div> </div>'},function(t,e){t.exports=' <div class="loading--container flex align-center align-middle" v-bind:class="{\'fadeIn\' : show}"> </div> '},function(t,e){t.exports=' <div class="nav--primary row align-middle" v-bind:class="{\'nav--project_open\': this.$root.global.projectOpen}"> <div class=nav--gradient></div> <div class=nav--inner> <div class=nav--logo v-link="{ name: \'start\' }"> <svg width=119px height=31px viewBox="0 0 119 31" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd font-weight=700 font-family="BrandonGrotesque-BlackItalic, Brandon Grotesque" letter-spacing=1.99999976 font-size=36 font-style=italic> <g id=Desktop-HD-Copy-2 transform="translate(-104.000000, -57.000000)" fill=#FFFFFF> <text id=DOBUS transform="translate(164.000000, 73.000000) rotate(-2.000000) translate(-164.000000, -73.000000) "> <tspan x=102 y=85>DOBUS</tspan> </text> </g> </g> </svg> </div> <div v-link="{path: \'/projects\'}" class=nav--back> <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width=20px height=20px viewBox="0 0 36 36" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <defs></defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round> <g id=Tjänster-&amp;-Projekt-Copy-6 transform="translate(-1261.000000, -3125.000000)" stroke=#fff stroke-width=5.59999957> <g id=Group-12 transform="translate(1279.000000, 3143.000000) scale(-1, 1) translate(-1279.000000, -3143.000000) translate(1264.000000, 3128.000000)"> <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id=Path-36></path> <polyline id=Path-37 points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline> </g> </g> </g> </svg> </div> <div class=nav--links> <a v-link="{ name: \'project\', activeClass: \'nav--active\' }" class="flex align-middle"> <mark>Projekt & Tjänster</mark> </a> <a v-link="{ name: \'about\', activeClass: \'nav--active\' }" class="flex align-middle"> <mark>Kontakta oss</mark> </a> <a v-link="{ name: \'process\', activeClass: \'nav--active\' }" class="flex align-middle"> <mark>Såhär jobbar vi</mark> </a> <a v-link="{ name: \'work\', activeClass: \'nav--active\' }" class="flex align-middle"> <mark>Jobba här</mark> </a> </div> </div> </div> '},function(t,e){t.exports=' <div id=projecttop class=project-container v-if="data.length > 0" transition=expand v-bind:style="{background: data[0].custom_field.project_color}"> <div class=project-inner> <div class="project--image flex flow-vertical align-center align-middle"> <div class=project--intro> <h1>{{{data[0].title.rendered}}}</h1> <h4>{{{data[0].custom_field.project_description}}}</h4> </div> <div class=project--image_container v-bind:style="{\'background-image\': \'url(\' + data[0].custom_field.project_featured_image + \')\' }"></div> <div class=project--shadow></div> </div> <div class="project--section colored row" v-if=data[0].custom_field.project_intro> <div class=description--top></div> <div class="col-xs-12 col-sm-12 align-center align-middle"> <h2 class=project--description>{{{data[0].custom_field.project_intro}}}</h2> </div> </div> <div class="project--section colored row" v-if="data[0].custom_field.project_solution_title || data[0].custom_field.project_solution_description"> <div class="col-xs-12 text-center case--image flex flow-vertical align-center"> <img class=margin-auto v-bind:src=data[0].custom_field.project_solution_image> </div> <div class="col-xs-12 text-center case--info flex flow-vertical align-center"> <h1>{{{data[0].custom_field.project_solution_title}}}</h1> <p>{{{data[0].custom_field.project_solution_description}}}</p> </div> </div> <div class="project--section colored row" v-if="data[0].custom_field.project_solution_title_2 || data[0].custom_field.project_solution_description_2"> <div class="col-xs-12 text-center case--image flex flow-vertical align-center"> <img class=margin-auto v-bind:src=data[0].custom_field.project_solution_image_2> </div> <div class="col-xs-12 text-center case--info flex flow-vertical align-center"> <h1>{{{data[0].custom_field.project_solution_title_2}}}</h1> <p>{{{data[0].custom_field.project_solution_description_2}}}</p> </div> </div> <div class="project--section colored row" v-if="data[0].custom_field.project_solution_title_3 || data[0].custom_field.project_solution_description_3"> <div class="col-xs-12 text-center case--image flex flow-vertical align-center"> <img class=margin-auto v-bind:src=data[0].custom_field.project_solution_image_3> </div> <div class="col-xs-12 text-center case--info flex flow-vertical align-center"> <h1>{{{data[0].custom_field.project_solution_title_3}}}</h1> <p>{{{data[0].custom_field.project_solution_description_3}}}</p> </div> </div> <div class="project--section colored row" v-if="data[0].custom_field.project_solution_title_4 || data[0].custom_field.project_solution_description_4"> <div class="col-xs-12 text-center case--image flex flow-vertical align-center"> <img class=margin-auto v-bind:src=data[0].custom_field.project_solution_image_4> </div> <div class="col-xs-12 text-center case--info flex flow-vertical align-center"> <h1>{{{data[0].custom_field.project_solution_title_4}}}</h1> <p>{{{data[0].custom_field.project_solution_description_4}}}</p> </div> </div> <div class="project--section colored row" v-if=data[0].custom_field.project_results> <div class="col-xs-12 col-sm-12 align-center align-middle"> <h2 class=project--results>{{{data[0].custom_field.project_results}}}</h2> </div> </div> <div class="project--section row" v-if="data[0].custom_field.project_testimony || data[0].custom_field.project_testimony_image" v-bind:style="{\'background-image\': \'url(\' + data[0].custom_field.project_testimony_image + \')\' }"> <div class="col-xs-12 col-sm-12 text-center project--testimony flex flow-vertical align-center"> <h1>"{{{data[0].custom_field.project_testimony}}}"</h1> </div> </div> <div class="next--project row" v-on:click=NextProject(nextProject.post_name) v-bind:style="{background: nextProject.custom_fields.project_color}" v-if=nextProject.post_title> <div class="col-xs-12 text-center"> <div class=project--intro> <h1>{{{nextProject.post_title}}} {{nextProject.name}}</h1> <h4>{{{nextProject.custom_fields.project_description}}}</h4> </div> <div class=project--image_container v-bind:style="{\'background-image\': \'url(\' + nextProject.custom_fields.project_featured_image + \')\' }"></div> <div class=project--shadow></div> <div class="project--arrow flex align-middle align-center"> <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width=25px height=25px viewBox="0 0 36 36" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <defs></defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round> <g id=Tjänster-&amp;-Projekt-Copy-6 transform="translate(-1261.000000, -3125.000000)" stroke=#FFFFFF stroke-width=5.59999957> <g id=Group-12 transform="translate(1264.000000, 3128.000000)"> <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id=Path-36></path> <polyline id=Path-37 points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline> </g> </g> </g> </svg> </div> </div> </div> </div> </div> '},function(t,e){t.exports=' <div class="service--section flex flow-vertical" v-bind:class="{\'fadeIn\' : this.$root.global.loading}" v-bind:style="{background: item.custom_fields.project_color }" v-for="item in project"> <div class="service--header row flex text-left"> <div class="col-xs-12 col-md-12 col-lg-7 service--text"> <h1>{{item.post_title}}</h1> {{{item.post_content}}} </div> <div class="col-lg-5 service--text flex align-middle align-center"> {{{item.custom_fields.service_illustration}}} </div> </div> <div class=service--top></div> <div class="service--content row"> <div class="service--project flex flow-vertical col-xs-12 align-middle align-center" v-link="{ name: \'project_by_name\', params: { name: sub.post_name }}" v-for="sub in item.sub_pages"> <div class=project--image v-bind:style="{\'background-image\': \'url(\' + sub.custom_fields.project_featured_image + \')\' }"> </div> <div class=project--shadow></div> <div class=project--intro> <img src={{{sub.custom_fields.project_thumbnail_logo}}}> <h1>{{{sub.post_title}}}</h1> <h4>{{{sub.custom_fields.project_description}}}</h4> </div> <div class="project--arrow flex align-middle align-center"> <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg width=20px height=20px viewBox="0 0 36 36" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink> <defs></defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round> <g id=Tjänster-&amp;-Projekt-Copy-6 transform="translate(-1261.000000, -3125.000000)" stroke=#FFFFFF stroke-width=5.59999957> <g id=Group-12 transform="translate(1264.000000, 3128.000000)"> <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id=Path-36></path> <polyline id=Path-37 points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787"></polyline> </g> </g> </g> </svg> </div> </div> </div> </div> '},function(t,e){t.exports=' <div class="page--intro flex align-left align-middle" v-if=show _v-00888bf5=""> <h1 v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-00888bf5="">{{data.title.rendered}}</h1> </div> '},function(t,e){t.exports=' <div _v-4e30f8fa=""> <div class="page--intro flex align-left align-middle" _v-4e30f8fa=""> <h1 v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-4e30f8fa="">{{data.title.rendered}}</h1> </div> <projects :project=data.sub_pages _v-4e30f8fa=""></projects> </div> <router-view _v-4e30f8fa=""></router-view> '},function(t,e){t.exports=' <div class=landing--container v-if=show _v-7c4b6816=""> <div class=row _v-7c4b6816=""> <div class="col-xs-12 landing--intro margin-auto text-center flex align-middle" _v-7c4b6816=""> <h1 class=text--tilted v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-7c4b6816="">{{{ data.title.rendered }}}</h1> </div> </div> <div class=row v-bind:style="{background: featuredRandom.custom_field.project_color}" _v-7c4b6816=""> <div class="col-xs-12 site--section landing--project flex flow-vertical margin-auto text-center align-middle align-center" _v-7c4b6816=""> <h3 class=text--tilted v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-7c4b6816="">utvalt projekt</h3> <h2 class=text--tilted v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-7c4b6816="">{{ featuredRandom.title.rendered}}</h2> <div class=masked--image style="background-image:url(\'http://www.digasell.se/wp-content/uploads/2015/06/DSC_0037.jpg\')" _v-7c4b6816=""></div> </div> </div> <div class="row image--background" v-bind:style="{\'background-image\': \'url(\' + data.custom_field.group_image + \')\' }" _v-7c4b6816=""> <div class=image--overlay _v-7c4b6816=""></div> <div class="col-xs-12 site--section landing--about flex flow-vertical margin-auto text-center align-middle align-center" _v-7c4b6816=""> <h3 class=text--tilted v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-7c4b6816="">vårt fantastiska team</h3> <h2 class=text--tilted v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-7c4b6816="">all kompetens under samma tak.</h2> </div> </div> </div> '},function(t,e){t.exports=' <div class="page--intro flex align-left align-middle" v-if=show _v-7cc63b35=""> <h1 v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-7cc63b35="">{{data.title.rendered}}</h1> </div> <div class=positions--container v-bind:class="{\'fadeIn\' : this.$root.global.loading}" _v-7cc63b35=""> <div class="row work--position" v-for="sub in data.sub_pages" _v-7cc63b35=""> <div class="col-xs-12 col-md-12 work--image" v-bind:style="{\'background-image\': \'url(\' + sub.custom_fields.position_image + \')\' }" _v-7cc63b35=""> <div class="col-xs-12 col-md-8 text-left work--description" _v-7cc63b35=""> <h1 _v-7cc63b35="">{{sub.post_title}}</h1> <span _v-7cc63b35="">Sista ansökning: {{{sub.custom_fields.position_date }}}</span> <p _v-7cc63b35="">{{{sub.custom_fields.position_description }}}</p> <a href="" _v-7cc63b35="">Ansök via LinkedIn <span _v-7cc63b35=""> <svg width=25px height=25px viewBox="0 0 36 36" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink _v-7cc63b35=""> <defs _v-7cc63b35=""></defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round _v-7cc63b35=""> <g id=Tjänster-&amp;-Projekt-Copy-6 transform="translate(-1261.000000, -3125.000000)" stroke=#FFFFFF stroke-width=5.59999957 _v-7cc63b35=""> <g id=Group-12 transform="translate(1264.000000, 3128.000000)" _v-7cc63b35=""> <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id=Path-36 _v-7cc63b35=""></path> <polyline id=Path-37 points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787" _v-7cc63b35=""></polyline> </g> </g> </g> </svg> </span> </a> <a href="mailto:info@dobus.se?Subject={{{sub.post_title}}}" target=_top _v-7cc63b35="">Ansök via Mail <span _v-7cc63b35=""> <svg width=25px height=25px viewBox="0 0 36 36" version=1.1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink _v-7cc63b35=""> <defs _v-7cc63b35=""></defs> <g id=Page-1 stroke=none stroke-width=1 fill=none fill-rule=evenodd stroke-linecap=round stroke-linejoin=round _v-7cc63b35=""> <g id=Tjänster-&amp;-Projekt-Copy-6 transform="translate(-1261.000000, -3125.000000)" stroke=#FFFFFF stroke-width=5.59999957 _v-7cc63b35=""> <g id=Group-12 transform="translate(1264.000000, 3128.000000)" _v-7cc63b35=""> <path d="M0.566037736,14.7272727 L28.0997842,14.7272727" id=Path-36 _v-7cc63b35=""></path> <polyline id=Path-37 points="14.1509434 0 29.5989795 14.8862893 14.1509434 29.7725787" _v-7cc63b35=""></polyline> </g> </g> </g> </svg> </span> </a> </div> <div class=work--overlay _v-7cc63b35=""></div> </div> </div> </div> '},,function(t,e,o){var i,n;i=o(5),n=o(22),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;i=o(6),n=o(23),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;o(18),i=o(7),n=o(31),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;i=o(8),n=o(24),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;n=o(26),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;o(16),i=o(10),n=o(29),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;i=o(11),n=o(27),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;i=o(12),n=o(28),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;o(17),i=o(13),n=o(30),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;o(15),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,o){var i,n;o(19),i=o(14),n=o(32),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}]);
//# sourceMappingURL=app.07c647ff1a4b6f9f34b9.js.map