
//google.maps.event.addDomListener(window, 'load', onSuccess);

//jDrupal.config('sitePath', 'https://dancedose.com');

function start_auth() {
   
	(function($) {

		var onsSplitter = document.getElementById('app_splitter'); 

		onsSplitter.addEventListener("postclose", function (){

			preprocess_filters();

		});
		onsSplitter.addEventListener("preopen", function (){

			filtersChanged = true;

		});
		
		onsNavigator = document.querySelector('#onsNavigator');

		/* userStylesList = new dhtmlXList({
				container:"user_styles_list",
			//	template:"<span class='dhx_strong'>#style# <a href='#' style='color:red; text-decoration: none' onclick='remove_styles();'>X</a> </span>", 
			    template:"<span >#style# <div class='right'><ons-switch></ons-switch></div></span>",
				type:{ height:"auto" }
			});*/
		
	// Connect to Drupal... if the user is anonymous show them the login form, otherwise say hello to them.
		$.connect().then(function(result) {	
		    
		   	console.log("connected to dancedose.com");

			var modal = document.getElementById('dd_modal_load');
			modal.show();

			// Grab the current user.
			account = $.currentUser();
			console.log('account : ' + account.stringify());
			console.log('result : ' + result);

				// Anonymous users.
			if (!account.isAuthenticated()) {
				document.getElementById('add_button').style.display = 'none';

				// Show the login form.
				document.getElementById('user_login_form').style.display = 'inline';
				try
				{
				    navigator.globalization.getPreferredLanguage(
                    function (language) {    
                        var str = language.value;
                        //alert('language: ' + str + '\n'+str.substr(0, 2));
                        
                        userSettings.langcode = str.substr(0, 2);
                        localize();
                        init();
                       
                        },
                           function () {
                             
                              alert('Error getting language\n');
                              userSettings.langcode = 'en';
                               localize();
                                 init();
                           }
                      )
                 }
				    catch(err){
				       // alert('Unsupported getPreferredLanguage. Error:' + err);
				      // userSettings.langcode = navigator.language;
				     
				       try
				       {
				           userSettings.langcode = navigator.language.substr(0, 2);
				      
				            localize();
                             init();
				       }
				       catch(err)
				       {
				           	alert('Error getting language. Error:' + err);
				            userSettings.langcode = 'en';
				             localize();
                             init();
				       }
				}
			}

			// Authenticated users.
			else {
				// Show the user dashboard and say hello.
				document.getElementById('user_dashboard').style.display = 'inline';

				userSettings.langcode = account.get("preferred_langcode",0).value;
				
				var msg = interfaceHelloMsg[userSettings.langcode] + ' ' + account.getAccountName();

				document.getElementById('user_welcome').innerHTML = '<h2>' + msg + '</h2>';
				document.getElementById('add_button').style.display = 'inline';
				console.log("user roles: " + account.getRoles());
				/*
				var role = account.get("roles",0).target_id;
				if(role == "administrator" || role == "ornaniser" || role == "moderator")
				     document.getElementById('add_button').style.display = 'inline';
			    else document.getElementById('add_button').style.display = 'none';
			    
			    
			    console.log("user roles: " + account.getRoles());
                   // $.entityLoad("node", currentNode.nid).then(function(entity) {
                     $.entityLoad('role',account.id()).then(function(user_role) {
                         console.log("user role: " + user_role.stringify());
                     
		    	});*/

			//	console.log("user lang: " + userSettings.langcode);
				localize();
				init();

			}
			//alert('userSettings.langcode: ' +userSettings.langcode);
			
        
		}, function(){
		    var modal = document.getElementById('dd_modal_load');
		    modal.hide();
			ons.notification.toast({message: interfaceUnableToConnect[userSettings.langcode], timeout: 1000});
			// $.userLogout();
			
		});

	}(jDrupal));

}
	
