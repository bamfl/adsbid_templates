$(function () {
	//Блоку .box__row добавить класс .slider
	if($('.slider').length>0){
		$('.slider').slick({
			infinite: false,
			dots: false,
			arrows: true,
			accessibility:false,
			slidesToShow: 5.2,
			slidesToScroll: 2,
			cssEase: 'ease-out',
			speed: 700,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4.2
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 3.2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2.2
					}
				},
				{
					breakpoint: 426,
					settings: {
						slidesToShow: 1.5,
						slidesToScroll: 1
					}
				}
			]
		});
	}
});