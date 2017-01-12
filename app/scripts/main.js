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

	const randNumb = getRandomInt(0,6);

	const brim = [
		{ photo: 'brim1.png',
		  position: 'left: 0'
		 },
		 { photo: 'brim2.png',
		  position: 'left: 0'
		 },
		 { photo: 'brim3.png',
		  position: 'right: 0'
		 },
		 { photo: 'brim4.png',
		  position: 'left: 25%'
		 },
		 { photo: 'brim5.png',
		  position: 'right: 0'
		 },
		 { photo: 'brim6.png',
		  position: 'right: 0'
		 }
	];

	frame.setAttribute('style', `background-image: url('images/places/funhouse${randPhoto}.jpg')`);

	person.setAttribute('src', `images/brim/${brim[randNumb].photo}`);

	person.setAttribute('style', `${brim[randNumb].position}`)	

}



$(document).ready(function(){

	try {
		getPhoto()
	} catch(e) {
		// statements
		console.info(e);
	}
	


});
