$(function () {
	//Блоку .box__row добавить класс .slider
	if($('.slider').length>0){
		$('.slider').slick({
			infinite: false,
			dots: false,
			arrows: true,
			accessibility:false,
			slidesToShow: 4.1,
			slidesToScroll: 2,
			cssEase: 'ease-out',
			speed: 700,
			//autoplay: true,
			// autoplaySpeed: 3000,
			// adaptiveHeight: true,
			//asNavFor:'',
			//appendDots:
			//appendArrows:$('.mainslider-arrows .container'),
			// nextArrow:'<button type="button" class="slick-next"></button>',
			// prevArrow:'<button type="button" class="slick-prev"></button>',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3.1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2.1
					}
				},
				{
					breakpoint: 426,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1.5
					}
				}
			]
		});
	}
});