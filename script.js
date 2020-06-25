var myFullPage = new fullpage('#fullpage', {
	// fixedElements: '#dropdown',
	// anchors:['about_me', 'projects', 'contact'],
	scrollOverflow: true,
	scrollBar: true,
	// verticalCentered: false,
	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
});
myFullPage();