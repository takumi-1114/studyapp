// Cache only same-origin app shell. Remote PDF resources are not cached.
const CACHE = 'studyapp-shell-v1';
const SHELL = ['./', './index.html', './style.css', './script.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('studyapp-shell-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok && response.type === 'basic') {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match(request).then(cached => cached || (request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
