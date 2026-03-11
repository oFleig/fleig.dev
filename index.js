document.addEventListener("DOMContentLoaded", () => {
    const factsCount = 5;
	const today = new Date();
	const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
	const factId = (dayOfYear - 1) % factsCount + 1;
	
	fetch(`https://fleig.dev/?id=${factId}`)
    .then(response => response.text())
    .then(fact => {
      document.getElementById('fact').textContent = fact;
    })
    .catch(err => {
      console.error("Error fetching fact:", err);
      document.getElementById('fact').textContent = "Error loading fact.";
    });
});

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