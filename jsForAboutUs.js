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
const swiper1 = document.querySelector('.swiper').swiper;
const swiper = new Swiper('.swiper', {
	// Optional parameters
	// autoHeight: true,
	direction: 'horizontal',
	loop: true,
    slidesPerView: 'auto',
  	spaceBetween: 0,
	loopedSlides:2,
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  spaceBetween: 10
		},
		// when window width is >= 480px
		400: {
		  slidesPerView: 2,
		  spaceBetween: 20
		},
		480: {
		  slidesPerView: 1,
		  spaceBetween: 20
		},
		// when window width is >= 640px
		768: {
		  slidesPerView: 2,
		  spaceBetween: 40
		}
	  }
  
	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
  });


  
//   window.addEventListener('resize',function(){
// 	let heights=document.querySelectorAll('.feedback-block')
// 	let arr=[]
// 	heights.forEach(el=>{
// 		arr.push(el.offsetHeight)
// 		// console.log(getComputedStyle(el).height);
// 	})
// 	let max=Math.max(...arr)
// 	heights.forEach(el=>{
// 		el.style.height=max+"px"
// 	})
// })
	// let heights=document.querySelectorAll('.feedback-block')
	// let arr=[]
	// heights.forEach(el=>{
	// 	arr.push(el.offsetHeight)
	// })
	// let max=Math.max(...arr)
	// heights.forEach(el=>{
	// 	el.style.height=max+10+"px"
	// })