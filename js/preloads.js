
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.f91a2e48fd83853d964b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.fd7b807db2d29cf8deb9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/346.latest.en.9a281932cf6ae11eb09b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/891.latest.en.051286e30b2bab5510b4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.af7fdbe06d601cba8409.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.en.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/535.latest.en.279632d5b190d715dfcc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/554.latest.en.fa5fd1096dadbc1338c4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/307.latest.en.85d320635fdc7a8792cd.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.3eb2089f49405a557d6c.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.c2dc1f07062250e60370.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.cbda45b43fa1d875bd53.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.b1a85f925b41702ad78f.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/futura/futura_n4.df36ce3d9db534a4d7947f4aa825495ed740e410.woff2?h1=aWNvbi1hbXN0ZXJkYW0uY29t&hmac=cd0ca438f156d72c24966e7aee67941e35a14417a6b724dfc9d7d3b5782a1ea9","https://fonts.shopifycdn.com/futura/futura_n7.153f8fffad8e901382179997bbb87aa7a5ff33b3.woff2?h1=aWNvbi1hbXN0ZXJkYW0uY29t&hmac=3603d90d14a2d58c1020128463363bb4fea7d74c9ac101fe28ff796f186dfff7","https://fonts.shopifycdn.com/avenir_next/avenirnext_n4.7fd0287595be20cd5a683102bf49d073b6abf144.woff2?h1=aWNvbi1hbXN0ZXJkYW0uY29t&hmac=2a6e0083dcc55962324373c8bc78a8f7e13270723fe90450891d23f7851f46e1","https://fonts.shopifycdn.com/avenir_next/avenirnext_n7.8cfc646eab1e39e2d81a26284624600ccae49d55.woff2?h1=aWNvbi1hbXN0ZXJkYW0uY29t&hmac=25e1be6c2f4fb3b62ba1d68d60b50902e3b7bd71f13e91c1482115f5c0b48e1a"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/2707/0176/files/icon-amsterdam_logo_x320.png?v=1704379343"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  