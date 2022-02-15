var f=Object.defineProperty;var v=(a,e,t)=>e in a?f(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var o=(a,e,t)=>(v(a,typeof e!="symbol"?e+"":e,t),t);import{W as g,S as y,P as M,C as L,V as z,A as k,D as b,M as l,B as R,a as m,b as W,c as p}from"./vendor.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))h(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&h(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}};E();class P{constructor(e=1.333){o(this,"aspectRatio");o(this,"fov");o(this,"znear");o(this,"zfar");o(this,"renderer");o(this,"scene");o(this,"camera");o(this,"clock");this.aspectRatio=e,this.fov=60,this.znear=1,this.zfar=1e3,this.renderer=new g,this.renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this.renderer.domElement),this.resize(),window.addEventListener("resize",()=>{this.resize()},!1),window.addEventListener("mousedown",t=>{this.onMouseDown(t)}),window.addEventListener("mouseup",t=>{this.onMouseUp(t)}),window.addEventListener("mousemove",t=>{this.onMouseMove(t)}),window.addEventListener("keydown",t=>{this.onKeyDown(t)}),window.addEventListener("keyup",t=>{this.onKeyUp(t)}),this.scene=new y,this.camera=new M(this.fov,this.aspectRatio,this.znear,this.zfar),this.clock=new L}start(){this.createScene(),this.mainLoop()}mainLoop(){this.update(this.clock.getDelta()),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(()=>this.mainLoop())}resize(){this.renderer.setSize(window.innerWidth,window.innerHeight);var e=new z;this.renderer.getViewport(e);var t=window.innerWidth/window.innerHeight;this.aspectRatio>t?this.renderer.setViewport(0,(window.innerHeight-window.innerWidth/this.aspectRatio)/2,window.innerWidth,window.innerWidth/this.aspectRatio):this.renderer.setViewport((window.innerWidth-window.innerHeight*this.aspectRatio)/2,0,window.innerHeight*this.aspectRatio,window.innerHeight)}onMouseDown(e){}onMouseUp(e){}onMouseMove(e){}onKeyDown(e){}onKeyUp(e){}}class S extends P{constructor(){super(1920/1080)}createScene(){this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.camera.up.set(0,1,0);var e=new k("white",.3);this.scene.add(e);var t=new b("white",.6);t.position.set(0,2,1),this.scene.add(t);var h=new l;h.side=R,h.color.set("skyblue");var i=new m(new W(1e3,1e3,1e3),h);this.scene.add(i);var n=[],s=[];const d=45*Math.PI/180;for(let r=0;r<=4*Math.PI;r+=d*2){n.push(new p(Math.cos(r),1,Math.sin(r))),n.push(new p(Math.cos(r),0,Math.sin(r))),n.push(new p(Math.cos(r+d),1,Math.sin(r+d))),n.push(new p(Math.cos(r+d),0,Math.sin(r+d)));var c=r/d;s.push(c),s.push(c+1),s.push(c+2),s.push(c+1),s.push(c+3),s.push(c+2)}var w=new m;w.geometry.setFromPoints(n),w.geometry.setIndex(s);{var u=new l;u.wireframe=!0,w.material=u}this.scene.add(w)}update(e){}}var A=new S;A.start();
