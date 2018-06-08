function getEventViews(){
   
     var modal = document.getElementById('dd_modal_load');
     modal.show();
	(function($) {
	    
	    var bounds = dd_map.getBounds();
        var center = dd_map.getCenter();
        var radius = 0;
        if (bounds && center) {
            var ne = bounds.getNorthEast();
             // Calculate radius (in meters).
             radius = google.maps.geometry.spherical.computeDistanceBetween(center, ne)/1000;
        }
        newLocation = center;
	   // console.log('radius' + radius);
	   // console.log('newLocation.lat() ' + newLocation.lat());
	    var filter_str = newLocation.lat()+','+newLocation.lng()+'<='+radius;  //46.227638,2.2137<=500/13000
	    if(radius > 200 ) filter_str += "/13000";
	    else filter_str += "/all";
	    resizeMap();
    	$.viewsLoad('/app_events/'+filter_str+'?_format=json').then(function(view) {  ///48.85,2.34<=2

				views_results = view.getResults();
				set_event_types();
				update_styles();
				modal.hide();
			});
	}(jDrupal));
}

function  set_event_types(){
    var event_type_speed_dial = document.getElementById('event_type_speed_dial');
    var html = '';
    var delta_px = -15;
    for(var event_type_it in global_event_types)
    {
         html+=  ' <ons-speed-dial-item  style="border-radius:10px; width:200px; height:30px;  margin-top: '+ delta_px +'px; background: rgba(255,255,255,0.85); font-size:15px">'+
            '<ons-list-item style="margin-top: -10px"><img width="20%" src="https://'+BASE_URL+'/sites/'+BASE_URL+'/files/markers/'+event_type_it+'"></img>'  +global_event_types[event_type_it]+
            '<div class="right"><ons-switch checked id="switch_'+event_type_it+'"></ons-switch> </div></ons-list-item></ons-speed-dial-item>';
          //  console.log(event_type_it + ": " + global_event_types[event_type_it][userSettings.langcode]);
            delta_px-=20;
    }
     event_type_speed_dial.innerHTML=html;
     
    setTimeout(function() {
         for(var event_type_it in global_event_types)
         {
        	var switch_event_type = document.getElementById('switch_'+event_type_it);
        	switch_event_type.addEventListener("change", function() {
        	    update_filters();
        	});
         }
	}, 200); 
	
}

function  update_styles(){
	var user_styles = document.getElementById('user_styles');
	var user_styles_list = document.getElementById('user_styles_list');
	var html = '';
   // console.log("newLocationViewport " + newLocationViewport);
    for(let style of global_event_styles) 
    {
        style.count = 0;
    }
	for (i = 0; i < views_results.length; i++) 
	{   
	    	var locationLatlng = new google.maps.LatLng(views_results[i].field_event_address, views_results[i].field_event_address_1); 
		    if( newLocationViewport.contains(locationLatlng)){
		      var styles_indexes = views_results[i].field_event_styles.split(",");
		      
		        for (var k = 0; k < styles_indexes.length; k++)
		    	{
		    	    for(const style of global_event_styles) 
                    {
			    	if(  parseInt(styles_indexes[k]) == style.tid )
				        style.count++; 
                    }
		    	}
		    }
		    
	}
//	alert(global_event_styles[0].name);

	
	for(const style of global_event_styles) 
	{
		var style_state = "unchecked";
		if (userSettings.dance_styles.indexOf(style.tid) > -1){
			style_state = "checked";
		}
	
		html += '<ons-list-item >' + style.name + '<sup>'+ style.count+ '</sup>  <div class="right"><ons-switch id="style_switch_'+style.tid+'" '+style_state+' ></ons-switch></div>' +'</ons-list-item>';
	}
   
   
	if (account.isAuthenticated()) {
	    
	     html += '<ons-list-item >  <ons-carousel style="width:150px" swipeable auto-scroll overscrollable id="choose_lang" >'
	     + '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" >Français <ons-icon icon="fa-caret-right" /></ons-card></ons-carousel-item>'
	     + '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" ><ons-icon icon="fa-caret-left" /> English <ons-icon icon="fa-caret-right" /></ons-card></ons-carousel-item>'
	     + '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" ><ons-icon icon="fa-caret-left" /> Español</ons-card></ons-carousel-item>'
	  //   + '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" >Русский</ons-card></ons-carousel-item>'
	     + '</ons-carousel></ons-list-item >  ';
	    var func = '';
	    func += 'save_user();';
        html += '<ons-list-item > <ons-button id="save_button" onclick="'+func+'" ><ons-icon icon="md-save"></ons-icon> '+ interfaceSaveSettings[userSettings.langcode] +'</ons-button></ons-list-item>';
        	setTimeout(function() {
        	    var carousel = document.getElementById('choose_lang');
        	    var index=0;
        	    switch(userSettings.langcode)
        	    {
        	        case 'fr' : index=0; break;
        	        case 'en' : index=1; break;
        	        case 'es' : index=2; break;
        	      //  case 'ru' : index=3; break;
        	        default : 0;
        	    }
        	    carousel.setActiveIndex(index);
        	}, 100);
    }
	user_styles_list.innerHTML = html;
	setTimeout(function() {
					update_filters();

				}, 500);

	/*var search_styles = dhtmlXComboFromSelect("search_styles");
	search_styles.enableFilteringMode(true);
	search_styles.enableAutocomplete();
	search_styles.setSkin("material");

	for(k=1;k<global_event_styles.length;k++)
	{
		search_styles.addOption(k,global_event_styles[k]);

	}

	search_styles.attachEvent("onSelectionChange", function(){
		var index = search_styles.getSelectedValue();
		if( userSettings.dance_styles.indexOf( search_styles.getSelectedValue() ) < 0  )
		{
			userStylesList.add({
				style:global_event_styles[ index ],
				id: index
			});
			userSettings.dance_styles.push( index );
		}
		console.log("Choice: " + search_styles.getSelectedValue() );

		console.log('Addition userSettings.dance_styles: ' + userSettings.dance_styles);

	});

	 */
}
function update_switch_types()
{
	var type_switch = null;
    userSettings.event_types =[];
    for(var event_type_it in global_event_types)
    {
        type_switch = document.getElementById('switch_'+event_type_it);
		if(type_switch.checked)
			userSettings.event_types.push(event_type_it);

	}
}
function update_switch_styles()
{
	var style_switch = null;
	userSettings.dance_styles = [];
	for(const style of global_event_styles) 
	{
		style_switch = document.getElementById('style_switch_'+style.tid);
		if(style_switch.checked)
			userSettings.dance_styles.push(style.tid);
	}
}

