self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('horarios').then(cache =>
      cache.addAll(['./','./index.html','./manifest.json'])
    )
  );
});
