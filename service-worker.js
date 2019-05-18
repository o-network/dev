importScripts('/service-worker-cache-polyfill.js');

self.addEventListener('install', function(event) {
 event.waitUntil(
   caches.open('open-network').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/manifest.json',
       '/index.js',
       '/instant.page.js',
       '//instant.page/1.2.2',
       '/styles.css',
     ]);
   })
 );
});