$(document).ready(function() {
	//$('.col-sm-6').find( ".media" ).find(".media-body").find("p:contains('@ShahIsmail')").parent().find('.media-heading').html('');
	$('.col-sm-6').find( ".media" ).find(".media-body").find(".media-heading:contains('Sultan Selim I')").parent().parent().find('img').attr('src','Selim-I-cover.jpg').attr('width', '64').attr('height', '64');

	//$('.col-sm-6').find( ".media" ).find(".media-body").find("p:contains('@realSelim')").parent().find('.media-heading').html('<strong>Shah Ismail I</strong> (@ShahIsmail) - DATE HERE');
	$('.col-sm-6').find( ".media" ).find(".media-body").find(".media-heading:contains('Shah Ismail I')").parent().parent().find('img').attr('src','Shah_Ismail.jpg').attr('width', '64').attr('height', '64');


	//surround all @ in tweets in <a> tags
	// $("p").each(function () {
	// 	var tweet = $(this).text();
	// 	var splitTweet = tweet.split(/\s+/);

	// 	for (var i = 0; i < splitTweet.length; i++) {
	// 		if (splitTweet[i].charAt(0) === '@') {
	// 			splitTweet[i] = '<a>' + splitTweet[i] + '</a>';
	// 		}
	// 	}
		
	// 	$(this).html(splitTweet.join (' '));
	// });

	$('.col-sm-6').find( ".media" ).find(".media-body").find("p").html (function (_, html) {
		return html.replace (/(\B\@\w+)/g, '<a href=\"\">$1</a>');
	});
});