!function(e){var n={};function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(l,o,function(n){return e[n]}.bind(null,o));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13);var l=document.querySelector(".tech-repair__arrows-link"),o=document.querySelector(".tech-container"),i=document.querySelector(".tech-repair__arrows-link--hide");l.addEventListener("click",function(){l.style.display="none",i.style.display="block",o.style.height="auto",o.style.overflow="visible"}),i.addEventListener("click",function(){i.style.display="none",l.style.display="block",o.style.height="180px",o.style.overflow="hidden"});var c=document.querySelector(".brands__link--open"),r=document.querySelector(".brands__container"),s=document.querySelector(".brands__link--hide");c.addEventListener("click",function(){c.style.display="none",s.style.display="block",r.style.height="auto",r.style.overflow="visible"}),s.addEventListener("click",function(){s.style.display="none",c.style.display="block",r.style.height="156px",r.style.backgroundColor="green",r.style.overflow="hidden"});var a=document.querySelector(".btn-call"),d=document.querySelector(".main-menu__phone"),u=document.querySelector(".callback-modal"),y=document.querySelector(".callback-modal__close"),p=document.querySelector(".overlay"),f=document.querySelector(".left-menu");a.addEventListener("click",function(){u.style.display="block",p.style.display="block",f.style.display="none"}),d.addEventListener("click",function(){u.style.display="block",p.style.display="block"}),y.addEventListener("click",function(){u.style.display="none",p.style.display="none"}),document.addEventListener("keydown",function(e){27===e.keyCode&&(u.style.display="none",p.style.display="none")});var b=document.querySelector(".btn-mail"),m=document.querySelector(".main-menu__chat"),k=document.querySelector(".feedback-modal"),v=document.querySelector(".feedback-modal__close"),_=document.querySelector(".overlay"),S=document.querySelector(".left-menu");b.addEventListener("click",function(){k.style.display="block",_.style.display="block",S.style.display="none"}),m.addEventListener("click",function(){k.style.display="block",_.style.display="block"}),v.addEventListener("click",function(){k.style.display="none",_.style.display="none"}),document.addEventListener("keydown",function(e){27===e.keyCode&&(k.style.display="none",_.style.display="none")});var h=document.querySelector(".main-content__button--open"),w=document.querySelector(".main-content__button--hide"),q=document.querySelector(".main-text");h.addEventListener("click",function(){q.overflow="block",h.style.display="none",w.style.display="block",q.style.height="auto",q.style.overflow="visible"}),w.addEventListener("click",function(){q.overflow="block",h.style.display="block",w.style.display="none",q.style.height="153px",q.style.overflow="hidden"});var g=document.querySelector(".main-menu__burger"),E=document.querySelector(".left-menu"),L=document.querySelector(".left-btn--close"),x=(document.querySelector(".main-menu"),document.querySelector(".overlay"));if(g.addEventListener("click",function(){E.style.display="block",E.style.color="red",x.style.display="block"}),L.addEventListener("click",function(){E.style.display="none",x.style.display="none"}),window.innerWidth<426)new Swiper(".tech-repair",{slidesPerView:"auto",wrapperClass:"tech-container",slideClass:"tech-container__item",pagination:{el:".tech-repair-pagination",clickable:!0}}),new Swiper(".brands",{slidesPerView:"auto",wrapperClass:"brands__container",slideClass:"brands__item",pagination:{el:".brands-pagination",clickable:!0}}),new Swiper(".prices__table",{slidesPerView:"auto",wrapperClass:"prices__t-body",slideClass:"prices__t-row",pagination:{el:".prices-pagination",clickable:!0}})},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){}]);
//# sourceMappingURL=bundle.js.map