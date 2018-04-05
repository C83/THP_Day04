// Gérer les éléments centraux
let buttonChangeDisplay = document.getElementById('hideButton');
var buttonSearchStart = document.getElementById('searchButton');
document.querySelector('input').value=null;
setTimeout("alert('Veuillez aller sur ce site')",10000);

buttonChangeDisplay.onclick = function() {
	document.getElementById('elementCentraux').style.display='flex';
	document.getElementById('sectionButton').style.display='none';
	buttonChangeDisplay.style.display='none';
}

// Gérer la recherche 

console.info(buttonSearchStart);
buttonSearchStart.onclick = function() {
	if (document.querySelector('input').value !== null) {
		document.location.href='http://google.fr/#q='+document.querySelector('input').value;
	}	
}