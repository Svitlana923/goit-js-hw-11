import{S as u,i as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=new u(".gallery a",{captionDelay:250}),p=document.querySelector(".form");document.querySelector("input");document.querySelector("button");const l=document.querySelector(".gallery"),c=document.querySelector(".loader");p.addEventListener("submit",s=>{s.preventDefault(),g(),l.innerHTML="",searchImages(userValue).then(r=>{y(r.hits)}).catch(r=>{h(r)}).finally(()=>{L()})});function y(s){const r=s.map(({largeImageURL:i,webformatURL:n,tags:e,likes:t,views:o,comments:a,downloads:d})=>`
        <div class="card-container">
            <a href="${i}">
            <img src="${n}" alt="${e}" title="${e}" width="360" height="300" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${t}</span></li>
                <li class="info-cards-elements">views<span>${o}</span></li>
                <li class="info-cards-elements">comments<span>${a}</span></li>
                <li class="info-cards-elements">downloads<span>${d}</span></li>
            </ul>
            </a>
        </div>
        `).join("");l.innerHTML=r,m.refresh()}function h(s){l.innerHTML="",f.show({message:`❌ "${s.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function g(){c.style.display="block"}function L(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
