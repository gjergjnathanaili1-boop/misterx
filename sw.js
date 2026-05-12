const CACHE_NAME = 'misterx-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/hero.jpg',
  '/zamna.jpg',
  '/blackcoffee.jpg',
  '/sundance.jpg',
  '/ye.jpg',
  '/unum.jpg',
  '/MarsEcho-Hana (1) (1).mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
