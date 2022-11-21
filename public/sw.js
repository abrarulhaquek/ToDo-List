const staticcache = "cache-v4";
const assets = ["/", "./index.html"];

self.addEventListener("install", (e) => {
  // console.log('installed')
  e.waitUntil(
    caches.open(staticcache).then((c) => {
      c.addAll(assets);
    })
  );
});

self.addEventListener("activate", (e) => {
  // console.log('activated')
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticcache)
          .map((key) => caches.delete(key))
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  // console.log('fetched')
  e.respondWith(
    caches.match(e.request).then((cr) => {
      return fetch(e.request);
    })
  );
});
