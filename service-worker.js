const CACHE_NAME = 'my-cache-v1';

const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/css/bootstrap.min.css',
  '/js/bootstrap.bundle.min.js',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/download.jpg',
  '/img/s1.png',
  '/img/s2.jpg',
  '/img/s3.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache abierta.');
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Evento de activación
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Desapilando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento de captura de solicitudes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

// Evento de push
self.addEventListener('push', (event) => {
  let data = {};

  if (event.data) {
    data = event.data.json();
  } else {
    data = { title: 'Notificación', body: '¡Nueva notificación!' };
  }

  const options = {
    body: data.body,
    icon: 'imagen_icono.png',
    badge: 'imagen_icono.png',
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Evento de clic en notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      const alreadyOpen = clientList.some((client) => {
        return client.url === '/' && 'focus' in client;
      });

      if (alreadyOpen) {
        return clients.focus();
      } else {
        return clients.openWindow('/');
      }
    })
  );
});