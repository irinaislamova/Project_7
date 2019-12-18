import '../scss/style.scss';
import '../scss/brands.scss';
import '../scss/callback-modal.scss';
import '../scss/feedback-modal.scss';
import '../scss/dropdown-menu.scss';
import '../scss/menu.scss';
import '../scss/about-us.scss';
import '../scss/normalize.scss';
import '../scss/page-footer.scss';
import '../scss/price-policy.scss';
import '../scss/price.scss';
import '../scss/tech-repair.scss';
import '../scss/swiper.scss';
import '../scss/swiper.min.scss';

import '../js/swiper.min.js';

/*Ремонт техники*/
let tech_open = document.querySelector('.tech-repair__arrows-link');
let tech_container = document.querySelector('.tech-container');
let tech_hide = document.querySelector('.tech-repair__arrows-link--hide');
tech_open.addEventListener('click', function () {
	tech_open.style.display = 'none';
	tech_hide.style.display = 'block';
	tech_container.style.height = 'auto';
	tech_container.style.overflow = 'visible';
});
tech_hide.addEventListener('click', function () {
	tech_hide.style.display = 'none';
	tech_open.style.display = 'block';
	tech_container.style.height = '180px';
	tech_container.style.overflow = 'hidden';	
});

/*Бренды*/
let brand_open = document.querySelector('.brands__link--open');
let brand_container = document.querySelector('.brands__container');
let brand_hide = document.querySelector('.brands__link--hide');
brand_open.addEventListener('click', function () {
	brand_open.style.display = 'none';
	brand_hide.style.display = 'block';
	brand_container.style.height = 'auto';
	brand_container.style.overflow = 'visible';
});
brand_hide.addEventListener('click', function () {
	brand_hide.style.display = 'none';
	brand_open.style.display = 'block';
	brand_container.style.height = '156px';	
	brand_container.style.overflow = 'hidden';	
});


/*Обратный звонок*/
let btn_call = document.querySelector('.btn-call');
let menu_phone = document.querySelector('.menu__phone');
let callback = document.querySelector('.callback-modal');
let callback_close = document.querySelector('.callback-modal__close');
let overlay_callback= document.querySelector('.overlay');
let body_c= document.querySelector('body');
let dropdown_menu_callback = document.querySelector('.dropdown-menu');
btn_call.addEventListener('click', function(){	
	callback.classList.add('transform');
	overlay_callback.style.display = 'block';
	dropdown_menu_callback.style.display = 'none';
	body_c.style.position = 'fixed';
});
menu_phone.addEventListener('click', function(){	
	callback.classList.add('transform');
	overlay_callback.style.display = 'block';	
	body_c.style.position = 'fixed';	
});
callback_close.addEventListener('click', function(){
    callback.classList.remove('transform');
	overlay_callback.style.display = 'none';
	body_c.style.position = 'static';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
		callback.classList.remove('transform');
		overlay_callback.style.display = 'none';;
		body_c.style.position = 'static';
	}
});
overlay_callback.addEventListener('click', function(){
	callback.classList.remove('transform');
	overlay_callback.style.display = 'none';
	body_c.style.position = 'static';
});


/*Обратная связь*/

let btn_mail = document.querySelector('.btn-mail');
let menu_chat = document.querySelector('.menu__chat');
let feedback = document.querySelector('.feedback-modal');
let feedback_close = document.querySelector('.feedback-modal__close');
let overlay_feedback= document.querySelector('.overlay');
let body_f= document.querySelector('body');
let dropdown_menu_feedback = document.querySelector('.dropdown-menu');
btn_mail.addEventListener('click', function(){	
	feedback.classList.add('transform');
	overlay_feedback.style.display = 'block';
	dropdown_menu_feedback.style.display = 'none';
	body_f.style.position = 'fixed';
});
menu_chat.addEventListener('click', function(){	
	feedback.classList.add('transform');
	overlay_feedback.style.display = 'block';
	body_f.style.position = 'fixed';
});
feedback_close.addEventListener('click', function(){	
	feedback.classList.remove('transform');
	overlay_feedback.style.display = 'none';
	body_f.style.position = 'static';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
	feedback.classList.remove('transform');
	overlay_feedback.style.display = 'none';
	body_f.style.position = 'static';
	}
});
overlay_feedback.addEventListener('click', function(){
	feedback.classList.remove('transform');
	overlay_feedback.style.display = 'none';
	body_f.style.position = 'static';
});


/*Читать далее*/

/*function change(button){
	let main_text_hide = document.querySelector('.about-us-wrapper__text--hide');
    if (main_text_hide.style.display == "none"){
		console.log('work');
		main_text_hide.style.display = "block";
        button.textContent = "Скрыть";
        button.classList.add("about-us-content__button--hide");
        button.classList.remove("about-us-content__button--open");
    } else {
		main_text_hide.style.display = "none";
        button.textContent = "Далее";
        button.classList.remove("about-us-content__button--hide");
        button.classList.add("about-us-content__button--open");
	}
};*/
let button_link = document.querySelector('.link-more');
let button_open = document.querySelector('.about-us-content__button--open');
let main_text_hide = document.querySelector('.about-us-wrapper__text--hide');
button_open.addEventListener('click', function(){	
	main_text_hide.style.display = 'block';	
	button_link.classList.remove('about-us-content__button--open');
	button_link.classList.add('about-us-content__button--hide');

	let button_close = document.querySelector('.about-us-content__button--hide');
	button_close.textContent = "Скрыть";	
	button_close.addEventListener('click', function(){
		main_text_hide.style.display = 'none';	
		button_link.classList.remove('about-us-content__button--hide');
		button_link.classList.add('about-us-content__button--open');	
		button_link.textContent = "Читать далее";	
	});
});

/*Левое меню*/
let menu_burger = document.querySelector('.menu__burger');
let dropdown_menu = document.querySelector('.dropdown-menu');
let dropdown_close = document.querySelector('.dropdown-menu__close');
let body_d = document.querySelector('body');
let overlay= document.querySelector('.overlay');
menu_burger.addEventListener('click', function(){	
	console.log('3');
	dropdown_menu.classList.add('transform');
	overlay.style.display = 'block';
	body_d.style.position = 'fixed';	
});
dropdown_close.addEventListener('click', function(){		
	dropdown_menu.classList.remove('transform');
	overlay.style.display = 'none';
	body_d.style.position = 'static';
});
overlay.addEventListener('click', function(){	
	dropdown_menu.classList.remove('transform');
	overlay.style.display = 'none';
	body_d.style.position = 'static';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
		dropdown_menu.classList.remove('transform');
		overlay.style.display = 'none';
		body_d.style.position = 'static';	
	}
});

if (window.innerWidth < 426) {		
	var techSlider = new Swiper('.tech-repair', {
		slidesPerView: 'auto',
		wrapperClass: 'tech-container',
		slideClass: 'tech-container__item',
		pagination: {
			el: '.tech-repair-pagination',
			clickable: true,
		}
	});

	var brandsSlider = new Swiper('.brands', {
		slidesPerView: 'auto',
		wrapperClass: 'brands__container',
		slideClass: 'brands__item',
		pagination: {
			el: '.brands-pagination',
			clickable: true,
		}
	});

	var pricesSlider = new Swiper('.prices__table', {
		slidesPerView: 'auto',
		wrapperClass: 'prices__t-body',
		slideClass: 'prices__t-row',
		pagination: {
			el: '.prices-pagination',
			clickable: true,
		}
	});
}



