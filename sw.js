self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('lm-hefe-v1').then((cache)=>cache.addAll([
    '/', '/index.html', '/manifest.webmanifest',
    '/icons/bread-512.png','/icons/bread-192.png','/icons/bread-180.png','/icons/bread-144.png','/icons/bread-96.png','/icons/bread-32.png'
  ])));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then((resp)=> resp || fetch(e.request)));
});