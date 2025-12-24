self.addEventListener('install', e => e.waitUntil(caches.open('readtalk').then(cache => 
  cache.addAll(['./', './index.html', './log.html'])
)));
self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(response => response || fetch(e.request))
));
self.addEventListener('fetch', event => {});
