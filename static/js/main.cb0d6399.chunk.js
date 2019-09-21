(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{67:function(e,t,a){e.exports=a(92)},72:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(72),a(7)),o=function(e){var t=e.store,a=e.children;return r.a.createElement(c.a,{view:t.view,data:t.data,markerAddition:t.markerAddition},a)},s=a(133),m=a(130),u=a(55),d=a(49),p=a.n(d),h=a(33),b=a.n(h),f=a(48),E=a.n(f),v={bodyColor:{dark:b.a.A400,light:b.a[50]},palette:{primary:E.a,secondary:p.a,text:{primary:b.a[50]}}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(m.a)(Object(u.a)(Object.assign({},e,v,{typography:{useNextVariants:!0}})))},k=Object(c.b)("view")(Object(c.c)(function(e){var t=e.view,a=e.children;return r.a.createElement(s.a,{theme:g({palette:{type:t.lightThemeActive?"light":"dark"}})},a)})),w=a(119),j=a(118),O=function(){return r.a.createElement(j.a,null,r.a.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}))},x=function(){return r.a.createElement(w.a,{color:"inherit","aria-label":"go to github",onClick:function(){return e="https://github.com/OriLev/markered-map",void window.open(e);var e}},r.a.createElement(O,null))},y=a(4),L=a(93),N=Object(y.a)(function(e){return{title:Object.assign({},e.mixins.gutters(),{flex:"1 1 auto"})}})(function(e){var t=e.classes,a=e.title;return r.a.createElement(L.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0},a)}),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{title:"Bing map with markers and polygons"}),r.a.createElement(x,null))},M=a(57),C=a(51),F=a.n(C),A=Object(y.a)(function(){return{wrapper:{zIndex:1,height:"100vh",overflow:"auto",position:"relative",width:"100%"}}})(function(e){var t=e.classes,a=Object(M.a)(e,["classes"]);return r.a.createElement("div",Object.assign({className:t.wrapper},a))}),I=Object(c.b)("view")(function(e){var t=e.children,a=e.view;return r.a.createElement(A,null,t,r.a.createElement(F.a,{target:"window",onResize:a.onScreenResize}))}),V=a(120),D=a(121),B=Object(y.a)(function(){return{appBar:{right:0,left:"auto",position:"absolute"}}})(function(e){var t=e.classes,a=e.children;return r.a.createElement(V.a,{className:t.appBar},r.a.createElement(D.a,null,a))}),R=function(e){var t=e.classes,a=e.children,n=e.disableGutters;return r.a.createElement("main",{className:!n&&t.content},r.a.createElement("div",{className:t.toolbar}),a)};R.defaultProps={disableGutters:!1};var G=Object(y.a)(function(e){return{toolbar:e.mixins.toolbar,content:Object.assign({},e.mixins.gutters(),{backgroundColor:e.palette.background.default})}})(R),z=a(94),H=a(52),W=Object(c.b)("data")(Object(y.a)(function(){return{root:{flexGrow:1},map:{width:"65%"}}})(Object(c.c)(function(e){var t=e.classes,a=e.data;return r.a.createElement(H.ReactBingmaps,{bingmapKey:"AqnGWdRb63XPpubpT9NyFKou487EFaJm3wd7j4qBpJrFMGfZEYgqSg6rOSK6ZK9I",className:t.map,pushPins:a.markers.map(function(e){return{location:[e.lon,e.lat],option:{color:"red"}}}),polyline:{location:a.polyLinesLocation,option:{strokeColor:"blue",strokeThickness:5}},center:a.center,zoom:5})}))),J=Object(c.b)("data")(Object(y.a)(function(){return{markerList:{width:"100%",listStyle:"none"},item:{marginBottom:"7px",border:"solid 1px black",padding:"5px"},itemFirstRow:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"5px"},itemSecondRow:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}})(Object(c.c)(function(e){var t=e.classes,a=e.data;return r.a.createElement("ul",{className:t.markerList},a.markers.map(function(e){return r.a.createElement("li",{key:e.id,className:t.item},r.a.createElement("div",{className:t.itemFirstRow},r.a.createElement("span",null,"name: ".concat(e.name)),r.a.createElement("button",{type:"button",onClick:function(){return a.deleteMarker(e.id)}},"delete")),r.a.createElement("div",{className:t.itemSecondRow},r.a.createElement("span",null,"lon: ".concat(e.lon)),r.a.createElement("span",null,"lat: ".concat(e.lat))))}))}))),K=a(129),P=a(132),T=a(123),q=a(122),Z=a(95),X=Object(c.b)("view")(Object(y.a)(function(e){return{formControl:{margin:e.spacing(3)}}})(Object(c.c)(function(e){var t=e.classes,a=e.view,n=void 0===a?{currentView:"lon-lat"}:a,l=n.currentView,i=n.updateView;return r.a.createElement("div",null,r.a.createElement(q.a,{component:"fieldset",className:t.formControl},r.a.createElement(Z.a,{component:"legend"},"Add marker by:"),r.a.createElement(P.a,{"aria-label":"gender",name:"gender1",value:l,onChange:function(e){i(e.target.value)},row:!0},r.a.createElement(T.a,{value:"lon-lat",control:r.a.createElement(K.a,null),label:"Lon-Lat"}),r.a.createElement(T.a,{value:"location",control:r.a.createElement(K.a,null),label:"Location search"}),r.a.createElement(T.a,{value:"disabled",disabled:!0,control:r.a.createElement(K.a,null),label:"(Disabled option)"}))))}))),Y=a(124),Q=a(127),U=a(131),$=a(126),_=a(125),ee=a(128),te=Object(Y.a)(U.a)({color:"black",cursor:"pointer"}),ae=Object(Y.a)("form")({display:"flex",flexDirection:"column",width:"80%",minHeight:"100px"}),ne=Object(Y.a)(q.a)({flex:"1 0 auto",maxWidth:"calc(100% - 108px)"}),re=Object(Y.a)(_.a)({minWidth:"108px",marginTop:"16px",minHeight:"36px",maxHeight:"36px"}),le=Object(c.b)("markerAddition")(Object(c.c)(function(e){var t=e.markerAddition;return r.a.createElement(ae,{onSubmit:function(e){e.preventDefault(),t.addMarker()}},r.a.createElement(ne,{error:t.isErrorState},r.a.createElement($.a,{htmlFor:"lon-input"},"Longtitude"),r.a.createElement(te,{id:"lon-input",value:t.lon,onChange:function(e){t.updateLon(e.target.value)},type:"text"}),t.isErrorState?r.a.createElement(Q.a,{id:"component-error-text"},t.errorMessage):null),r.a.createElement(ne,{error:t.isErrorState},r.a.createElement($.a,{htmlFor:"lat-input"},"Latitude"),r.a.createElement(te,{id:"lat-input",value:t.lat,onChange:function(e){t.updateLat(e.target.value)},type:"text"}),t.isErrorState?r.a.createElement(Q.a,{id:"component-error-text"},t.errorMessage):null),r.a.createElement("br",null),r.a.createElement(re,{color:"secondary",type:"submit"},t.postingInProgress?r.a.createElement(ee.a,{size:20}):r.a.createElement(L.a,null,"Add Marker")))})),ie=Object(c.b)("view")(Object(c.c)(function(e){var t=e.view.currentView;return r.a.createElement("div",null,r.a.createElement(X,null),"location"===t?r.a.createElement("span",null,"In construction"):r.a.createElement(le,null))})),ce=Object(c.b)("data")(Object(y.a)(function(){return{markersDash:{width:"35%",color:"black",display:"flex",flexDirection:"column",height:"100%"},markerList:{minHeight:"50%"},markerForm:{minHeight:"50%"}}})(Object(c.c)(function(e){var t=e.classes,a=e.data;return r.a.createElement("div",{className:t.markersDash},r.a.createElement("div",{className:t.markerList},r.a.createElement(J,{data:a})),r.a.createElement("div",{className:t.markerForm},r.a.createElement(ie,null)))}))),oe=Object(c.b)("data")(Object(y.a)(function(e){return{root:{flexGrow:1},paper:{padding:"".concat(e.spacing(2),"px"),margin:"10px auto",maxWidth:1300,height:"80vh",display:"flex",flexDirection:"row",alignItems:"center"},container:{listStyle:"none"}}})(Object(c.c)(function(e){var t=e.classes,a=e.data;return r.a.createElement("div",{className:t.root},r.a.createElement(z.a,{className:t.paper},r.a.createElement(ce,{data:a}),r.a.createElement(W,null)))}))),se=function(e){var t=e.store;return r.a.createElement(o,{store:t},r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,r.a.createElement(I,null,r.a.createElement(B,null,r.a.createElement(S,null)),r.a.createElement(G,null,r.a.createElement(oe,null))))))},me=a(22),ue=a(5),de=function e(t){var a=this;Object(me.a)(this,e),this.currentView="lon-lat",this.updateView=function(e){a.currentView=e},this.appStore=t};Object(ue.h)(de,{currentView:ue.m,updateView:ue.d});var pe=de,he=a(56),be=a(44),fe=a(54),Ee=function(){function e(t){var a=this;Object(me.a)(this,e),this.markers=[{id:0,name:"point-1",lon:32.092446,lat:34.782679},{name:"point-2",lon:29.556066513061523,lat:34.95089340209961},{name:"point-3",lon:31.951799392700195,lat:35.9404182434082}],this.addMarker=function(e){var t,n=e.name,r=e.lon,l=e.lat,i={lon:r,lat:l,id:a.markerIdCounter};a.markerIdCounter+=1,t=n.trim()?Object(be.a)({},i,{name:n}):Object(be.a)({},i,{name:"".concat(r,"-").concat(l)}),a.markers.push(t)},this.deleteMarker=function(e){var t=a.findMarkerIndex(e);a.markers.splice(t,1)},this.findMarkerIndex=function(e){return a.markers.findIndex(function(t){return t.id===e})},this.appStore=t,this.markerIdCounter=0}return Object(fe.a)(e,[{key:"center",get:function(){var e=0,t=0,a=this.markers.length,n=!0,r=!1,l=void 0;try{for(var i,c=this.markers[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var o=i.value;e+=o.lon,t+=o.lat}}catch(s){r=!0,l=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return[e/a,t/a]}},{key:"polyLinesLocation",get:function(){return this.markers.length>0?[].concat(Object(he.a)(this.markers.map(function(e){return[e.lon,e.lat]})),[[this.markers[0].lon,this.markers[0].lat]]):[]}}]),e}();Object(ue.h)(Ee,{markers:ue.m,center:ue.e,polyLinesLocation:ue.e,addMarker:ue.d,deleteMarker:ue.d});var ve=Ee,ge=function e(t){var a=this;Object(me.a)(this,e),this.lon="",this.lat="",this.name="",this.updateLon=function(e){a.lon=e},this.updateLat=function(e){a.lat=e},this.updateName=function(e){a.name=e},this.addMarker=function(){""===a.lon.trim()||""===a.lat.trim()?console.log("missing input"):(a.appStore.data.addMarker({lon:a.lon,lat:a.lat,name:a.name}),a.clearForm())},this.clearForm=function(){a.lon="",a.lat="",a.name=""},this.appStore=t};Object(ue.h)(ge,{lon:ue.m,lat:ue.m,name:ue.m,updateLon:ue.d,updateLat:ue.d,updateName:ue.d,addMarker:ue.d});var ke=ge;Object(ue.f)({enforceActions:"observed"});var we=new function e(){Object(me.a)(this,e),this.view=new pe(this),this.data=new ve(this),this.markerAddition=new ke(this)};i.a.render(r.a.createElement(se,{store:we}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.cb0d6399.chunk.js.map