function init() {

	(function($) {
	    			
	    
	    var modal = document.getElementById('dd_modal_load');
		var d = new Date();

		todayDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

		// scheduler.config.xml_date = "%Y-%m-%d %H:%i";
		scheduler.config.xml_date = "%Y-%m-%d";
		scheduler.config.load_date = "%Y-%m-%d";
		scheduler.config.readonly = true;

		scheduler.config.readonly_form = true;

		scheduler.config.full_day = true;
		scheduler.config.touch = true;

		scheduler.config.multi_day = true;
		scheduler.config.details_on_create=false;
		scheduler.config.details_on_dblclick=false;
		//scheduler.setDateFormat("%Y-%m-%d");

		scheduler.init('scheduler_here', d, "month");

		scheduler.attachEvent("onDblClick", function (id, e){
			//any custom logic here
			console.log("id: "+id+" e: "+e);
			//gotoNid(id);
		})

		scheduler.attachEvent("onClick", function (id, e){

			var ev = scheduler.getEvent(id);
			console.log("id: "+id+" e: "+ev.date);
			gotoNid(id);
			return;


			onsNavigator.pushPage('list_events_page.html');
			setTimeout(function() {
				var output = document.getElementById('list_events');
				// var modal = document.getElementById('dd_modal'); 

				var html_open_item = '<ons-list-item modifier="chevron" tappable>';
				var html_close_item = '</ons-list-item>';
				var html_list = '';

				for (i = 0; i < views_results.length; i++) {

					var locationLatlng = new google.maps.LatLng(views_results[i].field_event_address, views_results[i].field_event_address_1);
					if(newLocationViewport.contains(locationLatlng))
					{
						var filter = true;
						var styles_indexes = views_results[i].field_event_styles.split(",");

						update_switch_styles();
						

						for (var k = 0; k < styles_indexes.length; k++)
						{
							if(  userSettings.dance_styles.indexOf( parseInt(styles_indexes[k]) ) > -1 )
							{
								filter = false;
								break;
							}
						}
						if(!filter)
						{
							//  var node = new $.Node(results[i]);
							var event_date_range = views_results[i].field_event_date_range.split(" .. ");
							var event_start_date = event_date_range[0];
						    var event_end_date = event_start_date;
							if(event_date_range.length>1) 
							    event_end_date   = event_date_range[1];
							var start_date = new Date(event_start_date);
							var end_date   = new Date(event_end_date);
						    var date = new Date(ev.date);
						    console.log(start_date + " <= "+ date + " <= " + end_date);
								if ( start_date <= date && date <= end_date) {
									html_list += html_open_item;
									//	console.log('Loaded: ' + views_results[i].field_event_date.length + ' dates for ' + views_results[i].field_event_date);

									html_list += '<div id="item_'+i+'" class="center" onclick="gotoNid(' + views_results[i].nid + '); "><span class="list-item__title">' + views_results[i].title  +
									views_results[i].field_event_time + '</span></div>';

									html_list += html_close_item;

							
							}
						}
					}
				}

				output.innerHTML = '<ons-fab class="submit-fab" position="top left" modifier="mini"  style=" right:10px; top:10px;" onclick="onsNavigator.popPage()"  ><ons-icon icon="arrow-left"  ></ons-icon></ons-fab>' + 
				'<ons-card ><br><div ><h4>'+ev.date+'</h4></div><div class="content" ><ons-list >'+  /*style="height:'+(window.innerHeight-100) +'px; overflow-y:scroll;"*/

				html_list+'</ons-list></div></ons-card>';
				// modal.show();
			}, 100); 
			
			window.onbeforeunload = function() {   modalHide(); };
		

		});
		scheduler.attachEvent("onMouseDown", function (str){
			//any custom logic here
			console.log("str: " +   todayDate ); 
		});
		scheduler.attachEvent("onBeforeLightbox", function (id){
			//any custom logic here
			return false;
		});
		/* scheduler.attachEvent("onBeforeEventCreated", function (e){
            //any custom logic here
            return false;
        })*/
		//	scheduler.load("");


		/*  scheduler.parse([{
                text: "Meeting",
                start_date: "2017-08-20 00:01",
                end_date: "2017-08-20 23:59"
            },
            {
                text: "Meeting 2",
                start_date: "2017-08-21",
                end_date: "2017-08-22"
            },
            {
                text: "Conference",
                start_date: "2017-08-22",
                end_date: "2017-08-28"
            },
            {
                text: "Interview",
                start_date: "2017-08-23",
                end_date: "2017-08-25"
            },
        ], "json");
		 */
        //dhtmlXCalendarObject.prototype.lang = (userSettings.langcode);
      
	    if(dd_calendar !== null) dd_calendar.unload();
	    dd_calendar = new dhtmlXCalendarObject("calendar_here");
		dd_calendar.loadUserLanguage(userSettings.langcode);
		


		//	{type: "calendar", name: "with_icon", label: "With Icon", dateFormat: "%Y-%m-%d", value: "2013-06-01", calendarPosition: "right"}
	//	dd_calendar.setDateFormat("%D, %M %j");
		dd_calendar.setDate(d);
		dd_calendar.hideTime();
		dd_calendar.show();



		dd_calendar.attachEvent("onClick", function(todayDate) {
			showCalendar(document.getElementById('calendar_fab'));

		});

		dd_calendar.attachEvent("onChange", function(todayDate, state) {
			if (state === true) {
				dd_update_date(dd_calendar.getFormatedDate("%Y-%m-%d"));
				filtersChanged = true;
			}
		});

		datepicker = document.getElementById('datepicker');

		datepicker.innerHTML = dd_calendar.getFormatedDate("%D, %M %j");

		resizeMap();
		resizeScheduler();
		
		
		
		if (account.isAuthenticated()) 
		{
		    var style_id  = 0;
		    var k = 0;
	    	for(k = 0; k<20;k++)
	    	{
	    	    try	{  	
	    	        style_id  = account.get("field_user_styles", k); 
	    	        	var index = parseInt(style_id.target_id);
	    		        userSettings.dance_styles[k] = index;
	    	    }
			 	catch(err){   continue;	}

	    	}
		}
	   
	    
	     $.viewsLoad('/'+types_rest_path+'/'+ userSettings.langcode +'?_format=json').then(function(view) { 
	        var typesview= view.getResults();
	        
	        for (var i = 0; i  < typesview.length; i++) {
	            var str = typesview[i].tid + ".png";
		  
		       global_event_types[str] = typesview[i].name;
		       // console.log(typesview[i].tid +" : "+typesview[i].name);

			}
		  
	    
	     });
	        if(SWING_MODE)
	        {
	             console.log("userSettings.dance_styles.length "+userSettings.dance_styles.length);
	             				console.log("userSettings.langcode = " + userSettings.langcode);

	            $.viewsLoad('/'+styles_rest_path+'/'+ userSettings.langcode +'?_format=json').then(function(view) { 
                    global_event_styles= [];
	                var stylesview= view.getResults();
	                //if(stylesview.lengt == 0) alert("stylesview.length "+ stylesview.length);
	                
	                for (var i = 0; i  < stylesview.length; i++) {
	                    var style = 
	                    {
	                        tid : parseInt(stylesview[i].tid),
	                        name : stylesview[i].name,
	                        count : 0
	                    
	                    };
	                   
	                   global_event_styles.push(style);
    
	            	}
	                if( userSettings.dance_styles.length< 1 && !account.isAuthenticated()) // current user has no styles
	            	{
	            	    for(const style of global_event_styles)
	            		    userSettings.dance_styles.push(style.tid);  
	            	}
	            	 getEventViews();
                    console.log("userSettings.dance_styles "+userSettings.dance_styles.join(', '));
	                console.log(" global_event_styles "+ JSON.stringify(global_event_styles) );
	            });
	        }
	        else
	        {
	            getEventViews();
	        }
	        
         
         
        //   window.onload  = function() {
			var input_search_address = document.getElementById('search_address');
			var autocomplete = new google.maps.places.Autocomplete(input_search_address);
			autocomplete.bindTo('bounds', dd_map);

			google.maps.event.addListener(autocomplete, 'place_changed', function() {

				var place = autocomplete.getPlace();
				if (!place.geometry) {
					console.log("Returned place contains no geometry");
					return;
				}
				//input_event_address.value = place.geometry.location.lat() +  " " + place.geometry.location.lng();
				//input_event_address.value = place.geometry.location;
				currentNode.field_event_address_lat =  place.geometry.location.lat();
				currentNode.field_event_address_lng =  place.geometry.location.lng();

				newLocation = place.geometry.location;
				newLocationName = place.formatted_address;	
				//  newLocationBounds = place.geometry.getBounds();
				if (place.geometry.viewport) {
					dd_map.fitBounds(place.geometry.viewport);
					newLocationViewport = place.geometry.viewport;
					dd_map.setZoom(dd_map.getZoom()+1);

					//  console.log("New location viewport" + newLocationViewport);
				} else {
					// console.log("New location no viewport");
					dd_map.setCenter(place.geometry.location);
					newLocationViewport = dd_map.getBounds();
					dd_map.setZoom(10);  

				}
				getEventViews();

			});  

        
	    // };

	}(jDrupal));

}

