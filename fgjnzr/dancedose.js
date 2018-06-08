//===================Init=======================================================
var TANGO_MODE = false;
var SWING_MODE = true;

var BASE_URL = 'https://dancedose.com';

jDrupal.settings = {
   sitePath: 'https://dancedose.com',
   basePath: '/'
}


var newLocation = null;
var newLocationViewport = null;
var newLocationName = null;

var newNode = null;
var filtersChanged = true;

var dd_map = null;
var myLatlng = null;
var markers = [];
var views_results = [];
var dd_calendar = null;
var datepicker = null;
var currentNode = {
   title: "",
   field_event_description: "",
   //field_event_dates: [],
   field_event_date_range_start: "",
   field_event_date_range_end: "",
   field_event_time: "",
   field_event_price: "",
   field_event_address_lat: "",
   field_event_address_lng: "",
   field_event_styles: [],
   field_event_type: "",
   nid: "107",
   author_id: "1",
   entity: ""
};

var global_event_styles = [];
var global_event_colors = null;
var global_event_types = {};
var types_rest_path;
var styles_rest_path;
if (SWING_MODE) {

   BASE_URL = 'swing.dancedose.com';
   types_rest_path = 'swingtypesapp';
   styles_rest_path = 'swingstylesapp';
   global_event_colors = {
      "10000.png": "#999999", //grey
      "11000.png": "#87CEEB", //skyblue
      "12000.png": "#DB7093", //pink      
      "13000.png": "#FFD700", // GOLD
      "14000.png": "#FF8C00", // orange           
      "15000.png": "#32CD32", // green  
      ".png": "red"
   };

} else if (TANGO_MODE) {

   BASE_URL = 'tango.dancedose.com';
   types_rest_path = 'tangotypesapp';
   styles_rest_path = 'tangostylesapp';
   global_event_colors = {
      "15009.png": "#999999", //grey
      "15008.png": "#87CEEB", //skyblue
      "15001.png": "#DB7093", //pink      
      "15002.png": "#FFD700", // GOLD
      "15003.png": "#FF0000", // RED    
      "15006.png": "#FF8C00 ", // orange
      "15005.png": "#32CD32", // green  
      "15004.png": "#4B0082", //  purple 
      "15007.png": "#4169E1", // royal blue
      ".png": "red"
   };
}



var account;
var userSettings = {
   username: "",
   password: "",
   uid: "107",
   dance_styles: [],
   event_types: [],
   langcode: "fr",
   entity: null
};

var username = "";
var password = "";

var html_output_prev = "";
var prev_infowindow = null;

var todayDate;
var onsNavigator;

var userStylesList;


ons.bootstrap()
   .controller('AppController', function($scope) {
      this.load = function(page) {
         $scope.splitter.left.close();
      };

      this.toggle = function() {
         $scope.splitter.left.toggle();
      };

   });
ons.ready(function() {
   console.log("Onsen UI is ready!");
   getCSS();
   //      document.addEventListener("deviceready", function(){
   setTimeout(function() {

      startMap();

   }, 1000);
   //    }, false);
});
//===================CSS========================================================
function getCSS() {

   var cssId = 'myCss'; // you could encode the css path itself to generate id..
   var head = document.getElementsByTagName('head')[0];
   var link = document.createElement('link');
   link.id = cssId;
   link.rel = 'stylesheet';
   link.type = 'text/css';
   var user_pic = document.getElementById('user_pic');
   if (SWING_MODE) {
      link.href = 'css/dd_swing_style.css';
      user_pic.src = "css/swing_white.png";
   } else if (TANGO_MODE) {
      link.href = 'css/dd_tango_style.css';
      user_pic.src = "css/tango_white.png";
   }
   link.media = 'all';
   head.appendChild(link);

   if (navigator.userAgent.match(/(iPad|iPhone|iPod|iphone|)/g) || navigator.userAgent.toUpperCase().includes("iphone") || navigator.userAgent.toUpperCase().includes("iPod") || navigator.userAgent.toUpperCase().includes("iPad")) {
      document.addEventListener('DOMNodeInserted', function() { //DOMNodeInserted MutationObserver
         var containers = document.getElementsByClassName("pac-container");
         for (i = 0; i < containers.length; i++) {
            containers[i].addEventListener('touchstart', function(e) {
               e.stopImmediatePropagation();
            }, {
               passive: true
            });
         }
      }, false);
   }
}
//===================MAP========================================================
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
      ons.notification.toast({
         message: 'geolocation not supported!',
         timeout: 3000
      });
      //	alert("geolocation not supported");
   }
}

