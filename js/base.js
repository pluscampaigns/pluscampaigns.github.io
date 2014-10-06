// set random page background
$(document).ready(function(){
	var image_names = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png"];
	var image_name = image_names[Math.floor(Math.random()*image_names.length)];
	var image_path = '/images/base/backgrounds/' + image_name;
	$('#background-image').css('background-image', 'url(' + image_path + ')');
});

/**
* Function that tracks a click on an outbound link in Google Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label.
*/
var trackOutboundLink = function(url, new_window) {
   	ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
     	function () {
     		if (!new_window) {
     			document.location = url;
     		}
     	}
   	});
	if (new_window){
		window.open(url);
	}
}

/**
* Setup google analytics tracking for all links with class "track"
*/
$(document).ready(function(){
	// set google analytics onclick link event on each link with class track
	$('.track').each(function(index, element){
		element = $(element);
		var link = element.attr('href');
		var new_window = element.attr('target') == '_blank' ? true : false;
		element.click(function(){
			trackOutboundLink(link, new_window);
			return false;
		})
	});
});