function localize(){
    	document.getElementById('signin').innerHTML = interfaceSignIn[userSettings.langcode];
		document.getElementById('signout').innerHTML = interfaceSignOut[userSettings.langcode];
		document.getElementById('signup').innerHTML = interfaceSignUp[userSettings.langcode];
	
		document.getElementById('saving').innerHTML = interfaceSaving[userSettings.langcode];
		document.getElementById('loading').innerHTML = interfaceLoading[userSettings.langcode];
		document.getElementById('deleting').innerHTML = interfaceDeleting[userSettings.langcode];  
		document.getElementById('addevent').innerHTML = interfaceAddEvent[userSettings.langcode]; 
		
		document.getElementById('search_address').setAttribute('placeholder', interfaceSearchAddress[userSettings.langcode]);
		document.getElementById('name').setAttribute('placeholder', interfaceUsername[userSettings.langcode]);   
        document.getElementById('pass').setAttribute('placeholder', interfacePassword[userSettings.langcode]);

	/*	jQuery.getScript("../dhtmlx/dhtmlxScheduler/codebase/sources/locale/locale_"+ interfaceAddEvent[userSettings.langcode] +".js", function() {
             alert("Script loaded but not necessarily executed.");
        });*/
         var script = document.createElement("script"); // Make a script DOM node
         script.src = "dhtmlx/dhtmlxScheduler/codebase/sources/locale/locale_"+ userSettings.langcode +".js"; // Set it's src to the provided URL

         document.head.appendChild(script); 
}

