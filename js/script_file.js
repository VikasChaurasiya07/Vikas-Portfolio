let link = document.getElementsByClassName('nav-item')
	let navclose = document.getElementById("ftco-nav")
	function handleClick() {
		navclose.classList.remove('show')
	}

	for (var i = 0; i < link.length; i++) {
		link[i].addEventListener('click', handleClick);
	} 
	let navbutton = document.getElementsByClassName('navbar-toggler')[0]
    navbutton.style.setProperty('background','#FFBD39')
    navbutton.style.setProperty('padding', '10px')