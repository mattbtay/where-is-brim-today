function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function getPhoto(){

	let frame = document.getElementById('photoFrame'),
		person = document.getElementById('photoPerson');
	// get a random 1-10
	const randPhoto = getRandomInt(1,11);
	const randNumb = getRandomInt(1,7);

	frame.setAttribute('style', `background-image: url('images/places/funhouse${randPhoto}.jpg')`);

	person.setAttribute('src', `images/brim/brim${randNumb}.png`);	

}


$(document).ready(function(){

	try {
		getPhoto()
	} catch(e) {
		// statements
		console.info(e);
	}
	


});
