(function(){var k='aous-mode-'+document.documentElement.dataset.page,h=document.documentElement,s=localStorage.getItem(k);if(s)h.dataset.theme=s;
function sync(){var b=document.getElementById('mode');if(!b)return;var d=h.dataset.theme==='dark';b.textContent=d?'☀ نهار':'☾ ليل';b.setAttribute('aria-pressed',d)}
document.addEventListener('DOMContentLoaded',function(){sync();var b=document.getElementById('mode');if(b)b.addEventListener('click',function(){h.dataset.theme=h.dataset.theme==='dark'?'light':'dark';localStorage.setItem(k,h.dataset.theme);sync()})});})();
