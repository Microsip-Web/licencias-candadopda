(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=[{packYear:2022,packName:"Instalar Actualizador de Licencias en Renta",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sentinel/actualizadorlicencias-v2.html"},{packYear:2022,packName:"Instalar Licencias Candado",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sentinel/licenciascandado-v2.html"},{packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sentinel/rte-v2.html"},{packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sentinel/rte-linux-v2.html"},{packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sentinel/pda-linux.html"}];const s=()=>{const o=document.createElement("div");return o.classList.add("grid"),l.slice(0,5).forEach(r=>{const a=document.createElement("div");a.classList.add("pack"),a.innerHTML=`
      <div class="pack">
				<div class="pack-download">
				<iframe class="frametest" src=${r.packFrame} frameborder="0" ></iframe>
					
				</div>
			</div>
    `,o.appendChild(a)}),o};document.querySelector("#app").innerHTML=`
  <div>
  ${s().outerHTML}
  </div>  
`;
