"use strict";var precacheConfig=[["/mh-festival/index.html","81c7b7e202c40bf4c890ab02d47f5269"],["/mh-festival/static/css/main.b12a32c9.css","e7341a5c712be99ee79cbf8cf8b5611d"],["/mh-festival/static/js/main.bfe468d3.js","810b6aed8bcbb326340dcbe812406b13"],["/mh-festival/static/media/art-1.b998d20d.jpg","b998d20d9bd9072f6b799461cb93c0ea"],["/mh-festival/static/media/axe.bbc50188.jpg","bbc50188f5c0f6807430775ad9d677d5"],["/mh-festival/static/media/cobb1.c35f6e76.jpg","c35f6e765a284001791efe5ddc643931"],["/mh-festival/static/media/cobb2.71f25e96.jpg","71f25e96b2ad0eef4caff41aa63614c7"],["/mh-festival/static/media/cobb3.56a9cecb.jpg","56a9cecba121f5902c99fe4530152932"],["/mh-festival/static/media/food.0ec83fbe.jpg","0ec83fbe55a189795732712071ac4156"],["/mh-festival/static/media/logo.c35d1498.png","c35d149888292602286495516abb2cad"],["/mh-festival/static/media/mh-space-1.c636001b.jpg","c636001baaafda32da3ff120f48da287"],["/mh-festival/static/media/mh-space-2.4c851fa8.jpg","4c851fa8c4066dbc306d5578800c4dfb"],["/mh-festival/static/media/mh-space-5.01606b52.jpg","01606b52ae72a566dbcbcbc9eca89b89"],["/mh-festival/static/media/mh-space-6.1e154a0e.jpg","1e154a0e955519f3a50f2fc23ca8ea6c"],["/mh-festival/static/media/mh-space-7.8b98c16a.jpg","8b98c16a429d05226f5b95f4febb6232"],["/mh-festival/static/media/mh-space-8.c3218f13.jpg","c3218f1398d3dd29b31009a3ee2d5ae7"],["/mh-festival/static/media/mh.37a74926.jpg","37a7492682477db8bc10b8718a0e24c7"],["/mh-festival/static/media/music.75c39801.jpg","75c39801a3aad88f201b8ed4ff8ab4e3"],["/mh-festival/static/media/shack.33455883.jpg","334558834e1d8dd80ca102f1ef5e47fb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/mh-festival/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});