import '../scss/style.scss';
import '../scss/buttons.scss';
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

import '../scss/swiper.min.scss';

import '../js/swiper.min.js';

/*Ремонт техники*/
let tech_button = document.querySelector('.tech-repair__button');
let tech_button_open = document.querySelector('.tech-repair__button--open');
let tech_item = document.querySelectorAll('.tech-container__item');
console.log(tech_item);

tech_button.addEventListener('click', function () {

	if(tech_button.classList.contains('tech-repair__button--open')){
		tech_button.classList.remove('tech-repair__button--open');		
		tech_button.classList.add('tech-repair__button--hide');
		tech_button.classList.remove('link-more');
		tech_button.classList.add('link-hide'); 
		
		tech_button.textContent = "Скрыть";		
	} else {
		tech_button.classList.remove('tech-repair__button--hide');
		tech_button.classList.add('tech-repair__button--open'); 
		tech_button.classList.remove('link-hide');
		tech_button.classList.add('link-more');

		tech_button.textContent = "Показать все (9)";		
	};
	for(var i = 0; i <  tech_item.length; i++){
				
		if(tech_item[i].classList.contains('tech-container__item--hide--close')){
			tech_item[i].classList.remove('tech-container__item--hide--close');
			tech_item[i].classList.add('tech-container__item--hide--open');
		} else {
			tech_item[i].classList.remove('tech-container__item--hide--open');
			tech_item[i].classList.add('tech-container__item--hide--close');
		};		
	};
	
});


/*Бренды*/
let brands_button = document.querySelector('.brands__button');
let brands_button_open = document.querySelector('.brands__button--open');
let brands_item = document.querySelectorAll('.brands__item');

brands_button.addEventListener('click', function () {	
	if(brands_button.classList.contains('brands__button--open')){
		brands_button.classList.remove('brands__button--open');
		brands_button.classList.add('brands__button--hide');
		brands_button.classList.remove('link-more');
		brands_button.classList.add('link-hide');		
		brands_button.textContent = "Скрыть";
	} else {
		brands_button.classList.remove('brands__button--hide');
		brands_button.classList.add('brands__button--open');
		brands_button.classList.remove('link-hide');
		brands_button.classList.add('link-more');		
		brands_button.textContent = "Показать все";
	};
	for(var i = 0; i < brands_item.length; i++){
		if(brands_item[i].classList.contains('brands__item--hide--close')){
			brands_item[i].classList.remove('brands__item--hide--close');
			brands_item[i].classList.add('brands__item--hide--open');
		} else {
			brands_item[i].classList.remove('brands__item--hide--open');
			brands_item[i].classList.add('brands__item--hide--close');
		};		
	};
});



/*Обратный звонок*/
let btn_call = document.querySelector('.primary-btn--type_call');
let menu_phone = document.querySelector('.menu__phone');
let callback = document.querySelector('.callback-modal');
let callback_close = document.querySelector('.callback-modal__close');
let overlay_callback= document.querySelector('.overlay');
let body_c= document.querySelector('body');
let dropdown_menu_callback = document.querySelector('.dropdown-menu');
btn_call.addEventListener('click', function(){	
	callback.classList.add('callback-modal--transform');
	overlay_callback.style.display = 'block';
	dropdown_menu_callback.classList.remove('dropdown-menu--transform');
	
	body_c.style.position = 'fixed';
});
menu_phone.addEventListener('click', function(){	
	callback.classList.add('callback-modal--transform');
	overlay_callback.style.display = 'block';
		
	body_c.style.position = 'fixed';	
});
callback_close.addEventListener('click', function(){
    callback.classList.remove('callback-modal--transform');
	overlay_callback.style.display = 'none';
	
	body_c.style.position = 'static';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
		callback.classList.remove('callback-modal--transform');
		overlay_callback.style.display = 'none';;
		
		body_c.style.position = 'static';
	}
});
overlay_callback.addEventListener('click', function(){
	callback.classList.remove('callback-modal--transform');
	overlay_callback.style.display = 'none';
	
	body_c.style.position = 'static';
});


/*Обратная связь*/

let btn_mail = document.querySelector('.primary-btn--type_mail');
let menu_chat = document.querySelector('.menu__chat');
let feedback = document.querySelector('.feedback-modal');
let feedback_close = document.querySelector('.feedback-modal__close');
let overlay_feedback= document.querySelector('.overlay');
let body_f= document.querySelector('body');
let dropdown_menu_feedback = document.querySelector('.dropdown-menu');
btn_mail.addEventListener('click', function(){	
	feedback.classList.add('feedback-modal--transform');
	overlay_feedback.style.display = 'block';
	dropdown_menu_feedback.classList.remove('dropdown-menu--transform');	
	body_f.style.position = 'fixed';
});
menu_chat.addEventListener('click', function(){	
	feedback.classList.add('feedback-modal--transform');
	overlay_feedback.style.display = 'block';	
	body_f.style.position = 'fixed';
});
feedback_close.addEventListener('click', function(){	
	feedback.classList.remove('feedback-modal--transform');
	overlay_feedback.style.display = 'none';	
	body_f.style.position = 'static';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
	feedback.classList.remove('feedback-modal--transform');
	overlay_feedback.style.display = 'none';	
	body_f.style.position = 'static';
	}
});
overlay_feedback.addEventListener('click', function(){
	feedback.classList.remove('feedback-modal--transform');
	overlay_feedback.style.display = 'none';	
	body_f.style.position = 'static';
});


/*Читать далее*/

let button_link = document.querySelector('.link-more');
let text_hide = document.querySelector('.about-us-wrapper__text--hide');

let main_text_hide = document.querySelector('.about-us-wrapper__text--hide');
button_link.addEventListener('click', function(){	
	if(main_text_hide.classList.contains('about-us-wrapper__text--hide--close')){	
	main_text_hide.classList.add('about-us-wrapper__text--hide--open');
	main_text_hide.classList.remove('about-us-wrapper__text--hide--close');	
	} else {
	main_text_hide.classList.add('about-us-wrapper__text--hide--close');
	main_text_hide.classList.remove('about-us-wrapper__text--hide--open');	
			
	};
	if(button_link.classList.contains('about-us-content__button--open')){
		 button_link.classList.remove('about-us-content__button--open');
		 button_link.classList.add('about-us-content__button--hide'); 
		 button_link.textContent = "Скрыть";
	} else {
		button_link.classList.add('about-us-content__button--open');
		 button_link.classList.remove('about-us-content__button--hide'); 
		 button_link.textContent = "Читать далее";
	};
});

/*Левое меню*/
let menu_burger = document.querySelector('.primary-btn--type_burger');
let dropdown_menu = document.querySelector('.dropdown-menu');
let dropdown_close = document.querySelector('.dropdown-menu__close');
let body_d = document.querySelector('body');
let overlay= document.querySelector('.overlay');
menu_burger.addEventListener('click', function(){
	dropdown_menu.classList.add('dropdown-menu--transform');
	overlay.style.display = 'block';
	body_d.style.position = 'fixed';	
});
dropdown_close.addEventListener('click', function(){		
	dropdown_menu.classList.remove('dropdown-menu--transform');
	overlay.style.display = 'none';
	body_d.style.position = 'static';
});
overlay.addEventListener('click', function(){	
	dropdown_menu.classList.remove('dropdown-menu--transform');
	overlay.style.display = 'none';
	body_d.style.position = 'static';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
		dropdown_menu.classList.remove('dropdown-menu--transform');
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



