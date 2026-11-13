// Offline support: the app itself and its fonts are cached; food-database searches always go to the network.
const CACHE="rep-ledger-v18";
const SHELL=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png","vendor/html5-qrcode.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  const mine=u.origin===self.location.origin||u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com";
  if(!mine)return;
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(e.request,{ignoreSearch:true});
    // the app page itself: try the network first so updates show on the next open; fall back to the saved copy offline
    if(e.request.mode==="navigate"||u.pathname.endsWith("/")||u.pathname.endsWith("index.html")){
      try{const r=await fetch(e.request,{cache:"no-store"});if(r&&r.ok){c.put(e.request,r.clone());return r;}}catch(err){}
      return hit||fetch(e.request);}
    const net=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==="opaque"))c.put(e.request,r.clone());return r;}).catch(()=>hit);
    return hit||net;
  }));
});
