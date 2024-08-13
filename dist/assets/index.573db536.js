(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s=[{packYear:2022,packName:"Instalar Actualizador de Licencias en Renta",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/Sentinel/actualizadorlicencias-bunny.html"},{packYear:2022,packName:"Instalar Licencias Candado",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/Sentinel/licenciascandado-bunny.html"},{packFrame:"https://microsip.b-cdn.net/DescargasSoporte/Sentinel/rte-bunny.html"},{packFrame:"https://microsip.b-cdn.net/DescargasSoporte/Sentinel/rte-linux-bunny.html"},{packFrame:"https://microsip.b-cdn.net/DescargasSoporte/Sentinel/pda-linux-bunny.html"}];const i=()=>{const n=document.createElement("div");return n.classList.add("grid"),s.slice(0,5).forEach(r=>{const a=document.createElement("div");a.classList.add("pack"),a.innerHTML=`
      <div class="pack">
				<div class="pack-download">
				<iframe class="frametest" src=${r.packFrame} frameborder="0" ></iframe>
					
				</div>
			</div>
    `,n.appendChild(a)}),n};document.querySelector("#app").innerHTML=`
  <div>
  ${i().outerHTML}
  </div>  
`;
