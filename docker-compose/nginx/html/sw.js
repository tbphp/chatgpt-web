if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const d=e=>i(e,l),o={module:{uri:l},exports:t,require:d};s[l]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-2a3a8d15.js",revision:null},{url:"assets/index-64ee634b.css",revision:null},{url:"assets/index-746d99d1.js",revision:null},{url:"assets/index-86426870.js",revision:null},{url:"assets/index-9a68dbf4.css",revision:null},{url:"assets/index-bc7a2eee.js",revision:null},{url:"assets/index-cf1a59e5.js",revision:null},{url:"index.html",revision:"9260d090d58af41a8dc39fda8f34ad95"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"pwa-192x192.png",revision:"e8edb535529201a3b8a82f2fe3b07b09"},{url:"pwa-512x512.png",revision:"2a5ea0072f596f4b1006b3943aac2a9e"},{url:"manifest.webmanifest",revision:"8a6b785bac1ef66f075d8ad3d022e306"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
