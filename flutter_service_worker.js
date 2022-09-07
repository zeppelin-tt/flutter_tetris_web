'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "532dd14fd974ca6508801e2c2ed64260",
"assets/assets/sounds/01_terran_advisor.wav": "39b2c09f12dd8df80656970e6da1da9e",
"assets/assets/sounds/02_scv.wav": "dad32625d3712026a402a5ccf4101315",
"assets/assets/sounds/03_marine.wav": "1fc804770517a3ec7a3151d2a45cb14a",
"assets/assets/sounds/04_firebat.wav": "7b38bff2fd589a80c1a4c538abd50142",
"assets/assets/sounds/05_medic.wav": "45ceba9bc61b78324be4cadfa467a33e",
"assets/assets/sounds/06_ghost.wav": "9e93830ee53cd7185f997c078814850a",
"assets/assets/sounds/07_vulture.wav": "1ed2ca0c6feb3bfa9a52e51231f91bc9",
"assets/assets/sounds/08_dropship.wav": "f9dcf10dd55d546889101c8a0d6bb76d",
"assets/assets/sounds/09_wraith.wav": "daee006701e544d2aec16b25c180a3d6",
"assets/assets/sounds/10_tank.wav": "a1dfd2680ee4f6cdf59914f7a1cb7a09",
"assets/assets/sounds/11_goliath.wav": "27b29ebab5361cfe3b4ba1594aad17ea",
"assets/assets/sounds/12_science_vessel.wav": "a35f76ee7a0a5f5a770a67729ed7313c",
"assets/assets/sounds/13_valkyrie.wav": "0a7eeb6cd1ff4025cb155777dfe8ef41",
"assets/assets/sounds/14_battlecruiser.wav": "b1a165709dea01e9939f9a04049b1ab4",
"assets/assets/sounds/15_raynor.wav": "e1d4cf870b8e3f61c7c5e65fcbf501c5",
"assets/assets/sounds/16_sarah_kerrigan.wav": "3a46fed2853b903e5a7d1673557a7fa7",
"assets/assets/sounds/17_edmund_duke.wav": "cbb0448ef2a7deaba9ecf8dc81d1f032",
"assets/assets/sounds/18_samir_duran.wav": "7936af58062285d1d4cace48766e7a97",
"assets/assets/sounds/19_tassadar.wav": "68433ece413467acf54f5a489c2e83f8",
"assets/assets/sounds/20_artanis.wav": "1176f77d4d51ce30c1c44a04ccca7291",
"assets/assets/sounds/21_infested_terran.wav": "26a3a3fc0b521a9b6b24c45f94ebe0a5",
"assets/assets/sounds/22_infested_terran.wav": "55daf22828d488c193f47a39ecde2d6d",
"assets/assets/sounds/23_infested_kerrigan.wav": "23eac1544bfdb00e56b49e81973f55e4",
"assets/assets/sounds/24_ultralisk.wav": "197c40179f0c4a2eebc9ef41f229ea3c",
"assets/assets/sounds/25_defiler.wav": "3cc58511f70e93ef13f3c9fe9b13ef10",
"assets/assets/sounds/26_broodling.wav": "49ab8342925f5892914dccebc86604bb",
"assets/assets/sounds/27_queen.wav": "6832cbb35751e0d1fc600d96c62ca210",
"assets/assets/sounds/28_zerg_abvisor.wav": "b0d13607f6e5c96a6950d215e5203eab",
"assets/assets/sounds/29_terran_abvisor.wav": "9fa0d838b3d6084da4e230a30950dd76",
"assets/assets/sounds/30_protoss_abvisor.wav": "1503913f12d8cf66660ce363f1f3c086",
"assets/assets/sounds/31_zealot.wav": "6b97bdba96123c73d3764cf3d0570358",
"assets/assets/sounds/32_dragoon.wav": "6518480c871ce48ea1e5cf309d37f739",
"assets/assets/sounds/33_dark_templar.wav": "d28200970816f009648e66322a35767a",
"assets/assets/sounds/34_dark_archon.wav": "630d964c5a87533ef2dc36d89f19378a",
"assets/assets/sounds/35_scout.wav": "915d4da817bf929b4049fd00b0dfbbc2",
"assets/assets/sounds/36_corsair.wav": "6ee84066988ef91a178f8b2e5fee0452",
"assets/assets/sounds/37_arbiter.wav": "fcb832d5b6880456fdb0272ada869dd6",
"assets/assets/sounds/38_carrier.wav": "bb41db687fba284e8a402a7a8b02de2d",
"assets/assets/sounds/burn_1.wav": "b4b3c935b8f3eabfc56469d222c1943f",
"assets/assets/sounds/burn_2.wav": "991823f0d336172738417e3a92dfc5db",
"assets/assets/sounds/burn_3.wav": "cbacbb96aa6c79d343f31fafb317292f",
"assets/assets/sounds/burn_4.wav": "c4becb12499e521cf61c7e90c81af053",
"assets/assets/sounds/game_over.wav": "9b6d66a3170aa486a03b1a28ecc7b427",
"assets/assets/sounds/layout_1.mp3": "b82454774133b3fab885ba7aa66e3419",
"assets/assets/sounds/layout_2.mp3": "634fb174e250339f1eca376fca7c44d4",
"assets/assets/sounds/layout_3.mp3": "58218ce805f73c719b404ffbd7475520",
"assets/assets/sounds/twist.wav": "d5959cb41f4e96f49b8504c21c23c0b1",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "cfb23b719c6d2b345571d5c06552b7c6",
"assets/shaders/ink_sparkle.frag": "d85795f8afb203437cba035cf6c2def6",
"favicon.png": "fa53b39442cc7254fc0192f8896652d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ff7c3e367702a0e292a00217bd45b88",
"/": "2ff7c3e367702a0e292a00217bd45b88",
"main.dart.js": "53bfeb906003c9b8a0bcb88ba598adc5",
"manifest.json": "77ebe72a1130ceedf18ee49fdb79e3f4",
"version.json": "7b2471689c73be94afe1a6995c8601d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
