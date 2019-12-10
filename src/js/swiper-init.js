/*if (window.innerWidth < 769) {
    var navSlider = new Swiper('.nav-slider', {
        slidesPerView: 'auto',
        wrapperClass: 'navigation',
        slideClass: 'navigation__item',
          });*/

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
/*}*/