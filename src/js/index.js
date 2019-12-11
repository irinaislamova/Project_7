import '../scss/style.scss';
import '../scss/brands.scss';
import '../scss/callback-modal.scss';
import '../scss/feedback-modal.scss';
import '../scss/left-menu.scss';
import '../scss/main-menu.scss';
import '../scss/main.scss';
import '../scss/normalize.scss';
import '../scss/page-footer.scss';
import '../scss/price-policy.scss';
import '../scss/tech-repair.scss';
import '../scss/swiper.min.scss';

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
	brand_container.style.backgroundColor = 'green';
	brand_container.style.overflow = 'hidden';	
});


/*Модальные окна*/
let btn_call = document.querySelector('.btn-call');
let menu_phone = document.querySelector('.main-menu__phone');
let callback = document.querySelector('.callback-modal');
let callback_close = document.querySelector('.callback-modal__close');
let overlay_callback= document.querySelector('.overlay');
let left_menu_callback = document.querySelector('.left-menu');
btn_call.addEventListener('click', function(){
	callback.style.display = 'block';
	overlay_callback.style.display = 'block';
	left_menu_callback.style.display = 'none';

});
menu_phone.addEventListener('click', function(){	
	callback.style.display = 'block';
	overlay_callback.style.display = 'block';	
});
callback_close.addEventListener('click', function(){
	callback.style.display = 'none';
	overlay_callback.style.display = 'none';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
		callback.style.display = 'none';
		overlay_callback.style.display = 'none';;
	}
});

/*Обратная связь*/

let btn_mail = document.querySelector('.btn-mail');
let menu_chat = document.querySelector('.main-menu__chat');
let feedback = document.querySelector('.feedback-modal');
let feedback_close = document.querySelector('.feedback-modal__close');
let overlay_feedback= document.querySelector('.overlay');
let left_menu_feedback = document.querySelector('.left-menu');
btn_mail.addEventListener('click', function(){	
	feedback.style.display = 'block';
	overlay_feedback.style.display = 'block';
	left_menu_feedback.style.display = 'none';
});
menu_chat.addEventListener('click', function(){	
	feedback.style.display = 'block';
	overlay_feedback.style.display = 'block';
});
feedback_close.addEventListener('click', function(){	
	feedback.style.display = 'none';
	overlay_feedback.style.display = 'none';
});
document.addEventListener('keydown', function(e) {
	if (e.keyCode === 27) {		
		feedback.style.display = 'none';
	overlay_feedback.style.display = 'none';
	}
});


/*Читать далее*/
let button_open = document.querySelector('.main-content__button--open');
let button_close = document.querySelector('.main-content__button--hide');
let main_text = document.querySelector('.main-text');
button_open.addEventListener('click', function(){	
	main_text.overflow = 'block';
	button_open.style.display = 'none';
	button_close.style.display = 'block';
	main_text.style.height = 'auto';
	main_text.style.overflow = 'visible';
});
button_close.addEventListener('click', function(){
	main_text.overflow = 'block';
	button_open.style.display = 'block';
	button_close.style.display = 'none';	
	main_text.style.height = '153px';
	main_text.style.overflow = 'hidden';
});
/*Левое меню*/
let burger_menu = document.querySelector('.main-menu__burger');
let left_menu = document.querySelector('.left-menu');
let left_close = document.querySelector('.left-btn--close');
let main = document.querySelector('.main-menu');
let overlay= document.querySelector('.overlay');
burger_menu.addEventListener('click', function(){	
	left_menu.style.display = 'block';
	left_menu.style.color = 'red';
	overlay.style.display = 'block';
});
left_close.addEventListener('click', function(){	
	left_menu.style.display = 'none';
	overlay.style.display = 'none';
});
/*swiper*/
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

