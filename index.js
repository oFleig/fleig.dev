let currentLanguage = "en";
const supportedLanguages = ["en", "pt-BR"];

document.addEventListener("DOMContentLoaded", () => {
    const factsCount = 12;
	const today = new Date();
	const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
	const factId = (dayOfYear - 1) % factsCount + 1;
	
	fetch(`https://fleig.dev/api?id=${factId}`)
    .then(response => response.text())
    .then(fact => {
      document.getElementById('fact').textContent = fact;
    })
    .catch(err => {
      console.error("Error fetching fact:", err);
      document.getElementById('fact').textContent = "Error loading fact.";
    });

	const savedLanguage = localStorage.getItem("language");
    const browserLanguage = navigator.language.toLowerCase();

    const initialLanguage = savedLanguage ||
        (browserLanguage === "pt-br" || browserLanguage.startsWith("pt-") || browserLanguage === "pt"
            ? "pt-BR"
            : "en");

    setLanguage(initialLanguage);
});

window.onload = function() {
    const names = ["Matt", "Matthew", "Matheus", "Matias", "Suehtam", "Mateo", "Matthäus", "Matthaios", "Matti", "Matthaeus", "M"];

    //setInterval(function() {
    //    const randint = Math.floor(Math.random() * names.length);
    //    const randname = names[randint];
    //    document.getElementById("randname").textContent = randname;
    //}, 1000);
	document.getElementById("randname").textContent = "Matheus Oliveira";
};

async function setLanguage(language) {
    if (!supportedLanguages.includes(language)) {
        language = "en";
    }

    try {
        const response = await fetch(`translations/${language}.json`);

        if (!response.ok) {
            throw new Error(`Could not load ${language} translations (${response.status})`);
        }

        const translations = await response.json();

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.dataset.i18n;
            if (Object.prototype.hasOwnProperty.call(translations, key)) {
                element.textContent = translations[key];
            }
        });

        document.documentElement.lang = language;
        localStorage.setItem("language", language);
    } catch (error) {
        console.error("Translation error:", error);
    }
}


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