function preprocess_filters(){
	if(filtersChanged) update_filters();
}
function update_filters() {
	(function($) {

		scheduler.clearAll();
		// console.log('Loading results for ' + account.getAccountName());

		if (views_results === null) {
			console.log('views_results is null');

		} else {
			console.log('Views results received: ' + views_results.length);
		//	console.log('views_results : ', views_results);
			var start_time = " 00:01";
			var end_time = " 23:59";
			var events = [];
			var i = 0;
			var style_switch = null;

			// console.log('userSettings.dance_styles: ' + userSettings.dance_styles);
			for (i = 0; i < views_results.length; i++) {
				var filter = true;
				var styles_indexes = views_results[i].field_event_styles.split(",");
				var event_type = views_results[i].field_event_promoicon;
				//  var styles_names = views_results[i].field_event_styles_1.split(",");

				// console.log('styles_indexes: ' + styles_indexes);
				update_switch_styles();
				update_switch_types();


				for (var k = 0; k < styles_indexes.length; k++)
				{
					if(  userSettings.dance_styles.indexOf( parseInt(styles_indexes[k]) ) > -1 )
					{
						filter = false;
						break;
					}
				}
				if(!filter){
				    filter = true;
                    if( userSettings.event_types.indexOf( event_type) > -1 || event_type == ".png" )
			    	{
			    		filter = false;
			    	}
				}
				if(!filter)
				{
				    var locationLatlng = new google.maps.LatLng(views_results[i].field_event_address, views_results[i].field_event_address_1);
				    if(newLocationViewport.contains(locationLatlng)){

				    			var event_date_range = views_results[i].field_event_date_range.split(" .. ");
							    var event_start_date = event_date_range[0];
						        var event_end_date = event_start_date;
						    	if(event_date_range.length>1) 
						    	{
							      event_end_date   = event_date_range[1];
						    	}
							      var end = parseInt(event_end_date.substring(event_end_date.length - 2), 10) + 1;
                                  var event_end_date = event_end_date.slice(0, -2) + end;
						    	

				    		//	console.log("RANGE. event_start_date: " + event_start_date  + " event_end_date:" + event_end_date  );
    
				    			events.push({
				    				text: views_results[i].title,
				    				full_date: true,
				    				start_date: event_start_date,
				    				end_date: event_end_date,
				    			//	date: event_start_date,
				    				color: global_event_colors[event_type],
				    				id:views_results[i].nid
				    			});
				    
					}


				}
				//
				// console.log('filter: ' + filter + ' event_type: ' + event_type + '  userSettings.event_types: '+ userSettings.event_types);


			}
			//	console.log('views_results[0].field_event_date: ' + views_results[0].field_event_date.split(",").length);

			/*  	console.log('events: ' +events[0].date);
               	console.log('events: ' +events[0].end_date);
               	console.log('events: ' +events[0].end_date);*/
			scheduler.parse(events, "json");
			dd_update_date(dd_calendar.getFormatedDate("%Y-%m-%d"));


		}


	}(jDrupal));
}




