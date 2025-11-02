// sw.js
const CACHE_NAME = 'time-table-cache-v1';

// 需要缓存的文件列表，请根据您的实际路径进行调整
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/style.css',
    '/script.js',
    // 确保图标文件也在缓存列表中，路径与 HTML/Manifest 中的一致
    '/docs/icons/ios/180.png',
    '/docs/icons/android/android-launchericon-192-192.png'
    // ... 添加其他重要的资产
];

// 监听安装事件
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// 监听获取（fetch）事件，用于返回缓存的资源
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // 如果缓存中有，则返回缓存的资源
                if (response) {
                    return response;
                }
                // 否则，从网络获取
                return fetch(event.request);
            })
    );
});

// 监听激活事件，用于清理旧缓存
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});