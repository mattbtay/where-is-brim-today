function getPhoto(){

	var data = [];

	var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c526c2fcbb9d1f459589e1b4ee27e230&tags=fun+houses&format=json&nojsoncallback=1&api_sig=859c73bce2bcd940c13a5d742b813586'

	$.ajax({
	  dataType: 'json',
	  url: url,
	  data: data,
	  success: function(data){

	  	var photos = data.photos.photo;
	  	//console.log(data.photos.photo);

	  	var rp = photos[Math.floor(Math.random()*photos.length)];

	  	console.log(rp);

	  	var randomURL = `http://farm${rp.farm}.staticflickr.com/${rp.server}/${rp.id}_${rp.secret}_z.jpg`;

	  	//console.log(randomURL);

	  	$('.frame').attr('data-background', randomURL);
	  	
	  	$('.frame').css('background-image', `url( ${randomURL} )` );

	  	var brimPhoto = '/images/brim1.png';

	  	$('.person').prop('src', brimPhoto);

	  }

	});

}


$(document).ready(function(){

	try {
		getPhoto()
	} catch(e) {
		// statements
		console.log(e);
	}
	


});
