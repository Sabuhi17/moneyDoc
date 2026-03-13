const CACHE = 'moneydoc-v1';
const FILES = [
  '/moneyDoc/',
  '/moneyDoc/index.html',
  '/moneyDoc/manifest.json',
  '/moneyDoc/icon-192.png',
  '/moneyDoc/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
