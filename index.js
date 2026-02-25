window.onload = function() {
    const names = ["Matt", "Matthew", "Matheus", "Matias", "Suehtam", "Mateo", "Matthäus", "Matthaios", "Matti", "Matthaeus", "M"]
	const randint = Math.floor(Math.random() * names.length);
	const randname = names[randint];
	document.getElementById("randname").textContent = randname;
};

function openTab(evt, tabName, hideme = false) {
	var i, tabcontent, tablinks;
	
	document.getElementById("mestuff").style.display = "inline";
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("navbutton");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className = "navbutton"
	}

	if (hideme == true){
		document.getElementById("mestuff").style.display = "none";
	}

	document.getElementById(tabName).style.display = "block";
	
	evt.currentTarget.className += " active";
};