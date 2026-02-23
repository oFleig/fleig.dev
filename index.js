function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("navbutton");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className = "navbutton"
	}

	document.getElementById(tabName).style.display = "flex";
	
	evt.currentTarget.className += " active";
} 