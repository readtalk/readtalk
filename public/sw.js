self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('readtalk-v1').then((cache) => {
      return cache.addAll([
        './',           // index.html
        './index.html',
        './log.html',
        './manifest.json'
        // path 192.png, 512.png
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // file cache network
      return response || fetch(event.request);
    })
  );
});
