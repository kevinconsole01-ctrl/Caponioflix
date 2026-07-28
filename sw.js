// Service worker minimo: la sua sola presenza soddisfa il requisito di "installabilità"
// richiesto da Chrome/Android per aprire il sito come app (senza barra indirizzi).
// Non fa caching aggressivo: lascia passare tutte le richieste alla rete normalmente.

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
