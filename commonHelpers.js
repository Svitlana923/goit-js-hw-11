import{S as u,i as h}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y=document.querySelector(".gallery-o"),g=document.querySelector(".search-form");new u(".gallery-o");const L={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250};function E(i){const r=i.map(({largeImageURL:s,webformatURL:e,tags:t,likes:o,views:f,comments:m,downloads:p})=>`
        <div class="gallery">
            <a href="${s}">
            <img src="${e}" alt="${t}" title="${t}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${o}</span></li>
                <li class="info-cards-elements">views<span>${f}</span></li>
                <li class="info-cards-elements">comments<span>${m}</span></li>
                <li class="info-cards-elements">downloads<span>${p}</span></li>
            </ul>
            </a>
        </div>
        `).join("");y.innerHTML=r;const n=new u(".gallery-o a",L);n.on("show.simplelightbox"),n.refresh(),g.reset()}function S(i){const r="https://pixabay.com/api/",s=`?key=42424645-ecd3f1048329df1dec069e6a8&q=${i}`,e="&image_type=photo&orientation=horizontal&safesearch=true",t=r+s+e;return fetch(t).then(o=>o.json()).then(o=>{if(o.total===0)throw new Error("No images found");return o})}const a=document.querySelector(".search-form"),c=document.querySelector(".gallery-o"),d=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{l(),a.addEventListener("submit",i);function i(n){n.preventDefault(),$(),c.innerHTML="";const s=a.querySelector(".input-search").value;S(s).then(e=>{E(e.hits)}).catch(e=>{r(e)}).finally(()=>{l()})}function r(n){c.innerHTML="",h.show({message:`❌ "${n.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}});function $(){d.style.display="block"}function l(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
