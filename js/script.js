$(document).ready(function() {
	$('.col-sm-6').find( ".media" ).find(".media-body").find(".media-heading:contains('Sultan Selim I')").parent().parent().find('img').attr('src','Selim-I-cover.jpg').attr('width', '64').attr('height', '64');

	$('.col-sm-6').find( ".media" ).find(".media-body").find(".media-heading:contains('Shah Ismail I')").parent().parent().find('img').attr('src','Shah_Ismail.jpg').attr('width', '64').attr('height', '64');

	// Surround all words starting with "@" in <a> tags
	$('.col-sm-6').find( ".media" ).find(".media-body").find("p").html (function (_, html) {
		// using a regex to select whole words that start with @
		return html.replace (/(\B\@\w+)/g, '<a href=\"\">$1</a>');
	});
});