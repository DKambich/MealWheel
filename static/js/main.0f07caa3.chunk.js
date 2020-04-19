(this.webpackJsonpmealwheel=this.webpackJsonpmealwheel||[]).push([[0],{49:function(e,n,t){e.exports=t(62)},62:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),l=t(13),r=t.n(l),o=t(35),s=t(70),c=t(69);function u(){return i.a.createElement(s.a,{bg:"primary",variant:"dark",expand:"lg"},i.a.createElement(s.a.Brand,{href:"#home"},"MealWheel"),i.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(c.a,{className:"mr-auto"},i.a.createElement(c.a.Link,{href:"#home"},"Home"),i.a.createElement(c.a.Link,{href:"#link"},"Link"))))}var h=t(65),d=t(67),m=t(66),w=t(68),p=t(64);function f(e){return i.a.createElement(w.a,{show:e.show,size:"lg",onHide:e.onHide,"aria-labelledby":"contained-modal-title-vcenter",centered:!0},i.a.createElement(w.a.Header,{closeButton:!0,onHide:e.onHide},i.a.createElement(w.a.Title,{id:"contained-modal-title-vcenter"},"Modal heading")),i.a.createElement(w.a.Body,null,e.winner?e.winner.toString():""),i.a.createElement(w.a.Footer,null,i.a.createElement(p.a,{onClick:e.onHide},"Close")))}var v=t(42),E=t(43),g=t(48),b=t(47),S=function(e){Object(g.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(v.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=n.call.apply(n,[this].concat(i))).state={wheel:null,spinning:!1,width:500,height:500},e.onSpinEnd=function(n){e.props.onSpinEnd&&e.props.onSpinEnd(n),e.resetWheel(),e.drawColourTriangle()},e.spinWheel=function(){var n=e.state.wheel;n.animation.spins=8+1*Math.random(),e.setState({wheel:n,spinning:!0},(function(){return e.state.wheel.startAnimation()}))},e.resetWheel=function(){e.state.wheel.stopAnimation(!1);var n=e.state.wheel;n.rotationAngle=n.rotationAngle%360,e.setState({wheel:n,spinning:!1},(function(){e.state.wheel.draw(),e.drawColourTriangle()}))},e.drawColourTriangle=function(){var n=e.state.wheel.ctx;n.strokeStyle="navy",n.fillStyle="aqua",n.lineWidth=2;var t=n.canvas.width/2,a=.05*n.canvas.height;n.beginPath(),n.moveTo(t-a,1),n.lineTo(t+a,1),n.lineTo(t,a),n.lineTo(t-a,1),n.stroke(),n.fill()},e.updateWindowDimensions=function(){var n=Math.min(window.innerWidth,window.innerHeight,500);e.setState({width:n,height:n},(function(){e.state.wheel&&setTimeout((function(){e.state.wheel.draw(),e.drawColourTriangle()}),1)}))},e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this,n=this.props.segments;this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),null==this.state.wheel&&this.setState({wheel:new window.Winwheel({canvasId:"wheelCanvas",responsive:!0,drawText:!0,numSegments:n.length,segments:n,animation:{type:"spinToStop",callbackFinished:this.onSpinEnd,callbackAfter:this.drawColourTriangle}})},(function(){e.state.wheel.draw(),setTimeout(e.drawColourTriangle,1)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement("div",{className:"d-flex p-4 justify-content-center"},i.a.createElement("canvas",{id:"wheelCanvas",width:this.state.width,height:this.state.height})),i.a.createElement(d.a,{className:"justify-content-around"},i.a.createElement(p.a,{disabled:this.state.spinning,onClick:this.spinWheel},"Spin Me"))))}}]),t}(a.Component);function y(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function k(){var e,n=i.a.useState(!1),t=Object(o.a)(n,2),a=t[0],l=t[1],r=i.a.useState(null),s=Object(o.a)(r,2),c=s[0],w=s[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,null),i.a.createElement(h.a,{fluid:!0},i.a.createElement(d.a,null,i.a.createElement(m.a,null,i.a.createElement(S,{segments:(e=5,new Array(e).fill(0).map((function(n,t){return{fillStyle:y(),text:"".concat(t),textOrientation:e>6?"horizontal":"curved"}}))),onSpinEnd:function(e){l(!0),w(e)}})),i.a.createElement(f,{show:a,onHide:function(){return l(!1)},winner:c}))))}var T=t(44),W=t(18);function C(){return i.a.createElement("div",null,"Hello World")}var H=function(){return i.a.createElement(T.a,null,i.a.createElement(W.c,null,i.a.createElement(W.a,{exact:!0,path:"/MealWheel/",component:k}),i.a.createElement(W.a,{path:"/MealWheel/dinein",component:C})))};t(61);r.a.render(i.a.createElement(H,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.0f07caa3.chunk.js.map