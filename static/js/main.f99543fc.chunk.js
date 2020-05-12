(this.webpackJsonpmealwheel=this.webpackJsonpmealwheel||[]).push([[0],{47:function(e){e.exports=JSON.parse('[{"name":"Chick-Fil-A","type":"take_out","cuisine":"sandwich","bgColor":"#E2163D","fontColor":"#FFFFFF","logo":"./logos/chick_fil_a_512.png","location":"50 N Creasy Ln, Lafayette, IN 47905"},{"name":"Happy China","type":"take_out","cuisine":"chinese","bgColor":"#D1C150","fontColor":"#FEFDE7","logo":"./logos/happy_china_512.png","location":"219 E State St, West Lafayette, IN 47906"},{"name":"Wendy\'s","type":"take_out","cuisine":"sandwich","bgColor":"#FFFFFF","fontColor":"#D22030","logo":"./logos/wendys_512.png","location":"252 E State St, West Lafayette, IN 47906"},{"name":"Chipotle","type":"take_out","cuisine":"mexican","bgColor":"#A81612","fontColor":"#FFFFFF","logo":"./logos/chipotle_512.png","location":"200 W State St, West Lafayette, IN 47906"},{"name":"Dog n Suds","type":"take_out","cuisine":"sandwich","bgColor":"#F6EB16","fontColor":"#ED1C24","logo":"./logos/dogs_n_suds_512.png","location":"401 Sagamore Pkwy W, West Lafayette, IN 47906"},{"name":"Noodles & Company","type":"take_out","cuisine":"pasta","bgColor":"#C42232","fontColor":"#FCFCFB","logo":"./logos/noodles_&_company_512.png","location":"102 N Chauncey Ave, West Lafayette, IN 47906"}]')},59:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(13),r=a.n(l),i=a(75),s=a(49),c=a(76),m=a(83),u=a(25),h=a(27),d=a(34),p=a(47),g="home",w="carryout",E="dinein";function f(e){return p.filter((function(t){return!e||t.type===e})).map((function(e){return{fillStyle:e.bgColor,text:e.name,textFillStyle:e.fontColor,textFontSize:(t=e.name,t.length<10?22:t.length<15?20:t.length<20?18:16),lineWidth:2,textOrientation:"horizontal",data:e};var t}))}window.Winwheel=window.Winwheel||{};var y=new window.Winwheel({canvasId:"dummyCanvas",numSegments:0}),v={name:"",type:"",cuisine:"",bgColor:"",fontColor:"",logo:"",location:""};function C(e){return o.a.createElement(i.a,{bg:"primary",variant:"dark",expand:"lg"},o.a.createElement(u.LinkContainer,{to:"home"},o.a.createElement(s.a,null,o.a.createElement(c.a,{src:"./logo.png",width:32,height:32,className:"align-top mr-2",alt:"Meal Wheel logo"}),"Meal Wheel")),o.a.createElement(h.a,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(d.a,{id:"basic-navbar-nav"},o.a.createElement(m.a,{className:"mr-auto"},o.a.createElement(u.LinkContainer,{to:g},o.a.createElement(m.a.Link,{active:e.activeTab===g},"Home")),o.a.createElement(u.LinkContainer,{to:E},o.a.createElement(m.a.Link,{active:e.activeTab===E},"Dine In")),o.a.createElement(u.LinkContainer,{to:w},o.a.createElement(m.a.Link,{active:e.activeTab===w},"Carry Out")))))}var b=a(77),S=a(78);function W(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{activeTab:g}),o.a.createElement(b.a,null,o.a.createElement(S.a,{className:"my-4"},o.a.createElement("h1",{className:"display-4"},"Welcome to Meal Wheel!"),o.a.createElement("p",{className:"lead"},"Ever have disagreements about where to eat or just simply can't decide what sounds good? Then Meal Wheel is the site for you. Meal Wheel compiles some of Lafayette's and West Lafayette's best restaurants. Meal Wheel also partitions the restaurants by cuisine, allowing for finer control of options. As of now, Meal Wheel only supports restaurants in our immeadiate vicininty in Indiana."),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("p",null,"Note that this site is just a fun side project. It is not intended to promote any restaurants included, just a compilation of some of our favorites."))))}var F=a(26),k=a(18),N=a(22),T=a(52),_=a(53),L=a(57),j=a(56),M=a(79),O=a(80),A=a(81),I=function(e){Object(L.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={spinning:!1,wheel:y},e.onSpinEnd=function(t){var a;e.props.onSpinEnd&&e.props.onSpinEnd(t),e.resetWheel(),null===(a=e.state.wheel)||void 0===a||a.draw(),e.drawColourTriangle()},e.spinWheel=function(){var t=e.state.wheel;t.animation.spins=8+1*Math.random(),e.setState({wheel:t,spinning:!0},(function(){return e.state.wheel.startAnimation()}))},e.resetWheel=function(){e.state.wheel.stopAnimation(!1);var t=e.state.wheel;t.rotationAngle=t.rotationAngle%360,e.setState({wheel:t,spinning:!1},(function(){e.state.wheel.draw(),e.drawColourTriangle()}))},e.drawColourTriangle=function(){var t=e.state.wheel.canvas.getContext("2d"),a=e.state.wheel.scaleFactor;t.strokeStyle="black",t.fillStyle="red",t.lineWidth=3;var n=t.canvas.width/2,o=.05*t.canvas.height/2;t.beginPath(),t.moveTo(n-o*a*.25,1),t.lineTo(n+o*a*.25,1),t.lineTo(n,o*a),t.lineTo(n-o*a*.25,1),t.stroke(),t.fill()},e}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new window.Winwheel({canvasId:"wheelCanvas",responsive:!0,drawText:!0,numSegments:this.props.segments.length,segments:this.props.segments,pins:!0,animation:{type:"spinToStop",callbackFinished:this.onSpinEnd,callbackAfter:this.drawColourTriangle},clearTheCanvas:!1});this.setState({wheel:t},(function(){e.state.wheel.draw(),setTimeout(e.drawColourTriangle,1)}))}},{key:"componentWillUnmount",value:function(){this.state.wheel.stopAnimation(!1)}},{key:"render",value:function(){this.state.wheel&&this.drawColourTriangle();var e=Math.min(.98*window.innerWidth,window.innerHeight,500);return o.a.createElement(M.a,null,o.a.createElement(O.a,{className:"justify-content-center py-4",noGutters:!0},o.a.createElement("canvas",{id:"wheelCanvas","data-responsiveScaleHeight":"true",width:e,height:e})),o.a.createElement(O.a,{className:"justify-content-around"},o.a.createElement(A.a,{disabled:this.state.spinning,onClick:this.spinWheel},"Spin Me")))}}]),a}(n.Component),D=a(82),x=a(58),H=a(55),B=a(35);function z(e){var t=e.onHide,a=e.show,n=e.winner;if(!n)return null;var l="travelmode=driving&destination=".concat(n.location.replace(" ","+").replace(",","%2C"));return o.a.createElement(D.a,{show:a,size:"lg",onHide:t,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},o.a.createElement(B.a,{closeButton:!0,onHide:t},o.a.createElement(x.a,{id:"contained-modal-title-vcenter"},n.name," was Picked!")),o.a.createElement(H.a,null,o.a.createElement(b.a,null,o.a.createElement(M.a,{className:"justify-content-end text-center"},o.a.createElement(c.a,{src:n.logo,width:256,height:256,rounded:!0,className:"img-fluid img-thumbnail"}),o.a.createElement("h1",{className:"py-4"},n.name),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/dir/?api=1&"+l},o.a.createElement(A.a,null,"Get Directions"))))))}function J(){var e=o.a.useState(!1),t=Object(N.a)(e,2),a=t[0],n=t[1],l=o.a.useState(v),r=Object(N.a)(l,2),i=r[0],s=r[1],c=f("dine_in");return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{activeTab:E}),c.length>0&&o.a.createElement(I,{segments:c,onSpinEnd:function(e){s(e.data),n(!0)}}),0===c.length&&o.a.createElement(b.a,null,o.a.createElement(S.a,{className:"my-4"},o.a.createElement("h1",{className:"display-4"},"Oops No Data Available!"),o.a.createElement("p",{className:"lead"},"Sorry no data on Dine In restaurants has been collected yet. Try again later!"))),o.a.createElement(z,{show:a,onHide:function(){return n(!1)},winner:i}))}function P(){var e=o.a.useState(!1),t=Object(N.a)(e,2),a=t[0],n=t[1],l=o.a.useState(v),r=Object(N.a)(l,2),i=r[0],s=r[1],c=f("take_out");return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{activeTab:w}),c.length>0&&o.a.createElement(I,{segments:c,onSpinEnd:function(e){s(e.data),n(!0)}}),0===c.length&&o.a.createElement(b.a,null,o.a.createElement(S.a,{className:"my-4"},o.a.createElement("h1",{className:"display-4"},"Oops No Data Available!"),o.a.createElement("p",{className:"lead"},"Sorry no data on Carry Out restaurants has been collected yet. Try again later!"))),o.a.createElement(z,{show:a,onHide:function(){return n(!1)},winner:i}))}var G=function(){return o.a.createElement(F.BrowserRouter,null,o.a.createElement(k.g,null,o.a.createElement(k.d,{path:"/MealWheel/".concat(g),component:W}),o.a.createElement(k.d,{path:"/MealWheel/".concat(E),component:J}),o.a.createElement(k.d,{path:"/MealWheel/".concat(w),component:P}),o.a.createElement(k.c,{from:"/",to:"/MealWheel/".concat(g)})))};a(72);r.a.render(o.a.createElement(G,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.f99543fc.chunk.js.map