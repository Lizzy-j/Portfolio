var myFullPage = new fullpage('#fullpage', {
	// fixedElements: '#dropdown',
	// anchors:['about_me', 'projects', 'contact'],
	// scrollOverflow: true,
	scrollBar: true,
	// verticalCentered: false,
	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
});

var mySwiper = new Swiper('.swiper-container', {
	// pagination: {
	//   el: '.swiper-pagination',
	// },
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	  },
  });


//   let paragraph = document.getElementsByTagName("P")
// // paragraph.addEventListener("mouseover", addAnimateClass)
// paragraph.onmouseover = addAnimateClass;
// function addAnimateClass(event){
// 	if (event === 'onmouseover'){
// 		paragraph.classList.add("shakeY")
// 	} else {
// 		paragraph.classList.remove("shakeY")
// 	}
// }

