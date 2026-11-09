# Builds the installable (Add to Home Screen, offline) version from index.html
import re,shutil
s=open('index.html').read()
head='''<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Rep Ledger">
<meta name="theme-color" content="#111315">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" href="icon-192.png">'''
s=s.replace('<meta name="viewport" content="width=device-width, initial-scale=1">',head,1)
s=s.replace('#app{max-width:640px;margin:0 auto;padding:16px 16px 140px;','#app{max-width:640px;margin:0 auto;padding:calc(16px + env(safe-area-inset-top)) calc(16px + env(safe-area-inset-right)) 140px calc(16px + env(safe-area-inset-left));',1)
s=s.replace('.toast{position:fixed;top:14px;','.toast{position:fixed;top:calc(14px + env(safe-area-inset-top));',1)
boot='''<script>
window.REP_PWA=true;
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));}
if(navigator.storage&&navigator.storage.persist){navigator.storage.persist().catch(()=>{});}
</script>
</body>'''
s=s.replace('</body>',boot,1)
open('pwa/index.html','w').write(s)
print('built pwa/index.html')
