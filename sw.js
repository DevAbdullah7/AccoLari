const cacheName = 'AccoLari-v0.3'
const assets = [
    '/',
    '/index.html',
    '/assets/css/main.css',
    '/assets/css/responsive.css',
    '/assets/js/main.js',
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets).then(() => {
                console.log('caching done !')
            }).catch()
        }).catch(err => {}),
        caches.keys().then(keys => {
            Promise.all(
                keys.filter(key => key != cacheName).map(key => caches.delete(key))
            )
        })
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key != cacheName).map(key => caches.delete(key))
            )
        })
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return res || fetch(event.request).then(res => {
                return res
            }, err => {
                // Network Failure
            })
        })
    )
})