function dd_update_date(date) {

	datepicker.innerHTML = dd_calendar.getFormatedDate("%D, %M %j");

	console.log('Datepicker value = ' + date);

	my_position_marker = markers[0];
	for (var i = 1; i < markers.length; i++) {
		markers[i].setMap(null);
	}
	markers = [];

	markers.push(my_position_marker);


	var html_open_item = '<ons-list-item modifier="chevron" tappable>';
	var html_close_item = '</ons-list-item>';
	var html_list = '';

	for (i = 0; i < views_results.length; i++) {
		var filter = true;
		var styles_indexes = views_results[i].field_event_styles.split(",");
		var event_type = views_results[i].field_event_promoicon;
		//  var styles_names = views_results[i].field_event_styles_1.split(",");

		// console.log('styles_indexes: ' + styles_indexes);
		update_switch_styles();
		update_switch_types();

		for (var k = 0; k < styles_indexes.length; k++)
		{
			if(  userSettings.dance_styles.indexOf( parseInt(styles_indexes[k]) ) > -1 )
			{
				filter = false;
				break;
			}
		}
		if(!filter){
            if( userSettings.event_types.indexOf( event_type) < 0   )
	    	{
	    	    for(var event_type_it in global_event_types)
                 {
                     if(event_type_it ==event_type )
                     	  	filter = true;
                 }
	    	}
		}
		if(!filter)
		{
			//  var node = new $.Node(results[i]);
			filter = true;
			
			var event_date_range = views_results[i].field_event_date_range.split(" .. ");
			var event_start_date = event_date_range[0];
					 var event_end_date = event_start_date;
			if(event_date_range.length>1) 
			    event_end_date   = event_date_range[1];
			var start_date = new Date(event_start_date);
			var end_date   = new Date(event_end_date);
			var d = new Date(date);

			   if ( start_date <= d && d <= end_date) {
			        filter = false;

			    }
		 /*	if(filter){

			    for (var j = 0; j < views_results[i].field_event_date.length; j++) {

				    var event_dates = views_results[i].field_event_date.split(",");
			    	if (event_dates[j] == date) {
			    	    filter = false;
			    	    break;
			    	}
			    }
			} */
	    	if(!filter)
	    	{
					html_list += html_open_item;
					//	console.log('Loaded: ' + views_results[i].field_event_date.length + ' dates for ' + views_results[i].field_event_date);

					//	console.log('Styles: ' + views_results[i].field_event_styles);

					html_list += '<div class="center"><span class="list-item__title">' + views_results[i].title + ' | ' +
					views_results[i].field_event_time + '</span></div>';

					html_list += html_close_item;


					// Add a marker on the map for the location.
					var locationLatlng = new google.maps.LatLng(views_results[i].field_event_address, views_results[i].field_event_address_1);

					//  var dist= google.maps.geometry.spherical.computeDistanceBetween(newLocation, locationLatlng)
					//   console.log("Event " +views_results[i].title +" has radius of: "+ dist);

					//console.log("Event " + views_results[i].title + " is in : " + newLocationViewport.contains(locationLatlng
					var txt="red-dot.png";
					if(event_type!=".png")
					    txt=event_type;

					if(newLocationViewport.contains(locationLatlng)){
						var marker = new google.maps.Marker({
							position: locationLatlng,
							map: dd_map,
							animation: google.maps.Animation.DROP,
							icon: 'https://'+BASE_URL+'/sites/'+BASE_URL+'/files/markers/'+txt,
							// label:views_results[i].title[0],
							//  icon: 'css/dose_marker_2.png'
						});
						
							
						markers.push(marker);

						attachInfoWindow(marker, i);
					}

				}

			}
		}
	
	

	if(markers.length==1 &&  document.getElementById('tabbar').getActiveTabIndex() == 0) ons.notification.toast({message: datepicker.innerHTML +'<br>'+ interfaceNoEventsNear[userSettings.langcode] +' <br><p>' + newLocationName.split(", ").join("<br>")   +'</p>', timeout: 1000});


}

