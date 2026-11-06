import{F as e,K as t,N as n,R as r,c as i,d as a,f as o,jt as s,l as c,r as l,rt as u}from"./aqzM9I0f.js";var d=200,f=.1,p=.3,m=.5,h={props:{particleCount:{type:Number,default:150},particleSize:{type:Number,default:12},duration:{type:Number,default:3500},colors:{type:Array,default:[`#FFC700`,`#FF0000`,`#2E3191`,`#41BBC7`]},force:{type:Number,default:.5},stageHeight:{type:Number,default:800},stageWidth:{type:Number,default:1600},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(e){let r=u(!0),a=(e,t)=>{E(e,{degree:t})},o=i(()=>c(e.particleCount,e.colors));t(()=>{e.particleCount>300&&console.log(`[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device 😉`)});let s=i(()=>T(e.particleCount,e.duration,e.colors,e.particleSize,e.force,e.stageHeight,e.stageWidth));n(async()=>{await l(e.duration),e.shouldDestroyAfterDone&&(r.value=!1)});let c=(e,t)=>{let n=360/e;return Array.from({length:e},(e,r)=>({color:t[r%t.length],degree:r*n}))},l=e=>new Promise(t=>setTimeout(t,e));function h(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((e+2**-52)*10**t)/10**t}function g(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}let _=(e,t,n,r,i)=>(e-t)*(i-r)/(n-t)+r,v=(e,t)=>{let n=e+t;return n>360?n-360:n},y=()=>Math.random()>.5,b=[0,0,1],x=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],b],S=e=>!g(x[e],b)&&y(),C=e=>e===void 0,w=e=>{console.error(e)};function T(e,t,n,r,i,a,o){let s=Number.isSafeInteger;return!C(e)&&s(e)&&e<0?(w(`particleCount must be a positive integer`),!1):!C(t)&&s(t)&&t<0?(w(`duration must be a positive integer`),!1):!C(n)&&!Array.isArray(n)?(w(`colors must be an array of strings`),!1):!C(r)&&s(r)&&r<0?(w(`particleSize must be a positive integer`),!1):!C(i)&&s(i)&&(i<0||i>1)?(w(`force must be a positive integer and should be within 0 and 1`),!1):!C(a)&&typeof a==`number`&&s(a)&&a<0?(w(`floorHeight must be a positive integer`),!1):!C(o)&&typeof o==`number`&&s(o)&&o<0?(w(`floorWidth must be a positive integer`),!1):!0}function E(t,n){let{degree:r}=n,i=_(Math.abs(v(r,90)-180),0,180,-e.stageWidth/2,e.stageWidth/2),a=Math.random()*600+d,o=Math.round(Math.random()*(x.length-1)),s=e.duration-Math.round(Math.random()*1e3),c=Math.random()<f,l=S(o),u=c?h(Math.random()*p,2):0,g=u*-1,b=u,C=h(Math.abs(_(Math.abs(v(r,90)-180),0,180,-1,1)),4),w=h(Math.random()*m,4),T=h(Math.random()*e.force*(y()?1:-1),4),E=m,D=h(Math.max(_(Math.abs(r-180),0,180,e.force,-e.force),0),4),O=(e,n)=>t?.style.setProperty(e,n+``);O(`--x-landing-point`,`${i}px`),O(`--duration-chaos`,`${s}ms`),O(`--x1`,`${u}`),O(`--x2`,`${g}`),O(`--x3`,`${b}`),O(`--x4`,`${C}`),O(`--y1`,`${w}`),O(`--y2`,`${T}`),O(`--y3`,`${E}`),O(`--y4`,`${D}`),O(`--width`,`${l?e.particleSize:Math.round(Math.random()*4)+e.particleSize/2}px`),O(`--height`,(l?e.particleSize:Math.round(Math.random()*2)+e.particleSize)+`px`),O(`--rotation`,`${x[o].join()}`),O(`--rotation-duration`,`${a}ms`),O(`--border-radius`,`${l?`50%`:`0`}`)}return{isVisible:r,isValid:s,stageHeight:e.stageHeight,particles:o,setItemRef:a}}};function g(t,n,i,u,d,f){return u.isVisible&&u.isValid?(e(),o(`div`,{key:0,class:`confetti-container`,style:s(`--floor-height: ${u.stageHeight}px;`)},[(e(!0),o(l,null,r(u.particles,t=>{let{color:n,degree:r}=t;return e(),o(`div`,{key:r,class:`particle`,ref:e=>u.setItemRef(e,r)},[c(`div`,{style:s(`--bgcolor: ${n};`)},null,4)],512)}),128))],4)):a(``,!0)}function _(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}_(`
@keyframes y-axis-4ff796ae {
to {
    transform: translate3d(0, var(--floor-height), 0);
}
}
@keyframes x-axis-4ff796ae {
to {
    transform: translate3d(var(--x-landing-point), 0, 0);
}
}
@keyframes rotation-4ff796ae {
to {
    transform: rotate3d(var(--rotation), 360deg);
}
}
.confetti-container[data-v-4ff796ae] {
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  z-index: 1200;
}
.confetti-container > .particle[data-v-4ff796ae] {
  animation: x-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--x1), var(--x2), var(--x3), var(--x4));
}
.confetti-container > .particle div[data-v-4ff796ae] {
  position: absolute;
  top: 0;
  left: 0;
  animation: y-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--y1), var(--y2), var(--y3), var(--y4));
  width: var(--width);
  height: var(--height);
}
.confetti-container > .particle div[data-v-4ff796ae]:before {
  display: block;
  height: 100%;
  width: 100%;
  content: "";
  background-color: var(--bgcolor);
  animation: rotation-4ff796ae var(--rotation-duration) infinite linear;
  border-radius: var(--border-radius);
}
`),h.render=g,h.__scopeId=`data-v-4ff796ae`;var v=(()=>{let e=h;return e.install=t=>{t.component(`ConfettiExplosion`,e)},e})();export{v as default};