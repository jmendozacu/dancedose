
function startMap() {

	var options = {
			enableHighAccuracy: true,
			timeout: 30000,
			maximumAge: 3000
	};
	if (navigator.geolocation) {
	//	console.log('geolocation supported');
	//	ons.notification.toast({message: 'geolocation supported', timeout: 1000});
      
		navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation, options);

	} else {
	    ons.notification.toast({message: 'geolocation not supported!', timeout: 3000});
	//	alert("geolocation not supported");

	}

}
function getMyPosition()
{
    
    navigator.geolocation.getCurrentPosition(function(position){
         newLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         if (dd_map === null) {
	    	console.log('dd_map is null');
	    
		    ons.notification.toast({message: 'Map is null', timeout: 1000});

    	}
        else
        {
         dd_map.setCenter(newLocation);
         markers[0].setMap(null);
         var marker = new google.maps.Marker({
	       	position: newLocation,
	    	map: dd_map,
	    	animation: google.maps.Animation.DROP,
	    	icon: 'https://maps.google.com/mapfiles/kml/pal4/icon49.png'
			// icon: '../css/dose_marker_2.png'
    	});
    	markers[0] = marker;
          resizeMap();
        }
    
        });
}
function onSuccessGeolocation(position) {

//	ons.notification.toast({message: 'Loading map! '+position.coords.latitude, timeout: 1000});
//	console.log('starting map. position is '+myPos.coords);
	var lat=4.2;
	var lng=2.8;
//	if(myPos.coords!==undefined)
//	{
	lat = position.coords.latitude;
	lng = position.coords.longitude;
//	}

	//Google Maps
	myLatlng = new google.maps.LatLng(lat, lng);
/*	if(myLatlng == null)
		ons.notification.toast({message: 'Position: '+myLatlng, timeout: 300});*/

	//  var mapOptions = {zoom: 4,center: myLatlng}
	// Set the map's options.

	var mapOptions = {
			center: myLatlng,
			zoom: 11,
			mapTypeControl: false, //true
			/*  mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },*/
        disableDefaultUI: true,
			zoomControl: true,
			zoomControlOptions: {
	            	style: google.maps.ZoomControlStyle.SMALL
            },
     	 styles : googleMapStyles

	};
	newLocation = myLatlng;

	dd_map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);
	
	var listener1 = google.maps.event.addListener(dd_map,'idle', function(){
    	    
    	newLocationViewport = dd_map.getBounds();
    	google.maps.event.removeListener(listener1);

   
    	var geocoder = new google.maps.Geocoder();
    	geocoder.geocode({'location': newLocation, 'bounds': newLocationViewport},     function(results, status) {
    		// geocoder.geocode({'bounds': newLocationViewport}, function(results,     status) {
    		if (status === 'OK') {
    			if (results[0]) {
    				newLocationName =  results[0].formatted_address;
    				return;
    			}
    		}
    		else
    		{
    			console.log("Reverse geocode didn't work because: "+status);
    			newLocationName =  "unknown location";
    		}
    
    	/*	ons.notification.toast({message: 'Location: '+newLocationName, timeout:     300});*/
    
    	});
    

    	// var marker = new google.maps.Marker({position: myLatlng,map: map});
    
    	var marker = new google.maps.Marker({
    		position: myLatlng,
    		map: dd_map,
    		icon: 'https://maps.google.com/mapfiles/kml/pal4/icon49.png'
    			// icon: '../css/dose_marker_2.png'
    	});
    
    
    	markers.push(marker);
   
    	if (dd_map === null) {
    		console.log('dd_map is null');
    	
    		ons.notification.toast({message: 'Map is null', timeout: 1000});
    
    	} else {
    	  //  ons.notification.toast({message: 'Map set', timeout: 1000});
    		console.log('Map set');
    		start_auth();
    	}
    
 });

}


function onErrorGeolocation(error) {
//	ons.notification.toast({message: 'Map not set: ' + error.code, timeout: 3000});
	alert('code: ' + error.code + '\n' +
			'message: ' + error.message + '\n');
}

function attachInfoWindow(marker, index) {
	/*if (markers[i+1].getAnimation() !== null) {
         markers[i+1].setAnimation(null);
     } else {
        markers[i+1].setAnimation(google.maps.Animation.DROP);
     }*/

	var vr = views_results[index];
	var html_content = '<p><h4 onclick="gotoNid(' + vr.nid + ');">' + vr.title + '</h4> '  + vr.field_event_price + '' + 
	vr.field_event_time+'</p>';

	var infowindow = new google.maps.InfoWindow({
		content: html_content

	});
	

	//infowindow.open(dd_map, this);

	marker.addListener('click', function() {
	    if(prev_infowindow!==null && prev_infowindow.opened ) {
           prev_infowindow.close();
        }
		infowindow.open(marker.get('dd_map'), marker);
		infowindow.opened=true;
		prev_infowindow = infowindow;
		
	});


}

function resizeMap() {
	setTimeout(function() {
		google.maps.event.trigger(dd_map, 'resize');
		
		newLocationViewport = dd_map.getBounds();

		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({'location': newLocation, 'bounds': newLocationViewport}, function(results, status) {
			if (status === 'OK') {
				if (results[0]) {
					newLocationName =  results[0].formatted_address;
					return;
				}
			}
			else console.log("Reverse geocode didn't work because: "+status);
			newLocationName =  "unknown location";
		});

	}, 500);
}
