webpackJsonp([1],{130:function(t,e,s){var i=s(137);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s(129).default;a("ba2f7d08",i,!0,{})},131:function(t,e,s){var i=s(139);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s(129).default;a("4e49db98",i,!0,{})},136:function(t,e,s){"use strict";var i=s(130),a=s.n(i);a.a},137:function(t,e,s){e=t.exports=s(128)(!1),e.push([t.i,".news-item{background-color:#fff;padding:20px 30px 20px 80px;border-bottom:1px solid #eee;position:relative;line-height:20px}.news-item .score{color:#f60;font-size:1.1em;font-weight:700;position:absolute;top:50%;left:0;width:80px;text-align:center;margin-top:-10px}.news-item .host,.news-item .meta{font-size:.85em;color:#828282}.news-item .host a,.news-item .meta a{color:#828282;text-decoration:underline}.news-item .host a:hover,.news-item .meta a:hover{color:#f60}",""])},138:function(t,e,s){"use strict";var i=s(131),a=s.n(i);a.a},139:function(t,e,s){e=t.exports=s(128)(!1),e.push([t.i,".news-view{padding-top:45px}.news-list,.news-list-nav{background-color:#fff;border-radius:2px}.news-list-nav{padding:15px 30px;position:fixed;text-align:center;top:55px;left:0;right:0;z-index:998;box-shadow:0 1px 2px rgba(0,0,0,.1)}.news-list-nav a{margin:0 1em}.news-list-nav .disabled{color:#ccc}.news-list{position:absolute;margin:30px 0;width:100%;transition:all .5s cubic-bezier(.55,0,.1,1)}.news-list ul{list-style-type:none;padding:0;margin:0}.slide-left-enter,.slide-right-leave-to{opacity:0;transform:translate(30px)}.slide-left-leave-to,.slide-right-enter{opacity:0;transform:translate(-30px)}.item-enter-active,.item-leave-active,.item-move{transition:all .5s cubic-bezier(.55,0,.1,1)}.item-enter,.item-leave-active{opacity:0;transform:translate(30px)}.item-leave-active{position:absolute}@media (max-width:600px){.news-list{margin:10px 0}}",""])},148:function(t,e,s){"use strict";function i(t){return{name:t+"-stories-view",asyncData:function(e){return e.store.dispatch("FETCH_LIST_DATA",{type:t})},title:y(t),render:function(e){return e(_,{props:{type:t}})}}}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-view"},[s("div",{staticClass:"news-list-nav"},[t.page>1?s("router-link",{attrs:{to:"/"+t.type+"/"+(t.page-1)}},[t._v("< prev")]):s("a",{staticClass:"disabled"},[t._v("< prev")]),s("span",[t._v(t._s(t.page)+"/"+t._s(t.maxPage))]),t.hasMore?s("router-link",{attrs:{to:"/"+t.type+"/"+(t.page+1)}},[t._v("more >")]):s("a",{staticClass:"disabled"},[t._v("more >")])],1),s("transition",{attrs:{name:t.transition}},[t.displayedPage>0?s("div",{key:t.displayedPage,staticClass:"news-list"},[s("transition-group",{attrs:{tag:"ul",name:"item"}},t._l(t.displayedItems,function(t){return s("item",{key:t.id,attrs:{item:t}})}),1)],1):t._e()])],1)},n=[],r=s(63),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"news-item"},[s("span",{staticClass:"score"},[t._v(t._s(t.item.score))]),s("span",{staticClass:"title"},[t.item.url?[s("a",{attrs:{href:t.item.url,target:"_blank",rel:"noopener"}},[t._v(t._s(t.item.title))]),s("span",{staticClass:"host"},[t._v(" ("+t._s(t._f("host")(t.item.url))+")")])]:[s("router-link",{attrs:{to:"/item/"+t.item.id}},[t._v(t._s(t.item.title))])]],2),s("br"),s("span",{staticClass:"meta"},["job"!==t.item.type?s("span",{staticClass:"by"},[t._v("\n      by "),s("router-link",{attrs:{to:"/user/"+t.item.by}},[t._v(t._s(t.item.by))])],1):t._e(),s("span",{staticClass:"time"},[t._v("\n      "+t._s(t._f("timeAgo")(t.item.time))+" ago\n    ")]),"job"!==t.item.type?s("span",{staticClass:"comments-link"},[t._v("\n      | "),s("router-link",{attrs:{to:"/item/"+t.item.id}},[t._v(t._s(t.item.descendants)+" comments")])],1):t._e()]),"story"!==t.item.type?s("span",{staticClass:"label"},[t._v(t._s(t.item.type))]):t._e()])},l=[],p=s(64),c={name:"news-item",props:["item"],serverCacheKey:function(t){var e=t.item,s=e.id,i=e.__lastUpdated,a=e.time;return s+"::"+i+"::"+Object(p.timeAgo)(a)}},m=c,u=(s(136),s(30)),d=Object(u.a)(m,o,l,!1,null,null,null);d.options.__file="Item.vue";var v=d.exports,f={name:"item-list",components:{Item:v},props:{type:String},data:function(){return{transition:"slide-right",displayedPage:Number(this.$route.params.page)||1,displayedItems:this.$store.getters.activeItems}},computed:{page:function(){return Number(this.$route.params.page)||1},maxPage:function(){var t=this.$store.state,e=t.itemsPerPage,s=t.lists;return Math.ceil(s[this.type].length/e)},hasMore:function(){return this.page<this.maxPage}},beforeMount:function(){var t=this;this.$root._isMounted&&this.loadItems(this.page),this.unwatchList=Object(r.d)(this.type,function(e){t.$store.commit("SET_LIST",{type:t.type,ids:e}),t.$store.dispatch("ENSURE_ACTIVE_ITEMS").then(function(){t.displayedItems=t.$store.getters.activeItems})})},beforeDestroy:function(){this.unwatchList()},watch:{page:function(t,e){this.loadItems(t,e)}},methods:{loadItems:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.page,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;this.$bar.start(),this.$store.dispatch("FETCH_LIST_DATA",{type:this.type}).then(function(){if(t.page<0||t.page>t.maxPage)return void t.$router.replace("/"+t.type+"/1");t.transition=-1===s?null:e>s?"slide-left":"slide-right",t.displayedPage=e,t.displayedItems=t.$store.getters.activeItems,t.$bar.finish()})}}},h=f,g=(s(138),Object(u.a)(h,a,n,!1,null,null,null));g.options.__file="ItemList.vue";var _=g.exports;e.default=i;var y=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}});