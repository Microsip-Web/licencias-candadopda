(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const o=[{packYear:2022,packName:"Instalar Actualizador de Licencias en Renta",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sentinel/actualizadorlicencias.html"},{packYear:2022,packName:"Instalar Licencias Candado",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1bf373470d5202be15d4_get_app_black_24dp%201.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sentinel/licenciascandado.html"}];const s=()=>{const c=document.createElement("div");return c.classList.add("grid"),o.slice(0,4).forEach(t=>{const r=document.createElement("div");r.classList.add("pack"),r.innerHTML=`
      <div class="pack">
				<div class="pack-download">
				<iframe class="frametest" src=${t.packFrame} frameborder="0" ></iframe>
					<div class="link-pack" >

						<div class="pack-year">
							<h4>${t.packYear}</h4>
						</div>
						
						<div class="pack-img">
							<img src="${t.packImage}">
						</div>
						
						<div class="pack-title">
							<h4>${t.packName}</h4>
						</div>

					</div>
				</div>
			</div>
    `,c.appendChild(r)}),c};document.querySelector("#app").innerHTML=`
  <div>
  ${s().outerHTML}
  </div>  
`;
