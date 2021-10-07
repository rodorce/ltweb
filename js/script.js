


$(function() {
// ------------------------------------------------------- //
// Multi Level dropdowns
// ------------------------------------------------------ //
	$("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
	event.preventDefault();
	event.stopPropagation();

	// $("li.dropdown-submenu ul.dropdown-menu").removeClass("show");
	$(this).siblings().toggleClass("show");


	// if (!$(this).next().hasClass('show')) {
	//   $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	// }
	$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
	  $('.dropdown-submenu .show').removeClass("show");
	});

	});
});
 


$('.slider1.responsive').slick({
	dots: true,
	  prevArrow: document.querySelector('.prev'),
	  nextArrow: document.querySelector('.next'),
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });

  $('.slider2.responsive').slick({
	dots: true,
	  prevArrow: document.querySelector('.prev2'),
	  nextArrow: document.querySelector('.next2'),
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
	  {
		breakpoint: 600,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	  // You can unslick at a given breakpoint now by adding:
	  // settings: "unslick"
	  // instead of a settings object
	]
  });