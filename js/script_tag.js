if(!window.rbrHideScripts){const baseURL='api.fastbundle.co'
const configBaseUrl=`https://${baseURL}/v3/fast-bundle-conf/?shop_domain=${window.Shopify.shop}`;const rbrAppUrl=`https://${baseURL}/react-src/static/js/main.min.js`,rbrCartUrl=`https://${baseURL}/scripts/cart.js`,rbrStyleUrl=`https://${baseURL}/react-src/static/css/main.min.css`;let previousScriptLoaded=Boolean(document.querySelectorAll(`script[src*="${rbrAppUrl}"]`).length)
if(!previousScriptLoaded){window.fetch(window.location.pathname+'.js').then(r=>r.json()).then(r=>window.pid=r.id)
window.fetch(configBaseUrl).then((res)=>res.json()).then((res)=>{if(res.is_active){const FastBundleConf=res;FastBundleConf.pid=window.pid?`${window.pid}`:'';FastBundleConf.domain=window.Shopify.shop;window.FastBundleConf=FastBundleConf;const urlQueryParameter=`?rgn=${FastBundleConf?.rgn}`
const appScript=document.createElement("script");appScript.src=rbrAppUrl+urlQueryParameter;appScript.async=true;appScript.type="text/javascript";const cartScript=document.createElement("script");cartScript.src=rbrCartUrl+urlQueryParameter;cartScript.async=true;cartScript.type="text/javascript";document.head.appendChild(appScript)
document.head.appendChild(cartScript)
let style=document.createElement('link')
style.rel='stylesheet'
style.href=rbrStyleUrl+urlQueryParameter;document.head.appendChild(style)}});}}