//Handle the login button click.
function login_click() {

     var modal = document.getElementById('dd_modal_load');
     modal.show();

	// Grab the user input.
	if( username == "") username = document.getElementById('name').value;
	if( password == "")  password = document.getElementById('pass').value;

	// User login.
	jDrupal.userLogin(username, password).then(
			function() {
			     modal.hide();
				document.getElementById('user_dashboard').style.display = 'inline';
				document.getElementById('user_login_form').style.display = 'none';
				/*
				var role = account.get("roles",0).target_id;
				if(role == "administrator" || role == "ornaniser" || role == "moderator")
				document.getElementById('add_button').style.display = 'inline';*/

				//window.location.reload(true);
				start_auth();
			},
			function(err) {
			    //console.log("user login error: " + JSON.stringify(err) );
			     modal.hide();
				ons.notification.toast({message: username +' ' + interfaceUserNotFound[userSettings.langcode] +
				                        '<br><a href="https://dancedose.com/user/password">' + interfacePasswordReset[userSettings.langcode] + '</a>'
				, timeout: 3000, cancelable : true });
			}
	);

}

//Handle the logout button click.
function logout_click() {
    
     var modal = document.getElementById('dd_modal_load');
     modal.show();
	// User logout.
	jDrupal.userLogout().then(function() {
		document.getElementById('user_dashboard').style.display = 'none';
		document.getElementById('user_login_form').style.display = 'inline';
		
        document.getElementById('save_button').style.display = 'none';
		document.getElementById('add_button').style.display = 'none';
		document.getElementById('choose_lang').style.display = 'none';
		modal.hide();
		username = "";
		password = "";

	});

}
function save_user() {
	(function($) {
	    old_langcode = userSettings.langcode;
	    var carousel = document.getElementById('choose_lang');
        var index= carousel.getActiveIndex();
        switch(index)
        {
            case 0 : userSettings.langcode ='fr'; break;
            case 1 : userSettings.langcode ='en'; break;
            case 2 : userSettings.langcode ='es'; break;
         //   case 3 : userSettings.langcode ='ru'; break;            
            default : 0;
        }
       
	    console.log('langcode : ' + userSettings.langcode);
        console.log('dance_styles : ' + userSettings.dance_styles);
		update_switch_styles();
		var k = 0;
		var uss = [];

		for(k=0; k< userSettings.dance_styles.length; k++)
		{

			uss.push({ target_id : userSettings.dance_styles[k] });
			//	userSettings.entity.entity.field_user_styles.push(us); 
			// entity.set("field_user_styles", 0, userSettings.dance_styles[k]); 
		}

		var newUser= new $.User({

			field_user_styles: uss,
			preferred_langcode:[ {value: userSettings.langcode}],
		//	default_langcode:[{value:true}],
		//	preferred_admin_langcode:[],
			uid:[ { value: account.id()} ]
		});

		var str= userSettings.dance_styles.join(',');
		console.log('styles : ' + str);
		console.log('newUser : ' + newUser.stringify());

		var modal = document.getElementById('dd_modal_save');

		modal.show();
		newUser.save().then(function() {
			modal.hide();

			newUser.postSave().then(function() {
				ons.notification.toast({message: interfaceUserSettingsSaved[userSettings.langcode], timeout: 1000});
				if(old_langcode != userSettings.langcode){
				    	start_auth();
				}
			
			});

		}, function(){
			//alert("Unable to save user settings");
			ons.notification.toast({message: interfaceUserSettingsNotSaved[userSettings.langcode], timeout: 1000});
			// $.userLogout();
			modal.hide();
		});
	}(jDrupal));

}
function register_form() {
	filtersChanged = false;

	onsNavigator.pushPage('new_user_page.html');
	setTimeout(function() {
        document.getElementById('input_user_header').innerHTML = interfaceNewUser[userSettings.langcode];
        document.getElementById('input_user_name').setAttribute('placeholder', interfaceUsername[userSettings.langcode]);   
        document.getElementById('input_user_password').setAttribute('placeholder', interfacePassword[userSettings.langcode]);
        document.getElementById('input_user_email').setAttribute('placeholder', interfaceEmail[userSettings.langcode]);
        document.getElementById('signup_validate').innerHTML = interfaceSignUp[userSettings.langcode];

	}, 100);
	document.getElementById('app_splitter').left.close();

}
function register() {
	(function($) {
	    if (account.isAuthenticated()) {
	        $.userLogout();
	    }
		username = document.getElementById("input_user_name").value;
		password = document.getElementById("input_user_password").value ;
		email = document.getElementById("input_user_email").value ;

		var newUser= new $.User({
			// type: [ { value: 'user' } ],
			name: [ { value: username }],
			mail: [ { value: email }],   //( username + "@dancedose.com" )
			pass: [ { value: password }],
			//  
			//  roles:[ { target_id: "anonymous"} ],  //authenticated
			preferred_langcode:[ {value: userSettings.langcode}],
			field_user_styles: [ { target_id: "1" }],

			//  uid:[ { value: "0"} ],
			//	default_langcode:[{value:true}],
			status:[{value: true}]
		});

		account = $.currentUser();
		console.log('account : ' + account.stringify());
		console.log('newUser : ' + newUser.stringify());
		var modal = document.getElementById('dd_modal_save');

		modal.show();
		$.userRegister(username,  password, email).then(function() {
			modal.hide();
			onsNavigator.popPage();
			login_click();

		}, function(){
			ons.notification.toast({message: interfaceUserSettingsNotSaved[userSettings.langcode], timeout: 1000});
			$.userLogout();
			modal.hide();
		});

	}(jDrupal));
}


function  modalHide()
{
	var modal = document.getElementById('dd_modal'); 
	if(modal!==null) modal.hide();
	modal = document.getElementById('dd_modal_event'); 
	if(modal!==null) modal.hide();
}
function gotoNid(nid) {

	modalHide();

	console.log(' goto node  ' + nid);
	if(nid!==""){
		currentNode.nid = nid;
		// document.getElementById('tabbar').setActiveTab(2);
		nodeLoad(false);
	}
	else{

	}
}


function showCalendar(target) {

	var popover = document.getElementById('popover_calendar');

	popover.cancelable = true;

	var isVisible = popover.visible;

	if (isVisible)
		popover.hide();
	else
		popover.show(target);


	// console.log('Target: ' + target.innerHTML);


}



function resizeScheduler() {
	setTimeout(function() {
		scheduler.updateView();

	}, 500);
}

/*-var myFunc;
if (debugMode) {
    myFunc = function(a,b) {
        // body of your function here
    }
} else {
    myFunc = function(a,b) {
        // body of your alternate function here
    }
}*/
 


