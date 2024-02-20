import{S as E,i as $}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{const u=document.querySelector(".search-form"),r=document.querySelector("#gallery-o"),c=document.querySelector(".loader");p();const l=new E(".gallery-o a",{captionDelay:250});u.addEventListener("submit",e);function e(o){o.preventDefault(),y();const a=u.querySelector(".input-search").value;t(a).then(n=>{i(n.hits)}).catch(n=>{h(n)}).finally(()=>{p()})}function t(o){const a="https://pixabay.com/api/",f=`?key=42424645-ecd3f1048329df1dec069e6a8&q=${o}`,d="&image_type=photo&orientation=horizontal&safesearch=true",m=a+f+d;return fetch(m).then(s=>s.json()).then(s=>{if(s.total===0)throw new Error("No images found");return s})}function i(o){const a=o.map(({largeImageURL:n,webformatURL:f,tags:d,likes:m,views:s,comments:g,downloads:L})=>`
        <div class="gallery">
            <a href="${n}">
            <img src="${f}" alt="${d}" title="${d}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${m}</span></li>
                <li class="info-cards-elements">views<span>${s}</span></li>
                <li class="info-cards-elements">comments<span>${g}</span></li>
                <li class="info-cards-elements">downloads<span>${L}</span></li>
            </ul>
            </a>
        </div>
        `).join("");r.innerHTML=a,l.refresh()}function h(o){r.innerHTML="",$.show({message:`❌ "${o.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function y(){c.style.display="block"}function p(){c.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
