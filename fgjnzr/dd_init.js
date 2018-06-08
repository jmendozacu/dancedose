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

var newNode=null;
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
		field_event_address_lat:"",
		field_event_address_lng:"",
		field_event_styles: [],
		field_event_type: "",
		nid: "107",
		author_id : "1",
		entity:""
};

var global_event_styles = [];
var global_event_colors = null;
var global_event_types  = {};
var types_rest_path;
var styles_rest_path;
if(SWING_MODE)
{
   
    BASE_URL = 'swing.dancedose.com';
    types_rest_path = 'swingtypesapp';
    styles_rest_path = 'swingstylesapp';
    global_event_colors = {
        "10000.png":"#999999",   //grey
        "11000.png":"#87CEEB",   //skyblue
        "12000.png":"#DB7093",   //pink      
        "13000.png":"#FFD700",   // GOLD
        "14000.png":"#FF8C00 ",  // orange           
        "15000.png":"#32CD32",   // green  
        ".png":"red"  
    };  

}                       
else if(TANGO_MODE)
{
   
    BASE_URL = 'tango.dancedose.com';
    types_rest_path = 'tangotypesapp';
    styles_rest_path = 'tangostylesapp';
    global_event_colors = {
        "15009.png":"#999999",   //grey
        "15008.png":"#87CEEB",   //skyblue
        "15001.png":"#DB7093",   //pink      
        "15002.png":"#FFD700",   // GOLD
        "15003.png":"#FF0000",  // RED    
        "15006.png":"#FF8C00 ",  // orange
        "15005.png":"#32CD32",   // green  
        "15004.png":"#4B0082",   //  purple 
        "15007.png":"#4169E1",   // royal blue
        ".png":"red"
    };
}



var account;
var userSettings = {
		username: "",
		password: "",
		uid: "107",
		dance_styles: [],
		event_types: [],
		langcode : "fr",
		entity:null
};

var username = "";
var password = "";

var html_output_prev = "";
var prev_infowindow =null;

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
 
function getCSS(){
         
         var cssId = 'myCss';  // you could encode the css path itself to generate id..
       // if (!document.getElementById(cssId))
    //    {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            var user_pic = document.getElementById('user_pic');
            if ( SWING_MODE)
            {
                link.href = 'css/dd_swing_style.css';
                user_pic.src = "css/swing_white.png" ;
            }
            else if ( TANGO_MODE) {
                link.href = 'css/dd_tango_style.css';
                user_pic.src = "css/tango_white.png" ;
            }
            link.media = 'all';
            head.appendChild(link);
  
        if (navigator.userAgent.match(/(iPad|iPhone|iPod|iphone|)/g) || navigator.userAgent.toUpperCase().includes("iphone") || navigator.userAgent.toUpperCase().includes("iPod") || navigator.userAgent.toUpperCase().includes("iPad")) {
               document.addEventListener('DOMNodeInserted', function() {  //DOMNodeInserted MutationObserver
                       var containers =  document.getElementsByClassName("pac-container");
                        for (i = 0; i < containers.length; i++) {
                              containers[i].addEventListener('touchstart', function(e) {
                                      e.stopImmediatePropagation();
                                      // ons.notification.toast({message: "touchend", timeout: 1000});
                                  }, { passive: true });
                        }
                     }, false
                     );  
        }
                

            
     //   }
}