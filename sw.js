if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const o=e=>r(e,c),n={module:{uri:c},exports:a,require:o};i[c]=Promise.all(d.map((e=>n[e]||o(e)))).then((e=>(s(...e),a)))}}define(["./workbox-033d1d62"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/bootstrap.min.css",revision:"abe91756d18b7cd60871a2f47c1e8192"},{url:"css/loginStyles.css",revision:"9fe85afbd8db3e2ed9cd9fd7afee1773"},{url:"db.php",revision:"a67d831e01e120ed36272b659a23e10d"},{url:"img/1.jpg",revision:"24cbb19e90ba5c70fd59a85213fd0fbe"},{url:"img/2.jpg",revision:"92ac243f5b2686a6fee3cf1a83830627"},{url:"img/3.jpg",revision:"33492aabefade508e606eff058eb1b94"},{url:"img/4.jpg",revision:"6d99a21a20c611c73cfda44dd8c541d4"},{url:"img/5.jpg",revision:"931a8dbc47da64c69195b384ace3a982"},{url:"img/6.jpg",revision:"b7a02a04440c375786ae2736d7a0572e"},{url:"img/7.jpg",revision:"e57d82fb74b3bd15adecd28e493dbb04"},{url:"img/8.jpg",revision:"d05b6f6eb0acf174137a3e3a2bdf8f16"},{url:"img/download.jpg",revision:"44c841495d00cf2845e4a5fc1b196b77"},{url:"img/s1.jpg",revision:"0e8732d7694ad94a1f6b4522c1c50ad8"},{url:"img/s2.jpg",revision:"40f935c8d1e6a9bf4563e33c39579a96"},{url:"img/s3.jpg",revision:"49de5eb4f547ad2ed773471faad681fb"},{url:"index.php",revision:"7e0f01e21c8ac987b353e5fb4cb838a6"},{url:"inicio.php",revision:"8b8cc75977bb18a6b07756bd99d3625c"},{url:"js/bootstrap.bundle.min.js",revision:"0aa8d64e726c4a57adb5c88f9115996b"},{url:"login.php",revision:"99e4fe39a5a483b4ec0c6c6c258ee46c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
