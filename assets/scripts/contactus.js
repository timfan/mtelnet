$(document).ready(function () {
	$('html').niceScroll();

	var mapHK,mapTW,mapGZ;
	var mapHKCenter = new google.maps.LatLng(22.314644, 114.219711);
	var mapTWCenter = new google.maps.LatLng(25.041195, 121.554798);
	var mapGZCenter = new google.maps.LatLng(23.1363495,113.3288324);

	function initialize() {
		// Create an array of styles.
		var styles = [ { "stylers": [ { "saturation": -100 }, { "lightness": 29 } ] } ] ;

		// Create a new StyledMapType object, passing it the array of styles,
		// as well as the name to be displayed on the map type control.
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

		// Create a map object, and include the MapTypeId to add
		// to the map type control.
		var mapHKOptions = {
			zoom: 17,
			scrollwheel: false,
			center: mapHKCenter,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};
		var mapTWOptions = {
			zoom: 17,
			scrollwheel: false,
			center: mapTWCenter,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};
		var mapGZOptions = {
			zoom: 17,
			scrollwheel: false,
			center: mapGZCenter,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		};
		
		mapHK = new google.maps.Map(document.getElementById('map-hk-canvas'),mapHKOptions);
		mapTW = new google.maps.Map(document.getElementById('map-tw-canvas'),mapTWOptions);
		mapGZ = new google.maps.Map(document.getElementById('map-gz-canvas'),mapGZOptions);

		//Associate the styled map with the MapTypeId and set it to display.
		//map.mapTypes.set('map_style', styledMap);
		//map.setMapTypeId('map_style');					
		
		var markerImage = new google.maps.MarkerImage('images/0.0_home_output-assets/map_location_2.png', new google.maps.Size(129, 129), null, new google.maps.Point(64, 65));

		var hkLatlng = new google.maps.LatLng(22.314644, 114.219711);
		var twLatlng = new google.maps.LatLng(25.041195, 121.554798);
		var gzLatlng = new google.maps.LatLng(23.1363495,113.3288324);
		
		var beachHKMarker = new google.maps.Marker({
			position: hkLatlng,
			map: mapHK,
			icon: markerImage
		});
		var beachTWMarker = new google.maps.Marker({
			position: twLatlng,
			map: mapTW,
			icon: markerImage
		});
		var beachGZMarker = new google.maps.Marker({
			position: gzLatlng,
			map: mapGZ,
			icon: markerImage
		});
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);
	google.maps.event.addDomListener(window, 'resize', function() {
		mapHK.setCenter(mapHKCenter);
		mapTW.setCenter(mapTWCenter);
		mapGZ.setCenter(mapGZCenter);
	});
});