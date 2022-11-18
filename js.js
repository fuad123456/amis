// import ApexCharts from 'apexcharts';

let menuIcon = document.querySelector(".navbar-toggler-icon");
menuIcon.style.backgroundImage = 'url("./assets/svg/menu-icon.svg")';
menuIcon.addEventListener("click", function () {
  console.log(this.style.backgroundImage);
  if (this.style.backgroundImage === 'url("./assets/svg/menu-icon.svg")') {
    this.style.backgroundImage = "url(./assets/svg/Close.svg)";
  } else if (this.style.backgroundImage !== "url(./assets/svg/menu-icon.svg)") {
    this.style.backgroundImage = "url(./assets/svg/menu-icon.svg)";
  }
});
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    slidesPerView: 'auto',
  	spaceBetween: 0,
	loopedSlides:5,
	// loopedSlides:3,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
	
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	}
	
	// And if we need scrollbar
	// scrollbar: {
		//   el: '.swiper-scrollbar',
		// },
	});
	const swiper1 = document.querySelector('.swiper').swiper;

	let show= document.querySelector('.navbar-collapse.collapse')
	let btn= document.querySelector('.btn.mobile-button')
	let toggler = document.querySelector('.navbar-toggler')
	
	window.addEventListener('scroll',function(){
		let attrTogler=toggler.getAttribute('aria-expanded')
		if(window.pageYOffset>250){
			show.classList.remove('show')
			menuIcon.style.backgroundImage = 'url("./assets/svg/menu-icon.svg")';
			attrTogler=false
		}
	})
