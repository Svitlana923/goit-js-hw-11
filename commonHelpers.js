import{S as m,i as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(i){const r=document.querySelector(".gallery-o"),n=i.map(({largeImageURL:s,webformatURL:e,tags:t,likes:o,views:u,comments:d,downloads:f})=>`
        <div class="gallery">
            <a href="${s}">
            <img src="${e}" alt="${t}" title="${t}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${o}</span></li>
                <li class="info-cards-elements">views<span>${u}</span></li>
                <li class="info-cards-elements">comments<span>${d}</span></li>
                <li class="info-cards-elements">downloads<span>${f}</span></li>
            </ul>
            </a>
        </div>
        `).join("");r.innerHTML=n}function y(i){const r="https://pixabay.com/api/",s=`?key=42424645-ecd3f1048329df1dec069e6a8&q=${i}`,e="&image_type=photo&orientation=horizontal&safesearch=true",t=r+s+e;return fetch(t).then(o=>o.json()).then(o=>{if(o.total===0)throw new Error("No images found");return o})}const l=document.querySelector(".search-form"),g=document.querySelector(".gallery-o"),a=document.querySelector(".loader"),L=new m(".gallery-o",{captionDelay:250});document.addEventListener("DOMContentLoaded",()=>{c(),l.addEventListener("submit",i);function i(n){n.preventDefault(),E();const s=l.querySelector(".input-search").value;y(s).then(e=>{h(e.hits)}).catch(e=>{r(e)}).finally(()=>{c()}),L.refresh()}function r(n){g.innerHTML="",p.show({message:`❌ "${n.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}});function E(){a.style.display="block"}function c(){a.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
