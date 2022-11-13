let menuIcon = document.querySelector(".navbar-toggler-icon");
// setTimeout(function(){
// 	console.log(menuIcon.style.backgroundImage);
// },2000)
menuIcon.style.backgroundImage = 'url("./assets/svg/menu-icon.svg")';
menuIcon.addEventListener("click", function () {
  console.log(this.style.backgroundImage);
  if (this.style.backgroundImage === 'url("./assets/svg/menu-icon.svg")') {
    this.style.backgroundImage = "url(./assets/svg/Close.svg)";
    // console.log(222);
  } else if (this.style.backgroundImage !== "url(./assets/svg/menu-icon.svg)") {
    this.style.backgroundImage = "url(./assets/svg/menu-icon.svg)";
    // console.log(111);
    // console.log(this.style.backgroundImage);
  }
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  spaceBetween: 0,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    950: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  },
});
