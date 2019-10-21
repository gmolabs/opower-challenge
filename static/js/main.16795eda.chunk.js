(this["webpackJsonpopower-challenge"]=this["webpackJsonpopower-challenge"]||[]).push([[0],{110:function(e){e.exports=JSON.parse('{"customer":{"id":"A29071","name":"Julia Simpson"},"energyUse":{"currentYear":573,"priorYear":791}}')},171:function(e,a,t){e.exports=t.p+"static/media/car-fill.c07f5df3.svg"},172:function(e,a,t){e.exports=t.p+"static/media/car-outline.7d7be337.svg"},173:function(e,a,t){e.exports=t.p+"static/media/tree-fill.785e703c.svg"},174:function(e,a,t){e.exports=t.p+"static/media/tree-outline.ebc5639c.svg"},224:function(e,a,t){e.exports=t(418)},229:function(e,a,t){},230:function(e,a,t){},418:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),o=t(13),c=t.n(o),i=(t(229),t(230),t(36)),l=t(420),s=t(461),u=t(191),m=t(171),d=t.n(m),h=t(172),p=t.n(h),g=t(173),f=t.n(g),v=t(174),E=t.n(v),y=t(65),b=t.n(y);var Y=function(e,a,t){var r=a-e;return Math.round(100*("cars"===t?r/35:r/210))/100},w=t(451),k=t(450);var N=function(e){var a=e.currentYear,t=e.priorYear,r=e.vizMode,o=Object(k.a)((function(e){return{vizContainer:{padding:20},delayedZoom:{transitionDelay:"100ms"},vizIcon:{width:"20%",padding:10}}}))(),c=Y(a,t,r);return n.a.createElement("div",{className:o.vizContainer},Object(u.a)(Array(Math.abs(Math.round(c)))).map((function(e,a){return n.a.createElement(w.a,{in:!0,key:b.a.v4(),style:{transitionDelay:"".concat(100*(a+1),"ms")}},n.a.createElement("img",{src:"cars"===r?d.a:f.a,className:o.vizIcon,key:a}))})),0===Math.round(c)&&n.a.createElement(w.a,{in:!0,key:b.a.v4(),className:o.delayedZoom},n.a.createElement("img",{src:"cars"===r?p.a:E.a,className:o.vizIcon})))},z=t(110),O=t(457),j=t(458),x=t(456),C=t(111),M=t(462),T=t(463),I=t(464),P=t(466);var S=function(e){var a=e.children,t=e.open,r=e.value,o=n.a.useRef(null);return n.a.useEffect((function(){o.current&&o.current.update()})),n.a.createElement(P.a,{PopperProps:{popperRef:o},open:t,enterTouchDelay:0,placement:"top",title:r},a)},B=t(455),L=t(177),G=t.n(L);var J=function(e){var a=e.priorYear,t=e.currentYear,r=e.setPriorYear,o=e.setCurrentYear,c=Object(k.a)((function(e){return{menuItem:{width:300},menuLabel:{width:120},menuSlider:{marginLeft:20,marginRight:25}}}))(),l=n.a.useState(null),s=Object(i.a)(l,2),u=s[0],m=s[1],d=Boolean(u);return n.a.createElement(n.a.Fragment,null,n.a.createElement(B.a,{"aria-label":"adjust values","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},n.a.createElement(G.a,null)),n.a.createElement(M.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:function(){m(null)}},n.a.createElement(T.a,{className:c.menuItem},n.a.createElement(x.a,{className:c.menuLabel},"Prior Year"),n.a.createElement(I.a,Object(C.a)({ValueLabelComponent:S,"aria-label":"adjust prior year energy use",defaultValue:a,className:c.menuSlider,max:2e3,onChangeCommitted:function(e,a){r(a)}},"defaultValue",a))),n.a.createElement(T.a,{className:c.menuItem},n.a.createElement(x.a,{className:c.menuLabel},"This Year"),n.a.createElement(I.a,Object(C.a)({ValueLabelComponent:S,"aria-label":"adjust current year energy",defaultValue:t,className:c.menuSlider,max:2e3,onChangeCommitted:function(e,a){o(a)}},"defaultValue",t)))))},V=Object(k.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},appBar:{height:64}}}));var q=function(e){var a=e.priorYear,t=e.currentYear,r=e.setPriorYear,o=e.setCurrentYear,c=V();return n.a.createElement(O.a,{color:"primary",position:"static",className:c.appBar},n.a.createElement(j.a,null,n.a.createElement(x.a,{color:"inherit",className:c.title},"Your Energy Savings"),n.a.createElement(J,{priorYear:a,currentYear:t,setPriorYear:r,setCurrentYear:o})))},D=t(465),R=t(459),A=t(178),U=t.n(A),K=t(179),W=t.n(K);var Z=function(e){var a=e.vizMode,t=e.setVizMode,r=Object(k.a)((function(e){return{toggleButtonGroup:{margin:20}}}))();return n.a.createElement(D.a,{className:r.toggleButtonGroup,value:a,exclusive:!0,onChange:function(e,a){a&&t(a)},"aria-label":"viz type"},n.a.createElement(R.a,{value:"cars","aria-label":"cars"},n.a.createElement(U.a,null),n.a.createElement(x.a,null,"Cars")),n.a.createElement(R.a,{value:"trees","aria-label":"trees"},n.a.createElement(W.a,null),n.a.createElement(x.a,null,"Trees")))},F=t(460),$=t(182),H=t.n($),Q=t(180),X=t.n(Q),_=t(181),ee=t.n(_);var ae=function(e){var a=e.priorYear,t=e.currentYear,r=e.vizMode,o=Y(t,a,r),c=Object(k.a)((function(e){return{descriptionIcon:{paddingRight:15,paddingTop:2},descriptionBodyText:{paddingLeft:40,paddingTop:10,paddingBottom:20}}}))();return n.a.createElement(F.a,null,n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.a.createElement(w.a,{in:!0,key:b.a.v4()},o<0&&n.a.createElement(X.a,{className:c.descriptionIcon})||0==o&&n.a.createElement(ee.a,{className:c.descriptionIcon})||o>0&&n.a.createElement(H.a,{className:c.descriptionIcon})),n.a.createElement(x.a,{variant:"h5",gutterBottom:!0},o<0&&"cars"===r&&"Compared to this month last year, you used ".concat(Math.abs(o)," more ").concat(-1===o?"car's":"cars'"," worth of energy.")||o<0&&"trees"===r&&"Compared to this month last year, you used the carbon equivalent of ".concat(Math.abs(o)," ").concat(-1===o?"tree's":"trees'"," more energy.")||0===o&&"You used the same amount of energy as this month last year."||o>0&&"cars"===r&&"Last month, you saved enough energy to take ".concat(o," car").concat(1===o?"":"s"," off the road!")||o>0&&"trees"===r&&"Last month, you saved the energy equivalent of ".concat(o," tree").concat(1===o?"'s":"s'"," worth of carbon!"))),n.a.createElement(x.a,{variant:"body1",className:c.descriptionBodyText},o<0&&"cars"==r&&"You used ".concat(t," kwh last month, \n                        compared to ").concat(a," kwh in the same month last year. \n                        This amount is equal to the energy consumption of  \n                        ").concat(Math.abs(o)," average-size car").concat(1==o?"":"s"," for one month.")||o<0&&"trees"==r&&"You used ".concat(t," kwh last month, \n                        compared to ").concat(a," kwh in the same month last year. \n                        It would take\n                        ").concat(Math.abs(o)," tree").concat(1==o?"":"s"," a month to sequester that amount of carbon.")||0==o&&"You used ".concat(t," kwh last month, \n                        the same amount as the same month last year.")||o>0&&"cars"==r&&"Great Job! You used ".concat(t," kwh last month, \n                        compared to ").concat(a," kwh in the same month last year.\n                        The resulting saving is enough to offset the \n                        energy consumption of ").concat(o," average-size car").concat(1==o?"":"s","\n                        for one month.")||o>0&&"trees"==r&&"Great Job! You used ".concat(t," kwh last month, \n                        compared to ").concat(a," kwh in the same month last year.\n                        The resulting saving is equivalent to the \n                        carbon sequestered by ").concat(o," tree").concat(1==o?"":"s","\n                        in one month.")))},te=t(39);var re=function(e){var a=[{name:"Last year",kwh:e.priorYear},{name:"This year",kwh:e.currentYear}];return n.a.createElement(te.b,{width:300,height:300,data:a,margin:{top:0,right:30,left:20,bottom:5},style:{marginLeft:"auto",marginRight:"auto"}},n.a.createElement(te.c,{strokeDasharray:"3 3"}),n.a.createElement(te.f,{dataKey:"name"}),n.a.createElement(te.g,{domain:[0,2e3]}),n.a.createElement(te.e,null),n.a.createElement(te.d,null),n.a.createElement(te.a,{dataKey:"kwh",fill:"#8884d8"}))};var ne=function(e,a){var t=Object(r.useState)((function(){var t;try{t=JSON.parse(window.localStorage.getItem(e)||String(a))}catch(r){t=a}return t})),n=Object(i.a)(t,2),o=n[0],c=n[1];return Object(r.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[o]),[o,c]};var oe=function(){var e=ne("vizType","cars"),a=Object(i.a)(e,2),t=a[0],r=a[1],o=ne("priorYear",z.energyUse.priorYear),c=Object(i.a)(o,2),u=c[0],m=c[1],d=ne("currentYear",z.energyUse.currentYear),h=Object(i.a)(d,2),p=h[0],g=h[1],f=Object(k.a)((function(e){return{root:{flexGrow:1},bgPaper:{padding:0,margin:0,height:"100vh",width:"100vw",backgroundColor:"#fafafa"},mainGrid:{marginTop:"1rem",width:"100vw"},descriptionPaper:{paddingTop:20,paddingBottom:20},vizPaper:{textAlign:"center"}}}))();return n.a.createElement(l.a,{className:f.bgPaper,elevation:0},n.a.createElement(q,{priorYear:u,currentYear:p,setPriorYear:m,setCurrentYear:g}),n.a.createElement(s.a,{className:f.mainGrid,container:!0,justify:"center",spacing:3},n.a.createElement(s.a,{item:!0,xs:11,md:11,lg:6},n.a.createElement(l.a,{className:f.descriptionPaper},n.a.createElement(ae,{priorYear:u,currentYear:p,vizMode:t}),n.a.createElement(re,{priorYear:u,currentYear:p,vizMode:t}))),n.a.createElement(s.a,{item:!0,xs:11,md:11,lg:5},n.a.createElement(l.a,{className:f.vizPaper},n.a.createElement(Z,{vizMode:t,setVizMode:r}),n.a.createElement(N,{priorYear:u,currentYear:p,vizMode:t})))))};var ce=function(){return n.a.createElement(oe,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[224,1,2]]]);
//# sourceMappingURL=main.16795eda.chunk.js.map