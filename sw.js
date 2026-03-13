
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('lm-hefe-v4').then((cache)=>cache.addAll([
    './',
    './index.html',
    './manifest.webmanifest',
    './sw.js',
    './icons/bread-512.png',
    './icons/bread-192.png',
    './icons/bread-180.png',
    './icons/bread-144.png',
    './icons/bread-96.png',
    './icons/bread-32.png',
    './icons/apple-touch-icon.png'
  ])));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then((resp)=> resp || fetch(e.request)));
});
