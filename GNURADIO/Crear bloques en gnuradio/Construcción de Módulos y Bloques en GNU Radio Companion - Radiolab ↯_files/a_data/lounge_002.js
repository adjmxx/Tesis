!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.ead766fc0bfcd731831a6012c0a0e476.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.252c33b36679bdb03e477a61a5114c20.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.0459e20ccf5a0608d0953db9190b21df.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.05463248c2ace681de05d193251bc001.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.5e2845671155c097129ebd8a2aeb308d.js",a.body.appendChild(c)}();