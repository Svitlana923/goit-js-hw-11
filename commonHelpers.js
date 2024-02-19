import{S as f,i as a}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m=document.querySelector("input").value;function p(n){const o="https://pixabay.com/api/",i="?key=42424645-ecd3f1048329df1dec069e6a8&",s=`q=${n}&`,e="image_type=photo&orientation=horizontal&safesearch=true&per_page=18",t=o+i+s+e;return fetch(t).then(r=>{if(r.ok)return r.json();throw new Error}).then(r=>{if(r.hits.length===0)throw new Error("No results found");return r}).catch(r=>{a.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})}const h=new f(".gallery a",{captionDelay:250}),y=document.querySelector(".form");document.querySelector("input");document.querySelector("button");const c=document.querySelector(".gallery"),l=document.querySelector(".loader");y.addEventListener("submit",n=>{n.preventDefault(),S(),c.innerHTML="",p(m).then(o=>{g(o.hits)}).catch(o=>{L(o)}).finally(()=>{w()})});function g(n){const o=n.map(({largeImageURL:i,webformatURL:s,tags:e,likes:t,views:r,comments:u,downloads:d})=>`
        <div class="card-container">
            <a href="${i}">
            <img src="${s}" alt="${e}" title="${e}" width="360" height="300" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${t}</span></li>
                <li class="info-cards-elements">views<span>${r}</span></li>
                <li class="info-cards-elements">comments<span>${u}</span></li>
                <li class="info-cards-elements">downloads<span>${d}</span></li>
            </ul>
            </a>
        </div>
        `).join("");c.innerHTML=o,h.refresh()}function L(n){c.innerHTML="",a.show({message:`❌ "${n.message}". Please try again!`,color:"red",position:"topRight",maxWidth:"400px"})}function S(){l.style.display="block"}function w(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