function getMyPosition() {
   navigator.geolocation.getCurrentPosition(function(position) {
      newLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      if (dd_map === null) {
         console.log('dd_map is null');

         ons.notification.toast({
            message: 'Map is null',
            timeout: 1000
         });

      } else {
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
   var lat = 4.2;
   var lng = 2.8;

   lat = position.coords.latitude;
   lng = position.coords.longitude;

   //Google Maps
   myLatlng = new google.maps.LatLng(lat, lng);

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
      styles: googleMapStyles

   };
   newLocation = myLatlng;

   dd_map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);

   var listener1 = google.maps.event.addListener(dd_map, 'idle', function() {

      newLocationViewport = dd_map.getBounds();
      google.maps.event.removeListener(listener1);

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
         'location': newLocation,
         'bounds': newLocationViewport
      }, function(results, status) {
         // geocoder.geocode({'bounds': newLocationViewport}, function(results,     status) {
         if (status === 'OK') {
            if (results[0]) {
               newLocationName = results[0].formatted_address;
               return;
            }
         } else {
            console.log("Reverse geocode didn't work because: " + status);
            newLocationName = "unknown location";
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

         ons.notification.toast({
            message: 'Map is null',
            timeout: 1000
         });

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

   var vr = views_results[index];
   var html_content = '<p><h4 onclick="gotoNid(' + vr.nid + ');">' + vr.title + '</h4> ' + vr.field_event_price + '' +
      vr.field_event_time + '</p>';

   var infowindow = new google.maps.InfoWindow({
      content: html_content

   });

   //infowindow.open(dd_map, this);

   marker.addListener('click', function() {
      if (prev_infowindow !== null && prev_infowindow.opened) {
         prev_infowindow.close();
      }
      infowindow.open(marker.get('dd_map'), marker);
      infowindow.opened = true;
      prev_infowindow = infowindow;

   });

}

function resizeMap() {
   setTimeout(function() {
      google.maps.event.trigger(dd_map, 'resize');

      newLocationViewport = dd_map.getBounds();

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
         'location': newLocation,
         'bounds': newLocationViewport
      }, function(results, status) {
         if (status === 'OK') {
            if (results[0]) {
               newLocationName = results[0].formatted_address;
               return;
            }
         } else console.log("Reverse geocode didn't work because: " + status);
         newLocationName = "unknown location";
      });

   }, 500);
}
//===================AUTH=======================================================

function start_auth() {

   (function($) {

      var onsSplitter = document.getElementById('app_splitter');

      onsSplitter.addEventListener("postclose", function() {

         preprocess_filters();

      });
      onsSplitter.addEventListener("preopen", function() {

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
            try {
               navigator.globalization.getPreferredLanguage(
                  function(language) {
                     var str = language.value;
                     //alert('language: ' + str + '\n'+str.substr(0, 2));

                     userSettings.langcode = str.substr(0, 2);
                     localize();
                     init();

                  },
                  function() {

                     alert('Error getting language\n');
                     userSettings.langcode = 'en';
                     localize();
                     init();
                  }
               )
            } catch (err) {
               // alert('Unsupported getPreferredLanguage. Error:' + err);
               // userSettings.langcode = navigator.language;

               try {
                  userSettings.langcode = navigator.language.substr(0, 2);

                  localize();
                  init();
               } catch (err) {
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

            userSettings.langcode = account.get("preferred_langcode", 0).value;

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


      }, function() {
         var modal = document.getElementById('dd_modal_load');
         modal.hide();
         ons.notification.toast({
            message: interfaceUnableToConnect[userSettings.langcode],
            timeout: 1000
         });
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
      scheduler.config.details_on_create = false;
      scheduler.config.details_on_dblclick = false;
      //scheduler.setDateFormat("%Y-%m-%d");

      scheduler.init('scheduler_here', d, "month");

      scheduler.attachEvent("onDblClick", function(id, e) {
         //any custom logic here
         console.log("id: " + id + " e: " + e);
         //gotoNid(id);
      })

      scheduler.attachEvent("onClick", function(id, e) {

         var ev = scheduler.getEvent(id);
         console.log("id: " + id + " e: " + ev.date);
         gotoNid(id);
         //pushDayEventsPage(); 
      });

      scheduler.attachEvent("onBeforeLightbox", function(id) {
         //any custom logic here
         return false;
      });

      if (dd_calendar !== null) dd_calendar.unload();
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



      if (account.isAuthenticated()) {
         var style_id = 0;
         var k = 0;
         for (k = 0; k < 20; k++) {
            try {
               style_id = account.get("field_user_styles", k);
               var index = parseInt(style_id.target_id);
               userSettings.dance_styles[k] = index;
            } catch (err) {
               continue;
            }

         }
      }


      $.viewsLoad('/' + types_rest_path + '/' + userSettings.langcode + '?_format=json').then(function(view) {
         var typesview = view.getResults();

         for (var i = 0; i < typesview.length; i++) {
            var str = typesview[i].tid + ".png";

            global_event_types[str] = typesview[i].name;
            // console.log(typesview[i].tid +" : "+typesview[i].name);

         }


      });
      if (SWING_MODE) {
         console.log("userSettings.dance_styles.length " + userSettings.dance_styles.length);
         console.log("userSettings.langcode = " + userSettings.langcode);

         $.viewsLoad('/' + styles_rest_path + '/' + userSettings.langcode + '?_format=json').then(function(view) {
            global_event_styles = [];
            var stylesview = view.getResults();
            //if(stylesview.lengt == 0) alert("stylesview.length "+ stylesview.length);

            for (var i = 0; i < stylesview.length; i++) {
               var style = {
                  tid: parseInt(stylesview[i].tid),
                  name: stylesview[i].name,
                  count: 0

               };

               global_event_styles.push(style);

            }
            if (userSettings.dance_styles.length < 1 && !account.isAuthenticated()) // current user has no styles
            {
               for (const style of global_event_styles)
                  userSettings.dance_styles.push(style.tid);
            }
            getEventViews();
            console.log("userSettings.dance_styles " + userSettings.dance_styles.join(', '));
            console.log(" global_event_styles " + JSON.stringify(global_event_styles));
         });
      } else {
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
         currentNode.field_event_address_lat = place.geometry.location.lat();
         currentNode.field_event_address_lng = place.geometry.location.lng();

         newLocation = place.geometry.location;
         newLocationName = place.formatted_address;
         //  newLocationBounds = place.geometry.getBounds();
         if (place.geometry.viewport) {
            dd_map.fitBounds(place.geometry.viewport);
            newLocationViewport = place.geometry.viewport;
            dd_map.setZoom(dd_map.getZoom() + 1);

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

function localize() {
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
   script.src = "dhtmlx/dhtmlxScheduler/codebase/sources/locale/locale_" + userSettings.langcode + ".js"; // Set it's src to the provided URL

   document.head.appendChild(script);
}

function login_click() {

   var modal = document.getElementById('dd_modal_load');
   modal.show();

   // Grab the user input.
   if (username == "") username = document.getElementById('name').value;
   if (password == "") password = document.getElementById('pass').value;

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
         ons.notification.toast({
            message: username + ' ' + interfaceUserNotFound[userSettings.langcode] +
               '<br><a href="https://dancedose.com/user/password">' + interfacePasswordReset[userSettings.langcode] + '</a>',
            timeout: 3000,
            cancelable: true
         });
      }
   );

}

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
      var index = carousel.getActiveIndex();
      switch (index) {
         case 0:
            userSettings.langcode = 'fr';
            break;
         case 1:
            userSettings.langcode = 'en';
            break;
         case 2:
            userSettings.langcode = 'es';
            break;
            //   case 3 : userSettings.langcode ='ru'; break;            
         default:
            0;
      }

      console.log('langcode : ' + userSettings.langcode);
      console.log('dance_styles : ' + userSettings.dance_styles);
      update_switch_styles();
      var k = 0;
      var uss = [];

      for (k = 0; k < userSettings.dance_styles.length; k++) {

         uss.push({
            target_id: userSettings.dance_styles[k]
         });
         //	userSettings.entity.entity.field_user_styles.push(us); 
         // entity.set("field_user_styles", 0, userSettings.dance_styles[k]); 
      }

      var newUser = new $.User({

         field_user_styles: uss,
         preferred_langcode: [{
            value: userSettings.langcode
         }],
         //	default_langcode:[{value:true}],
         //	preferred_admin_langcode:[],
         uid: [{
            value: account.id()
         }]
      });

      var str = userSettings.dance_styles.join(',');
      console.log('styles : ' + str);
      console.log('newUser : ' + newUser.stringify());

      var modal = document.getElementById('dd_modal_save');

      modal.show();
      newUser.save().then(function() {
         modal.hide();

         newUser.postSave().then(function() {
            ons.notification.toast({
               message: interfaceUserSettingsSaved[userSettings.langcode],
               timeout: 1000
            });
            if (old_langcode != userSettings.langcode) {
               start_auth();
            }

         });

      }, function() {
         //alert("Unable to save user settings");
         ons.notification.toast({
            message: interfaceUserSettingsNotSaved[userSettings.langcode],
            timeout: 1000
         });
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
      document.getElementById('signup_cancel').innerHTML = interfaceCancel[userSettings.langcode];
   }, 100);
   document.getElementById('app_splitter').left.close();

}

function register() {
   (function($) {
      if (account.isAuthenticated()) {
         $.userLogout();
      }
      username = document.getElementById("input_user_name").value;
      password = document.getElementById("input_user_password").value;
      email = document.getElementById("input_user_email").value;

      var modal = document.getElementById('dd_modal_save');
      
      modal.show();
      $.userRegister(username, password, email, userSettings.langcode).then(function() {
         modal.hide();
         onsNavigator.popPage();

         userSettings.dance_styles = [];
         login_click();

      }, function() {
         ons.notification.toast({
            message: interfaceUserSettingsNotSaved[userSettings.langcode],
            timeout: 1000
         });
         $.userLogout();
         modal.hide();
      });

   }(jDrupal));
}


function modalHide() {
   var modal = document.getElementById('dd_modal');
   if (modal !== null) modal.hide();
   modal = document.getElementById('dd_modal_event');
   if (modal !== null) modal.hide();
}

function gotoNid(nid) {

   modalHide();

   console.log(' goto node  ' + nid);
   if (nid !== "") {
      currentNode.nid = nid;
      // document.getElementById('tabbar').setActiveTab(2);
      nodeLoad(false);
   } else {

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
//===================Filters====================================================

function getEventViews() {

   var modal = document.getElementById('dd_modal_load');
   modal.show();
   (function($) {

      var bounds = dd_map.getBounds();
      var center = dd_map.getCenter();
      var radius = 0;
      if (bounds && center) {
         var ne = bounds.getNorthEast();
         // Calculate radius (in meters).
         radius = google.maps.geometry.spherical.computeDistanceBetween(center, ne) / 1000;
      }
      newLocation = center;
      // console.log('radius' + radius);
      // console.log('newLocation.lat() ' + newLocation.lat());
      var filter_str = newLocation.lat() + ',' + newLocation.lng() + '<=' + radius; //46.227638,2.2137<=500/13000
      if (radius > 200) filter_str += "/13000";
      else filter_str += "/all";
      resizeMap();
      $.viewsLoad('/app_events/' + filter_str + '?_format=json').then(function(view) { ///48.85,2.34<=2

         views_results = view.getResults();
         set_event_types();
         update_styles();
         modal.hide();
      });
   }(jDrupal));
}

function set_event_types() {
   var event_type_speed_dial = document.getElementById('event_type_speed_dial');
   var html = '';
   var delta_px = -15;
   for (var event_type_it in global_event_types) {
      html += ' <ons-speed-dial-item  style="border-radius:10px; width:200px; height:30px;  margin-top: ' + delta_px + 'px; background: rgba(255,255,255,0.85); font-size:15px">' +
         '<ons-list-item style="margin-top: -10px"><img width="20%" src="https://' + BASE_URL + '/sites/' + BASE_URL + '/files/markers/' + event_type_it + '"></img>' + global_event_types[event_type_it] +
         '<div class="right"><ons-switch checked id="switch_' + event_type_it + '"></ons-switch> </div></ons-list-item></ons-speed-dial-item>';
      //  console.log(event_type_it + ": " + global_event_types[event_type_it][userSettings.langcode]);
      delta_px -= 20;
   }
   event_type_speed_dial.innerHTML = html;

   setTimeout(function() {
      for (var event_type_it in global_event_types) {
         var switch_event_type = document.getElementById('switch_' + event_type_it);
         switch_event_type.addEventListener("change", function() {
            update_filters();
         });
      }
   }, 200);

}

function update_styles() {
   var user_styles = document.getElementById('user_styles');
   var user_styles_list = document.getElementById('user_styles_list');
   var html = '';
   // console.log("newLocationViewport " + newLocationViewport);
   for (let style of global_event_styles) {
      style.count = 0;
   }
   for (i = 0; i < views_results.length; i++) {
      var locationLatlng = new google.maps.LatLng(views_results[i].field_event_address, views_results[i].field_event_address_1);
      if (newLocationViewport.contains(locationLatlng)) {
         var styles_indexes = views_results[i].field_event_styles.split(",");

         for (var k = 0; k < styles_indexes.length; k++) {
            for (const style of global_event_styles) {
               if (parseInt(styles_indexes[k]) == style.tid)
                  style.count++;
            }
         }
      }

   }

   for (const style of global_event_styles) {
      var style_state = "unchecked";
      if (userSettings.dance_styles.indexOf(style.tid) > -1) {
         style_state = "checked";
      }

      html += '<ons-list-item >' + style.name + '<sup>' + style.count + '</sup>  <div class="right"><ons-switch id="style_switch_' + style.tid + '" ' + style_state + ' ></ons-switch></div>' + '</ons-list-item>';
   }


   if (account.isAuthenticated()) {

      html += '<ons-list-item >  <ons-carousel style="width:150px" swipeable auto-scroll overscrollable id="choose_lang" >' +
         '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" >Français <ons-icon icon="fa-caret-right" /></ons-card></ons-carousel-item>' +
         '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" ><ons-icon icon="fa-caret-left" /> English <ons-icon icon="fa-caret-right" /></ons-card></ons-carousel-item>' +
         '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" ><ons-icon icon="fa-caret-left" /> Español</ons-card></ons-carousel-item>'
         //   + '<ons-carousel-item ripple><ons-card style="text-align:center; width:120px" >Русский</ons-card></ons-carousel-item>'
         +
         '</ons-carousel></ons-list-item >  ';
      var func = '';
      func += 'save_user();';
      html += '<ons-list-item > <ons-button id="save_button" onclick="' + func + '" ><ons-icon icon="md-save"></ons-icon> ' + interfaceSaveSettings[userSettings.langcode] + '</ons-button></ons-list-item>';
      setTimeout(function() {
         var carousel = document.getElementById('choose_lang');
         var index = 0;
         switch (userSettings.langcode) {
            case 'fr':
               index = 0;
               break;
            case 'en':
               index = 1;
               break;
            case 'es':
               index = 2;
               break;
               //  case 'ru' : index=3; break;
            default:
               0;
         }
         carousel.setActiveIndex(index);
      }, 100);
   }
   user_styles_list.innerHTML = html;
   setTimeout(function() {
      update_filters();

   }, 500);

}

function update_switch_types() {
   var type_switch = null;
   userSettings.event_types = [];
   for (var event_type_it in global_event_types) {
      type_switch = document.getElementById('switch_' + event_type_it);
      if (type_switch.checked)
         userSettings.event_types.push(event_type_it);

   }
}

function update_switch_styles() {
   var style_switch = null;
   userSettings.dance_styles = [];
   for (const style of global_event_styles) {
      style_switch = document.getElementById('style_switch_' + style.tid);
      if (style_switch.checked)
         userSettings.dance_styles.push(style.tid);
   }
}

function preprocess_filters() {
   if (filtersChanged) update_filters();
}

function update_filters() {
   (function($) {

      scheduler.clearAll();
      // console.log('Loading results for ' + account.getAccountName());

      if (views_results === null) {
         console.log('views_results is null');

      } else {
         console.log('Views results received: ' + views_results.length);
         var start_time = " 00:01";
         var end_time = " 23:59";
         var events = [];
         var i = 0;
         var style_switch = null;

         for (i = 0; i < views_results.length; i++) {
            var filter = true;
            var styles_indexes = views_results[i].field_event_styles.split(",");
            var event_type = views_results[i].field_event_promoicon;

            update_switch_styles();
            update_switch_types();

            for (var k = 0; k < styles_indexes.length; k++) {
               if (userSettings.dance_styles.indexOf(parseInt(styles_indexes[k])) > -1) {
                  filter = false;
                  break;
               }
            }
            if (!filter) {
               filter = true;
               if (userSettings.event_types.indexOf(event_type) > -1 || event_type == ".png") {
                  filter = false;
               }
            }
            if (!filter) {
               var locationLatlng = new google.maps.LatLng(views_results[i].field_event_address, views_results[i].field_event_address_1);
               if (newLocationViewport.contains(locationLatlng)) {

                  var event_date_range = views_results[i].field_event_date_range.split(" .. ");
                  var event_start_date = event_date_range[0];
                  var event_end_date = event_start_date;
                  if (event_date_range.length > 1) {
                     event_end_date = event_date_range[1];
                  }
                  var end = parseInt(event_end_date.substring(event_end_date.length - 2), 10) + 1;
                  var event_end_date = event_end_date.slice(0, -2) + end;

                  events.push({
                     text: views_results[i].title,
                     full_date: true,
                     start_date: event_start_date,
                     end_date: event_end_date,
                     //	date: event_start_date,
                     color: global_event_colors[event_type],
                     id: views_results[i].nid
                  });

               }

            }

         }

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

      for (var k = 0; k < styles_indexes.length; k++) {
         if (userSettings.dance_styles.indexOf(parseInt(styles_indexes[k])) > -1) {
            filter = false;
            break;
         }
      }
      if (!filter) {
         if (userSettings.event_types.indexOf(event_type) < 0) {
            for (var event_type_it in global_event_types) {
               if (event_type_it == event_type)
                  filter = true;
            }
         }
      }
      if (!filter) {
         //  var node = new $.Node(results[i]);
         filter = true;

         var event_date_range = views_results[i].field_event_date_range.split(" .. ");
         var event_start_date = event_date_range[0];
         var event_end_date = event_start_date;
         if (event_date_range.length > 1)
            event_end_date = event_date_range[1];
         var start_date = new Date(event_start_date);
         var end_date = new Date(event_end_date);
         var d = new Date(date);

         if (start_date <= d && d <= end_date) {
            filter = false;

         }

         if (!filter) {
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

            var txt = "red-dot.png";
            if (event_type != ".png")
               txt = event_type;

            if (newLocationViewport.contains(locationLatlng)) {
               var marker = new google.maps.Marker({
                  position: locationLatlng,
                  map: dd_map,
                  animation: google.maps.Animation.DROP,
                  icon: 'https://' + BASE_URL + '/sites/' + BASE_URL + '/files/markers/' + txt,
                  // label:views_results[i].title[0],
                  //  icon: 'css/dose_marker_2.png'
               });


               markers.push(marker);

               attachInfoWindow(marker, i);
            }

         }

      }
   }

   if (markers.length == 1 && document.getElementById('tabbar').getActiveTabIndex() == 0) ons.notification.toast({
      message: datepicker.innerHTML + '<br>' + interfaceNoEventsNear[userSettings.langcode] + ' <br><p>' + newLocationName.split(", ").join("<br>") + '</p>',
      timeout: 1000
   });

}
//===================NODE=======================================================

function showNode(target) {
   (function($) {


      setTimeout(function() {

         var output = document.getElementById(target);
         var editAllowed = false;

         account = $.currentUser();
         if (account.isAuthenticated()) {

            var username = account.getAccountName();
            if ("moderator" == username || "admin" == username || currentNode.author_id == account.id()) {
               editAllowed = true;

            }

            // document.getElementById('dd_modal_text').innerHTML  = entity.get("uid", 0).target_id +  " uid="+account.id()+" not allowed to modify " + entity.stringify() ;


         }
         var event_styles = [];
         for (var i = 0; i < currentNode.field_event_styles.length; i++) {
            var index = currentNode.field_event_styles[i];
            for (const style of global_event_styles) {
               if (style.tid == index) {
                  event_styles.push(style.name);
                  break;
               }
            }

         }
         var event_type_name = '';
         for (var event_type_it in global_event_types) {
            var event_type_id = currentNode.field_event_type;
            var str = event_type_id + ".png";
            if (str == event_type_it) {
               event_type_name = global_event_types[event_type_it];
            }
         }

         if (currentNode.field_event_price === "") currentNode.field_event_price = interfaceUnknown[userSettings.langcode];
         if (event_type_name === "") event_type_name = interfaceUnknown[userSettings.langcode];
         if (currentNode.field_event_time === "") currentNode.field_event_time = interfaceUnknown[userSettings.langcode];
         if (currentNode.field_event_description === "") currentNode.field_event_description = interfaceUnknown[userSettings.langcode];

         var html_output = '<ons-fab class="submit-fab" position="top left" modifier="mini"  style=" right:10px; top:10px;" onclick="onsNavigator.popPage()"  ><ons-icon icon="arrow-left"  ></ons-icon></ons-fab>' +
            '<ons-card> <ons-list >' + /*style="width:'+(window.innerWidth-50)+'px; height:'+(window.innerHeight-50) +'px; overflow-y:scroll;"*/
            '<ons-list-item tappable><h3 id="item_event_title">' + currentNode.title + ' </h3></ons-list-item>' +
            '<ons-list-item tappable><div class="left"><ons-icon icon="ion-ios-musical-notes" class="list-item__icon"> </div></ons-icon><span  id="item_event_styles">' + event_styles.join(', ') + ' </span></ons-list-item>' +
            '<ons-list-item tappable><div class="left"><ons-icon icon="fa-pencil-square-o" class="list-item__icon"></ons-icon> </div><span id="item_event_description">' + currentNode.field_event_description.split("\n").join("<br />") +
            ' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="md-calendar" class="list-item__icon"></ons-icon> </div><span id="item_event_date_range">' + currentNode.field_event_date_range_start + ' .. ' + currentNode.field_event_date_range_end +
            ' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="md-time" class="list-item__icon"></ons-icon> </div><span id="item_event_time">' + currentNode.field_event_time +
            ' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="fa-money" class="list-item__icon"></ons-icon> </div><span id="item_event_price">' + currentNode.field_event_price +
            ' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="fa-magic" class="list-item__icon"> </div></ons-icon><span  id="item_event_type">' + event_type_name +
            ' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="fa-map-marker" class="list-item__icon"> </div></ons-icon><span  id="item_event_address">' + newLocationName +
            ' </span></ons-list-item>';


         if (editAllowed) {
            html_output += '<br><ons-button onclick="nodeSave();" ><ons-icon icon="md-save"></ons-icon></ons-button>';
            //   ' <ons-button onclick="nodeConfirm();" ><ons-icon icon="fa-check-square-o"></ons-icon></ons-button>'+ 
            // ' <ons-button onclick="nodeCancel();" ><ons-icon icon="md-block"></ons-icon></ons-button>'+
            //   ' <ons-button onclick="nodeComment();" ><ons-icon icon="fa-comment-o"></ons-icon></ons-button>'+ 
            // ' <ons-button onclick="nodeRate();" ><ons-icon icon="fa-star-half-o"></ons-icon></ons-button>'+
            if (currentNode.nid !== "") html_output += ' <ons-button onclick="nodeDelete();" ><ons-icon icon="md-delete"></ons-icon></ons-button>';
         }

         html_output += '</ons-list></ons-card>';

         output.innerHTML = html_output;
         console.log('author_id: ' + currentNode.author_id);

         setTimeout(function() {

            var geocoder = new google.maps.Geocoder();
            var latlng = {
               lat: parseFloat(currentNode.field_event_address_lat),
               lng: parseFloat(currentNode.field_event_address_lng)
            };
            geocoder.geocode({
               'location': latlng
            }, function(results, status) {
               if (status === 'OK') {
                  if (results[0]) {
                     document.getElementById('item_event_address').innerHTML = results[0].formatted_address;
                  } else {
                     console.log('No results found');
                  }
               } else {
                  console.log('Geocoder failed due to: ' + status);
               }
            });

            if (editAllowed) inputsLoad();



         }, 200);
      }, 200);
   }(jDrupal));
}

function nodeLoad(isNew) {
   (function($) {

      document.getElementById('app_splitter').left.close();
      if (!isNew) {
         var modal = document.getElementById('dd_modal_load');
         modal.show();



         $.entityLoad("node", currentNode.nid).then(function(entity) {
            // $.nodeLoad(currentNode.nid).then(function(entity) {

            modal.hide();

            console.log('entity: ' + entity.stringify());

            currentNode.title = entity.get("title", 0).value;
            try {
               currentNode.field_event_description = entity.get("field_event_description", 0).value;
            } catch (err) {
               currentNode.field_event_description = interfaceUnknown[userSettings.langcode];
            }
            try {
               currentNode.field_event_price = entity.get("field_event_price", 0).value;
            } catch (err) {
               currentNode.field_event_price = interfaceUnknown[userSettings.langcode];
            }
            try {
               currentNode.field_event_time = entity.get("field_event_time", 0).value;
            } catch (err) {
               currentNode.field_event_time = interfaceUnknown[userSettings.langcode];
            }
            if (entity.get("field_event_type", 0)) currentNode.field_event_type = entity.get("field_event_type", 0).target_id;
            currentNode.field_event_address_lat = entity.get("field_event_address", 0).lat;
            currentNode.field_event_address_lng = entity.get("field_event_address", 0).lng;
            currentNode.author_id = entity.get("uid", 0).target_id;
            currentNode.entity = entity;
            currentNode.field_event_styles = [];

            // currentNode.author = entity.get("target_id", 0).value;


            currentNode.field_event_date_range_start = entity.get("field_event_date_range", 0).value;
            try {
               currentNode.field_event_date_range_end = entity.get("field_event_date_range", 0).end_value;
            } catch (err) {
               currentNode.field_event_date_range_end = entity.get("field_event_date_range", 0).value;
            }

            i = 0;
            while (entity.get("field_event_styles", i)) {
               currentNode.field_event_styles[i] = entity.get("field_event_styles", i).target_id;
               i++;
            }
            console.log(' currentNode.field_event_styles: ' + currentNode.field_event_styles);

            onsNavigator.pushPage('edit_event_page.html');
            showNode('node_edit');

         });
      } else {
         filtersChanged = false;
         nodeNew();
         account = $.currentUser();
         // currentNodу.id=0;
         // var entity= currentNode.entity;
         currentNode = {
            title: (Math.floor(1000 * Math.random()) + " Event "),
            field_event_description: "description",
            field_event_date_range_start: dd_calendar.getFormatedDate("%Y-%m-%d"),
            field_event_date_range_end: dd_calendar.getFormatedDate("%Y-%m-%d"),
            field_event_time: "00:00",
            field_event_price: "0",
            field_event_address_lat: myLatlng.lat(), //(190*Math.random()-85),
            field_event_address_lng: myLatlng.lng(), //(360*Math.random()-180),
            field_event_styles: [1],
            field_event_type: 12000,
            // nid: node.id().toString(),
            nid: "",
            author_id: account.id(),
            entity: newNode

         };
         onsNavigator.pushPage('edit_event_page.html');
         showNode('node_edit');
         /* onsNavigator.pushPage('new_event_page.html');
             showNode('node_add');  */
      }
      // document.getElementById('node_here').innerHTML ='<iframe src="https://dancedose.com/node/107" width=100% height=100%></iframe>';

      //   $('#node_here').load('"https://dancedose.com/node/107 #region region-content');
   }(jDrupal));

}

function inputsLoad() {
   console.log('Inputs load ok');
   var item_event_title = document.getElementById('item_event_title');
   item_event_title.parentElement.addEventListener("touchend", function() {
      var modal = document.getElementById('dd_modal');
      modal.innerHTML = '<ons-card>' +
         ' <ons-input id="input_event_title" placeholder="' + interfaceTitle[userSettings.langcode] + '" float class="form-group" value ="' + currentNode.title + '" ></ons-input><br>' +
         ' <ons-fab  id="submit_title" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';
      modal.show();
      setTimeout(function() {
         var submit_title = document.getElementById('submit_title');
         submit_title.addEventListener("click", function() {
            var input_event_title = document.getElementById('input_event_title');
            if (input_event_title.value != "") {
               item_event_title.innerHTML = currentNode.title = input_event_title.value;
               modal.hide();
            }

         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

      }, 100);
   });

   var item_event_styles = document.getElementById('item_event_styles');
   item_event_styles.parentElement.addEventListener("touchend", function() {

      var modal = document.getElementById('dd_modal');
      var html = '<ons-card> <ons-list> <ons-list-header>' + interfaceStyles[userSettings.langcode] + '</ons-list-header>';
      console.log("currentNode.field_event_styles: " + currentNode.field_event_styles);
      console.log("global_event_styles: " + global_event_styles);

      for (const style of global_event_styles) {
         var style_state = "unchecked";
         if (currentNode.field_event_styles.indexOf(style.tid) > -1) {
            style_state = "checked";
         }

         html += '<ons-list-item tappable><input ' + style_state + ' id="event_style_switch_' + style.tid + '" type="checkbox" class="checkbox__input checkbox--noborder__input"><div class="checkbox__checkmark checkbox--noborder__checkmark"></div> ' + style.name + '</ons-list-item>';

      }
      html += '</ons-list> <ons-fab  id="submit_styles" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';

      modal.innerHTML = html;
      modal.show();

      setTimeout(function() {
         var submit_styles = document.getElementById('submit_styles');
         submit_styles.addEventListener("click", function() {

            currentNode.field_event_styles = [];
            var event_styles = [];
            for (const style of global_event_styles) {

               event_style_switch = document.getElementById('event_style_switch_' + style.tid);
               if (event_style_switch.checked) {
                  currentNode.field_event_styles.push(style.tid);
                  event_styles.push(style.name);
               }

            }

            item_event_styles.innerHTML = event_styles.join(', ');
            modal.hide();


         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

      }, 100);
   });

   var item_event_type = document.getElementById('item_event_type');
   item_event_type.parentElement.addEventListener("touchend", function() {

      var modal = document.getElementById('dd_modal');
      var html = '<ons-card> <ons-list> <ons-list-header>' + interfaceType[userSettings.langcode] + '</ons-list-header>';
      for (var event_type_it in global_event_types) {

         var style_state = "unchecked";
         var event_type_id = event_type_it.replace(".png", "");
         if (currentNode.field_event_type == event_type_id) {
            style_state = "checked";
         }

         html += '<ons-list-item tappable><input name="event-type"  ' + style_state + ' id="event_type_switch_' + event_type_id + '" type="radio" class="checkbox__input checkbox--noborder__input"><div class="checkbox__checkmark checkbox--noborder__checkmark"></div> ' + global_event_types[event_type_it] + '</ons-list-item>';
         //	html += '<ons-list-item tappable><ons-radio name="event-type" ' + style_state +  ' input-id="event_type_switch_'+event_type_id+'" class="checkbox__input checkbox--noborder__input"  ></ons-radio><label for="event_type_switch_'+event_type_id+'">'+ global_event_types[event_type_it][userSettings.langcode]+'</label></ons-list-item>';

      }
      html += '</ons-list> <ons-fab  id="submit_type" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';

      modal.innerHTML = html;
      modal.show();

      setTimeout(function() {
         var submit_type = document.getElementById('submit_type');
         submit_type.addEventListener("click", function() {

            for (var event_type_it in global_event_types) {
               var event_type_id = event_type_it.replace(".png", "");
               var event_type_switch = document.getElementById('event_type_switch_' + event_type_id);
               if (event_type_switch.checked) {
                  currentNode.field_event_type = event_type_id;
                  break;
               }

            }

            item_event_type.innerHTML = global_event_types[event_type_it];
            modal.hide();


         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

      }, 100);
   });
   var item_event_date_range = document.getElementById('item_event_date_range');
   item_event_date_range.parentElement.addEventListener("touchend", function() {
      var modal = document.getElementById('dd_modal');
      modal.innerHTML = '<ons-card>' +
         ' <textarea rows="10" cols="40" id="input_event_date_range" placeholder="' + interfaceDates[userSettings.langcode] + '" class="form-group" >' + currentNode.field_event_date_range_start + ' .. ' + currentNode.field_event_date_range_end + '</textarea><br>' +
         ' <p style="font-style: italic; color:#f00" id="error_msg"></p><br>' +
         ' <ons-fab  id="submit_dates" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';
      modal.show();
      setTimeout(function() {
         var submit_dates = document.getElementById('submit_dates');
         submit_dates.addEventListener("click", function() {
            var input_event_date_range = document.getElementById('input_event_date_range');
            if (input_event_date_range.value != "") {
               var str = input_event_date_range.value;
               str = str.replace(/\s+/g, '');
               var dates = str.split("..");
               var start_date = dates[0];
               var end_date = dates[1];
               var error_html = "Invalid dates: ";
               var error = false;
               var d;
               for (var i = 0; i < dates.length; i++) {
                  d = new Date(dates[i]);
                  if (isNaN(d.getDate())) {
                     if (error) error_html += ' ,';
                     error = true;
                     error_html += dates[i] + ' ';
                  } else {
                     var mm = ("0" + (d.getMonth() + 1)).slice(-2);
                     var dd = ("0" + d.getDate()).slice(-2);
                     var yy = d.getFullYear();
                     dates[i] = yy + '-' + mm + '-' + dd;
                  }


               }
               if (!error) {

                  currentNode.field_event_date_range_start = dates[0];
                  if (dates.length > 1)
                     currentNode.field_event_date_range_end = dates[1];
                  else
                     currentNode.field_event_date_range_end = dates[0];
                  item_event_date_range.innerHTML = currentNode.field_event_date_range_start + " .. " + currentNode.field_event_date_range_end;
                  modal.hide();
               } else {
                  document.getElementById('error_msg').innerHTML = error_html;
               }
            }

         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

      }, 100);

   });
   var item_event_time = document.getElementById('item_event_time');
   item_event_time.parentElement.addEventListener("touchend", function() {
      var modal = document.getElementById('dd_modal');
      modal.innerHTML = '<ons-card>' +
         ' <ons-input id="input_event_time" placeholder="' + interfaceTime[userSettings.langcode] + '" float class="form-group" value ="' + currentNode.field_event_time + '" ></ons-input><br>' +
         ' <ons-fab  id="submit_time" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';
      modal.show();
      setTimeout(function() {
         var submit_time = document.getElementById('submit_time');
         submit_time.addEventListener("click", function() {
            var input_event_time = document.getElementById('input_event_time');
            if (input_event_time.value != "") {
               item_event_time.innerHTML = currentNode.field_event_time = input_event_time.value;
               modal.hide();
            }

         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

      }, 100);
   });
   var item_event_description = document.getElementById('item_event_description');
   item_event_description.parentElement.addEventListener("touchend", function() {
      var modal = document.getElementById('dd_modal');
      modal.innerHTML = '<ons-card>' +
         ' <textarea rows="10" cols="40" id="input_event_description" placeholder="' + interfaceDescription[userSettings.langcode] + '"  class="form-group" >' + currentNode.field_event_description + '</textarea><br>' +
         ' <ons-fab  id="submit_description" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';
      modal.show();
      setTimeout(function() {
         var submit_description = document.getElementById('submit_description');
         submit_description.addEventListener("click", function() {
            var input_event_description = document.getElementById('input_event_description');
            if (input_event_description.value != "") {
               currentNode.field_event_description = input_event_description.value;
               item_event_description.innerHTML = currentNode.field_event_description.split("\n").join("<br />");
               modal.hide();
            }

         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

      }, 100);
   });
   var item_event_price = document.getElementById('item_event_price');
   item_event_price.parentElement.addEventListener("touchend", function() {
      var modal = document.getElementById('dd_modal');
      modal.innerHTML = '<ons-card>' +
         ' <ons-input id="input_event_price" placeholder="' + interfacePrice[userSettings.langcode] + '" float class="form-group" value ="' + currentNode.field_event_price + '" ></ons-input><br>' +
         ' <ons-fab  id="submit_price" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';
      modal.show();
      setTimeout(function() {
         var submit_price = document.getElementById('submit_price');
         submit_price.addEventListener("click", function() {
            var input_event_price = document.getElementById('input_event_price');
            if (input_event_price.value != "") {
               item_event_price.innerHTML = currentNode.field_event_price = input_event_price.value;
               modal.hide();
            }

         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

      }, 100);
   });


   var item_event_address = document.getElementById('item_event_address');
   item_event_address.parentElement.addEventListener("touchend", function() {
      var modal = document.getElementById('dd_modal');
      modal.innerHTML = '<ons-card>' +
         ' <ons-input id="input_event_address" placeholder="' + interfaceAddress[userSettings.langcode] + '" float class="form-group" value ="' + '" ></ons-input><br>' +
         ' <ons-fab  id="submit_address" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>' +
         ' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>' +
         '</ons-card>';
      modal.show();
      setTimeout(function() {
         var submit_address = document.getElementById('submit_address');
         var input_event_address = document.getElementById('input_event_address');
         input_event_address.value = newLocationName; //newLocationViewport;
         currentNode.field_event_address_lat = myLatlng.lat();
         currentNode.field_event_address_lng = myLatlng.lng();
         submit_address.addEventListener("click", function() {
            if (input_event_address.value != "") {
               item_event_address.innerHTML = input_event_address.value;
               modal.hide();
            }

         });
         var cancel_input = document.getElementById('cancel_input');
         cancel_input.addEventListener("click", function() {
            modal.hide();
         });

         // event_map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

         var autocomplete = new google.maps.places.Autocomplete(input_event_address);
         autocomplete.bindTo('bounds', dd_map);

         google.maps.event.addListener(autocomplete, 'place_changed', function() {
            var place = autocomplete.getPlace();
            if (!place.geometry) {
               console.log("Returned place contains no geometry");
               return;
            }
            //input_event_address.value = place.geometry.location.lat() +  " " + place.geometry.location.lng();
            //input_event_address.value = place.geometry.location;
            currentNode.field_event_address_lat = place.geometry.location.lat();
            currentNode.field_event_address_lng = place.geometry.location.lng();

            // newLocation = place.geometry.location;

         });

      }, 200);
   });

}

function nodeNew() {
   (function($) {
      newNode = new $.Node({
         type: [{
            target_id: 'event'
         }],
         title: [{
            value: 'xxx'
         }],
         field_event_address: [{
            lat: '48.8492606',
            lng: '2.3745117999999'
         }],
         field_event_description: [{
            value: 'description'
         }],
         //field_event_date: [{value:'2017-10-09'}],
         field_event_date_range: [{
            value: '2017-10-09',
            end_value: '2017-10-09'
         }],
         field_event_price: [{
            value: '$1'
         }],
         field_event_time: [{
            value: '23:59'
         }],
         field_event_type: [{
            target_id: '12000'
         }],
         field_event_styles: [{
            target_id: '1'
         }],
         field_event_type: [{
            target_id: '12000'
         }],
         nid: [{
            value: ''
         }]
      });

   }(jDrupal));
}

function nodeDelete() {

   var dialog = document.getElementById('dd_dialog_custom');
   dialog.show();
   document.getElementById('dd_dialog_inner').innerHTML = '<div class="alert-dialog-content"><p style="font-weight: bold; font-style: italic; color:#f00" >' + currentNode.title + ' ' + interfaceWillBeDeleted[userSettings.langcode] + '</p></div>' +
      '<div class="alert-dialog-footer"><button class="alert-dialog-button" id="confirmed" >' + interfaceOk[userSettings.langcode] + '</button><button class="alert-dialog-button" id="canceled">' + interfaceCancel[userSettings.langcode] + '</button></div>';
   setTimeout(function() {
      var confirmed = document.getElementById('confirmed');
      confirmed.addEventListener("click", function() {
         dialog.hide();
         nodeDeleteConfirmed();
      });
      var canceled = document.getElementById('canceled');
      canceled.addEventListener("click", function() {
         dialog.hide();
      });
   }, 200);

}

function nodeDeleteConfirmed() {
   (function($) {

      var modal = document.getElementById('dd_modal_delete');
      modal.show();
      currentNode.entity.delete(currentNode.nid).then(function() {
         modal.hide();
         console.log('Node ' + currentNode.nid + ' deleted!');
         newNode = null;
         //currentNode = null;
         //	window.location.reload(true);
         ons.notification.toast({
            message: interfaceNodeDeleted[userSettings.langcode],
            timeout: 2000
         });
         onsNavigator.popPage();
         start_auth();
      });
   }(jDrupal));
}

function nodeSave() {
   (function($) {

      var modal = document.getElementById('dd_modal_save');

      modal.show();

      if (currentNode.nid !== "") {
         nodeNew();
         currentNode.entity = newNode;
         currentNode.entity.entity["nid"][0].value = currentNode.nid;
         console.log('node to save: ' + currentNode.nid + " entity id =" + currentNode.entity.id() + " title=" + document.getElementById('item_event_title').innerHTML);
      } else {
         delete currentNode.entity.entity.nid;
      }

      console.log('Before :\n ' + currentNode.entity.stringify());

      currentNode.entity.set("title", 0, currentNode.title);

      //	currentNode.entity.set("field_event_date", i, currentNode.field_event_dates[i]);
      currentNode.entity.entity.field_event_date_range[0].value = currentNode.field_event_date_range_start;
      try {
         currentNode.entity.entity.field_event_date_range[0].end_value = currentNode.field_event_date_range_end;
      } catch (err) {
         currentNode.entity.entity.field_event_date_range[0].end_value = currentNode.field_event_date_range_start;
      }

      i = 0;
      currentNode.entity.entity.field_event_styles = [];
      while (currentNode.field_event_styles[i]) {
         var us = {
            target_id: currentNode.field_event_styles[i]
         };
         currentNode.entity.entity.field_event_styles.push(us);
         i++;
      }

      currentNode.entity.set("field_event_description", 0, currentNode.field_event_description);
      currentNode.entity.set("field_event_price", 0, currentNode.field_event_price);
      currentNode.entity.set("field_event_time", 0, currentNode.field_event_time);

      currentNode.entity.entity.field_event_type[0].target_id = currentNode.field_event_type;

      currentNode.entity.entity.field_event_address[0].lat = currentNode.field_event_address_lat;
      currentNode.entity.entity.field_event_address[0].lng = currentNode.field_event_address_lng;

      console.log('After :\n ' + currentNode.entity.stringify());
      console.log("user is: " + account.id());

      currentNode.entity.save().then(function() {
            console.log('Saved node # ' + currentNode.entity.id());
            modal.hide();
            // nodeLoad();

            currentNode.entity.postSave().then(function() {
               ons.notification.toast({
                  message: interfaceNodeSaved[userSettings.langcode],
                  timeout: 2000
               });
               onsNavigator.popPage();

               //	window.location.reload(true);
               start_auth();

            });

         },
         function(err) {
            //console.log("user login error: " + JSON.stringify(err) );
            modal.hide();
            var link;
            if (SWING_MODE) link = "https://swing.dancedose.com/swingdose";
            else if (TANGO_MODE) link = "https://tango.dancedose.com/tangodose";

            ons.notification.toast({
               message: interfaceNodeNotSaved[userSettings.langcode] +" "+ currentNode.title +
                  '<br><a href="' + link + '">' + interfaceNodeAskPermission[userSettings.langcode] + '</a>',
               timeout: 3000,
               cancelable: true
            });
         });



   }(jDrupal));

}
//===================DEAD=======================================================

function checkLoginStateG() {
   window.plugins.googleplus.trySilentLogin({
         'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
         'webClientId': '274492602001-p7v19adot9um1f1em6r8ifpnrc4tp0fl.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
         'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      },
      function(obj) {
         alert(JSON.stringify(obj)); // do something useful instead of alerting
         function onSignIn(googleUser) {
            var id_token = googleUser.getAuthResponse().id_token;
            alert(id_token);
         }

      },
      function(msg) {
         alert('error: ' + msg);
      }
   );

}

window.fbAsyncInit = function() {
   FB.init({
      appId: '755677894589497',
      cookie: true,
      xfbml: true,
      version: 'v2.8'
   });

   FB.AppEvents.logPageView();

};

(function(d, s, id) {
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {
      return;
   }
   js = d.createElement(s);
   js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function checkLoginStateF() {

   var fbLoginSuccess = function(userData) {
      alert("UserInfo: " + JSON.stringify(userData));
      facebookConnectPlugin.getAccessToken(function(token) {
         alert("Token: " + token);
      }, function(err) {
         alert("Could not get access token: " + err);
      });
   }

   facebookConnectPlugin.login(["public_profile"],
      fbLoginSuccess,
      function(error) {
         alert("" + error)
      }
   );


   openFB.init({
      appId: '755677894589497',
      cookie: true,
      xfbml: true,
      version: 'v2.8'
   });
   openFB.login(
      function(response) {
         if (response.status === 'connected') {
            alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
            var accessData = response.authResponse;
            // Logged into your app and Facebook.
            var data = {
               source: 'facebook',
               access_token: accessData.accessToken
            };

            var req = new XMLHttpRequest();
            req.open('POST', '/social-connect/handle?source=facebook&access_token=' + accessData.accessToken);
            req.setRequestHeader('Content-type', 'application/json;  charset=utf-8', true);
            req.onreadystatechange = function() { //Call a function when the state changes.
               if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                  window.location.reload(true);
               }
            }
            req.send();
         } else {
            alert('Facebook login failed: ' + response.error);
         }
      }, {
         scope: 'email,read_stream,publish_actions'
      });



   FB.getLoginStatus(function(response) {

      alert("authResponse .accessToken  : " + response.authResponse.accessToken);

      if (response.status === "connected") {
         var accessData = response.authResponse;
         // Logged into your app and Facebook.
         var data = {
            source: 'facebook',
            access_token: accessData.accessToken
         };

         var req = new XMLHttpRequest();
         req.open('POST', '/social-connect/handle?source=facebook&access_token=' + accessData.accessToken);
         req.setRequestHeader('Content-type', 'application/json;  charset=utf-8', true);
         req.onreadystatechange = function() { //Call a function when the state changes.
            if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
               window.location.reload(true);
            }
         }
         req.send();

      }

   });
}

function pushDayEventsPage() {
   onsNavigator.pushPage('list_events_page.html');
   setTimeout(function() {
      var output = document.getElementById('list_events');
      // var modal = document.getElementById('dd_modal'); 

      var html_open_item = '<ons-list-item modifier="chevron" tappable>';
      var html_close_item = '</ons-list-item>';
      var html_list = '';

      for (i = 0; i < views_results.length; i++) {

         var locationLatlng = new google.maps.LatLng(views_results[i].field_event_address, views_results[i].field_event_address_1);
         if (newLocationViewport.contains(locationLatlng)) {
            var filter = true;
            var styles_indexes = views_results[i].field_event_styles.split(",");

            update_switch_styles();

            for (var k = 0; k < styles_indexes.length; k++) {
               if (userSettings.dance_styles.indexOf(parseInt(styles_indexes[k])) > -1) {
                  filter = false;
                  break;
               }
            }
            if (!filter) {
               //  var node = new $.Node(results[i]);
               var event_date_range = views_results[i].field_event_date_range.split(" .. ");
               var event_start_date = event_date_range[0];
               var event_end_date = event_start_date;
               if (event_date_range.length > 1)
                  event_end_date = event_date_range[1];
               var start_date = new Date(event_start_date);
               var end_date = new Date(event_end_date);
               var date = new Date(ev.date);
               console.log(start_date + " <= " + date + " <= " + end_date);
               if (start_date <= date && date <= end_date) {
                  html_list += html_open_item;
                  //	console.log('Loaded: ' + views_results[i].field_event_date.length + ' dates for ' + views_results[i].field_event_date);

                  html_list += '<div id="item_' + i + '" class="center" onclick="gotoNid(' + views_results[i].nid + '); "><span class="list-item__title">' + views_results[i].title +
                     views_results[i].field_event_time + '</span></div>';

                  html_list += html_close_item;


               }
            }
         }
      }

      output.innerHTML = '<ons-fab class="submit-fab" position="top left" modifier="mini"  style=" right:10px; top:10px;" onclick="onsNavigator.popPage()"  ><ons-icon icon="arrow-left"  ></ons-icon></ons-fab>' +
         '<ons-card ><br><div ><h4>' + ev.date + '</h4></div><div class="content" ><ons-list >' + /*style="height:'+(window.innerHeight-100) +'px; overflow-y:scroll;"*/

         html_list + '</ons-list></div></ons-card>';
      // modal.show();
   }, 100);

   window.onbeforeunload = function() {
      modalHide();
   };
}

function searchFilter() {
   var search_styles = dhtmlXComboFromSelect("search_styles");
   search_styles.enableFilteringMode(true);
   search_styles.enableAutocomplete();
   search_styles.setSkin("material");

   for (k = 1; k < global_event_styles.length; k++) {
      search_styles.addOption(k, global_event_styles[k]);

   }

   search_styles.attachEvent("onSelectionChange", function() {
      var index = search_styles.getSelectedValue();
      if (userSettings.dance_styles.indexOf(search_styles.getSelectedValue()) < 0) {
         userStylesList.add({
            style: global_event_styles[index],
            id: index
         });
         userSettings.dance_styles.push(index);
      }
      console.log("Choice: " + search_styles.getSelectedValue());

      console.log('Addition userSettings.dance_styles: ' + userSettings.dance_styles);

   });
}