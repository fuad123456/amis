let menuIcon = document.querySelector('.navbar-toggler-icon')
// setTimeout(function(){
// 	console.log(menuIcon.style.backgroundImage);
// },2000)
menuIcon.style.backgroundImage='url("./assets/svg/menu-icon.svg")'
menuIcon.addEventListener('click',function(){
	console.log(this.style.backgroundImage);
	if(this.style.backgroundImage==='url("./assets/svg/menu-icon.svg")'){
		this.style.backgroundImage='url(./assets/svg/Close.svg)'
		// console.log(222);
	}
	else if(this.style.backgroundImage!=='url(./assets/svg/menu-icon.svg)'){
		this.style.backgroundImage='url(./assets/svg/menu-icon.svg)'
		// console.log(111);
		// console.log(this.style.backgroundImage);
	}
})