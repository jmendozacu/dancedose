
function showNode(target) {
	(function($) {


		setTimeout(function() {

			var output = document.getElementById(target);
			var editAllowed=false;

			account = $.currentUser();
			if(account.isAuthenticated()){

				var username = account.getAccountName();
				if( "moderator" == username || "admin" == username ||  currentNode.author_id == account.id() ){
					editAllowed =true;

				}

				// document.getElementById('dd_modal_text').innerHTML  = entity.get("uid", 0).target_id +  " uid="+account.id()+" not allowed to modify " + entity.stringify() ;


			}
			var event_styles = [];
			for(var i=0; i< currentNode.field_event_styles.length; i++) 
			{
				var index = currentNode.field_event_styles[i];
					for(const style of global_event_styles) 
	            	{
	            	    if(style.tid == index)
	            	    {
	            	        event_styles.push(style.name);
	            	        break;
	            	    }
	            	}
			
			}
			var event_type_name = '';
			for(var event_type_it in global_event_types)
              {
                  var event_type_id = currentNode.field_event_type;
                  var str = event_type_id + ".png";
                  if( str == event_type_it ) 
                  {
                      event_type_name = global_event_types[event_type_it];
                  }
              }

            if(currentNode.field_event_price === "") currentNode.field_event_price =  interfaceUnknown[userSettings.langcode];
            if(event_type_name === "") event_type_name = interfaceUnknown[userSettings.langcode];
            if(currentNode.field_event_time === "") currentNode.field_event_time =  interfaceUnknown[userSettings.langcode];
            if(currentNode.field_event_description === "") currentNode.field_event_description =  interfaceUnknown[userSettings.langcode];
           
			var html_output = '<ons-fab class="submit-fab" position="top left" modifier="mini"  style=" right:10px; top:10px;" onclick="onsNavigator.popPage()"  ><ons-icon icon="arrow-left"  ></ons-icon></ons-fab>' +
			'<ons-card> <ons-list >' + /*style="width:'+(window.innerWidth-50)+'px; height:'+(window.innerHeight-50) +'px; overflow-y:scroll;"*/
			'<ons-list-item tappable><h3 id="item_event_title">' + currentNode.title + ' </h3></ons-list-item>'+
			'<ons-list-item tappable><div class="left"><ons-icon icon="ion-ios-musical-notes" class="list-item__icon"> </div></ons-icon><span  id="item_event_styles">'+ event_styles.join(', ') + ' </span></ons-list-item>'+
			'<ons-list-item tappable><div class="left"><ons-icon icon="fa-pencil-square-o" class="list-item__icon"></ons-icon> </div><span id="item_event_description">' + currentNode.field_event_description.split("\n").join("<br />") +
			' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="md-calendar" class="list-item__icon"></ons-icon> </div><span id="item_event_date_range">' + currentNode.field_event_date_range_start + ' .. ' + currentNode.field_event_date_range_end   +
			' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="md-time" class="list-item__icon"></ons-icon> </div><span id="item_event_time">' + currentNode.field_event_time + 
			' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="fa-money" class="list-item__icon"></ons-icon> </div><span id="item_event_price">' + currentNode.field_event_price + 
			' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="fa-magic" class="list-item__icon"> </div></ons-icon><span  id="item_event_type">' + event_type_name +
			' </span></ons-list-item><ons-list-item tappable><div class="left"><ons-icon icon="fa-map-marker" class="list-item__icon"> </div></ons-icon><span  id="item_event_address">' + newLocationName +
			' </span></ons-list-item>';


			if(editAllowed){
				html_output+='<br><ons-button onclick="nodeSave();" ><ons-icon icon="md-save"></ons-icon></ons-button>'; 
				//   ' <ons-button onclick="nodeConfirm();" ><ons-icon icon="fa-check-square-o"></ons-icon></ons-button>'+ 
				// ' <ons-button onclick="nodeCancel();" ><ons-icon icon="md-block"></ons-icon></ons-button>'+
				//   ' <ons-button onclick="nodeComment();" ><ons-icon icon="fa-comment-o"></ons-icon></ons-button>'+ 
				// ' <ons-button onclick="nodeRate();" ><ons-icon icon="fa-star-half-o"></ons-icon></ons-button>'+
				if (currentNode.nid!=="") html_output+=' <ons-button onclick="nodeDelete();" ><ons-icon icon="md-delete"></ons-icon></ons-button>';     
			}

			html_output+='</ons-list></ons-card>';

			output.innerHTML = html_output;
			console.log('author_id: ' + currentNode.author_id);

			setTimeout(function() {

				var geocoder = new google.maps.Geocoder();
				var latlng = {lat: parseFloat(currentNode.field_event_address_lat), lng: parseFloat(currentNode.field_event_address_lng)};
				geocoder.geocode({'location': latlng}, function(results, status) {
					if (status === 'OK') {
						if (results[0]) {
							document.getElementById('item_event_address').innerHTML  = results[0].formatted_address  ;
						} else {
							console.log('No results found');
						}
					} else {
						console.log('Geocoder failed due to: ' + status);
					}
				});

				if(editAllowed)  inputsLoad();



			}, 200);
		}, 200);
	}(jDrupal));
}

function nodeLoad(isNew) {
	(function($) {

		document.getElementById('app_splitter').left.close();
		if(!isNew){
			var modal = document.getElementById('dd_modal_load');
			modal.show();



			$.entityLoad("node", currentNode.nid).then(function(entity) {
				// $.nodeLoad(currentNode.nid).then(function(entity) {

				modal.hide();

				console.log('entity: ' + entity.stringify()); 

				currentNode.title = entity.get("title", 0).value;
			 	try	{  	currentNode.field_event_description = entity.get("field_event_description", 0).value;}
			 	catch(err){   currentNode.field_event_description = interfaceUnknown[userSettings.langcode];	}
			 	try	{  	currentNode.field_event_price = entity.get("field_event_price", 0).value;}
			 	catch(err){   currentNode.field_event_price = interfaceUnknown[userSettings.langcode];	}			 	
			 	try	{  	currentNode.field_event_time = entity.get("field_event_time", 0).value;	}
			 	catch(err){   currentNode.field_event_time = interfaceUnknown[userSettings.langcode];	}
			  	if (entity.get("field_event_type", 0)) currentNode.field_event_type = entity.get("field_event_type", 0).target_id;
				currentNode.field_event_address_lat = entity.get("field_event_address", 0).lat;
				currentNode.field_event_address_lng = entity.get("field_event_address", 0).lng;
				currentNode.author_id = entity.get("uid", 0).target_id;
				currentNode.entity = entity;
				currentNode.field_event_styles=[];

				// currentNode.author = entity.get("target_id", 0).value;


			    currentNode.field_event_date_range_start = entity.get("field_event_date_range", 0).value;
			    try	{ currentNode.field_event_date_range_end = entity.get("field_event_date_range", 0).end_value;}
			    catch(err){   currentNode.field_event_date_range_end = entity.get("field_event_date_range", 0).value;	}
		
				i = 0;
				while(entity.get("field_event_styles", i))
				{
					currentNode.field_event_styles[i] = entity.get("field_event_styles", i).target_id;
					i++;
				}
				console.log(' currentNode.field_event_styles: ' +  currentNode.field_event_styles); 

				onsNavigator.pushPage('edit_event_page.html');
				showNode('node_edit');      

			});
		}
		else
		{
			filtersChanged = false;
			nodeNew();
			account = $.currentUser();
			// currentNodу.id=0;
			// var entity= currentNode.entity;
			currentNode = {
					title: (Math.floor(1000*Math.random())+" Event "),
					field_event_description: "description",
					field_event_date_range_start: dd_calendar.getFormatedDate("%Y-%m-%d"),
					field_event_date_range_end: dd_calendar.getFormatedDate("%Y-%m-%d"),
					field_event_time: "00:00",
					field_event_price: "0",
					field_event_address_lat:myLatlng.lat(),//(190*Math.random()-85),
					field_event_address_lng:myLatlng.lng(),//(360*Math.random()-180),
					field_event_styles: [1],
					field_event_type: 12000,
					// nid: node.id().toString(),
					nid:"",
					author_id:account.id(),
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
	item_event_title.addEventListener("touchend", function() {
		var modal = document.getElementById('dd_modal');
		modal.innerHTML = '<ons-card>' +
		' <ons-input id="input_event_title" placeholder="'+interfaceTitle[userSettings.langcode]+'" float class="form-group" value ="' + currentNode.title + '" ></ons-input><br>' +
		' <ons-fab  id="submit_title" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>';
		modal.show();
		setTimeout(function() {
			var submit_title = document.getElementById('submit_title');
			submit_title.addEventListener("click", function() {
				var input_event_title = document.getElementById('input_event_title');
				if(input_event_title.value !="") 
				{
					item_event_title.innerHTML=currentNode.title=input_event_title.value;
					modal.hide();
				}

			});
			var cancel_input = document.getElementById('cancel_input');
			cancel_input.addEventListener("click", function() {
				modal.hide();
			});

		}, 100);
	});

	var item_event_styles= document.getElementById('item_event_styles');
	item_event_styles.addEventListener("touchend", function() {

		var modal = document.getElementById('dd_modal');
		var html =  '<ons-card> <ons-list> <ons-list-header>'+interfaceStyles[userSettings.langcode]+'</ons-list-header>';
		console.log("currentNode.field_event_styles: "+currentNode.field_event_styles);
		console.log("global_event_styles: "+global_event_styles);

		for(const style of global_event_styles) 
		{
			var style_state = "unchecked";
			if (currentNode.field_event_styles.indexOf(style.tid) > -1){
				style_state = "checked";
			}

			html += '<ons-list-item tappable><input ' + style_state +  ' id="event_style_switch_'+style.tid+'" type="checkbox" class="checkbox__input checkbox--noborder__input"><div class="checkbox__checkmark checkbox--noborder__checkmark"></div> '+style.name+'</ons-list-item>';

		}
		html +=  '</ons-list> <ons-fab  id="submit_styles" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>'; 

		modal.innerHTML = html;
		modal.show();

		setTimeout(function() {
			var submit_styles = document.getElementById('submit_styles');
			submit_styles.addEventListener("click", function() {

				currentNode.field_event_styles=[];
				var event_styles = [];
				for(const style of global_event_styles) 
				{
			
					event_style_switch = document.getElementById('event_style_switch_'+style.tid);
					if(event_style_switch.checked)
					{
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
	
    var item_event_type= document.getElementById('item_event_type');
	item_event_type.addEventListener("touchend", function() {

		var modal = document.getElementById('dd_modal');
		var html =  '<ons-card> <ons-list> <ons-list-header>'+interfaceType[userSettings.langcode]+'</ons-list-header>';
	    for(var event_type_it in global_event_types)
        {
           
			var style_state = "unchecked";
			var event_type_id =  event_type_it.replace(".png",""); 
			if (currentNode.field_event_type == event_type_id){
				style_state = "checked";
			}

			html += '<ons-list-item tappable><input name="event-type"  ' + style_state +  ' id="event_type_switch_'+event_type_id+'" type="radio" class="checkbox__input checkbox--noborder__input"><div class="checkbox__checkmark checkbox--noborder__checkmark"></div> '+ global_event_types[event_type_it]+'</ons-list-item>';
        //	html += '<ons-list-item tappable><ons-radio name="event-type" ' + style_state +  ' input-id="event_type_switch_'+event_type_id+'" class="checkbox__input checkbox--noborder__input"  ></ons-radio><label for="event_type_switch_'+event_type_id+'">'+ global_event_types[event_type_it][userSettings.langcode]+'</label></ons-list-item>';

		}
		html +=  '</ons-list> <ons-fab  id="submit_type" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>'; 

		modal.innerHTML = html;
		modal.show();

		setTimeout(function() {
			var submit_type = document.getElementById('submit_type');
			submit_type.addEventListener("click", function() {

				for(var event_type_it in global_event_types)
                 {
                    var event_type_id =  event_type_it.replace(".png",""); 
					var event_type_switch = document.getElementById('event_type_switch_'+event_type_id);
					if(event_type_switch.checked)
					{
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
	item_event_date_range.addEventListener("touchend", function() {
		var modal = document.getElementById('dd_modal');
		modal.innerHTML = '<ons-card>' +
		' <textarea rows="10" cols="40" id="input_event_date_range" placeholder="'+interfaceDates[userSettings.langcode]+'" class="form-group" >' + currentNode.field_event_date_range_start + ' .. ' + currentNode.field_event_date_range_end + '</textarea><br>' +
		' <p style="font-style: italic; color:#f00" id="error_msg"></p><br>'+
		' <ons-fab  id="submit_dates" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>';
		modal.show();
		setTimeout(function() {
			var submit_dates = document.getElementById('submit_dates');
			submit_dates.addEventListener("click", function() {
				var input_event_date_range = document.getElementById('input_event_date_range');
				if(input_event_date_range.value !="") 
				{
					var str = input_event_date_range.value;
					str = str.replace(/\s+/g, '');
					var dates = str.split("..");
					var start_date = dates[0];
					var end_date = dates[1];
					var error_html = "Invalid dates: ";
					var error = false;
					var d;
					for(var i=0; i<dates.length; i++)
					{
						d = new Date(dates[i]);
						if ( isNaN ( d.getDate() ) )
						{
							if(error) error_html += ' ,';
							error=true;
							error_html +=  dates[i] + ' ';
						}
						else
						{
        					 var mm = ("0" + (d.getMonth() + 1)).slice(-2);
                             var dd = ("0" + d.getDate()).slice(-2);
                             var yy = d.getFullYear();
                             dates[i] = yy +'-'+mm+'-'+dd;
						}
                     

					}
					if(!error)
					{
						
						currentNode.field_event_date_range_start = dates[0];
						if(dates.length>1)
						    currentNode.field_event_date_range_end = dates[1];
						else 
						    currentNode.field_event_date_range_end = dates[0];
						item_event_date_range.innerHTML=currentNode.field_event_date_range_start + " .. " + currentNode.field_event_date_range_end;
						modal.hide();
					}
					else
					{
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
	item_event_time.addEventListener("touchend", function() {
		var modal = document.getElementById('dd_modal');
		modal.innerHTML = '<ons-card>' +
		' <ons-input id="input_event_time" placeholder="'+interfaceTime[userSettings.langcode]+'" float class="form-group" value ="' + currentNode.field_event_time + '" ></ons-input><br>' +
		' <ons-fab  id="submit_time" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>';
		modal.show();
		setTimeout(function() {
			var submit_time = document.getElementById('submit_time');
			submit_time.addEventListener("click", function() {
				var input_event_time = document.getElementById('input_event_time');
				if(input_event_time.value !="") 
				{
					item_event_time.innerHTML=currentNode.field_event_time=input_event_time.value;
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
	item_event_description.addEventListener("touchend", function() {
		var modal = document.getElementById('dd_modal');
		modal.innerHTML = '<ons-card>' +
		' <textarea rows="10" cols="40" id="input_event_description" placeholder="'+interfaceDescription[userSettings.langcode]+'"  class="form-group" >' + currentNode.field_event_description + '</textarea><br>' +
		' <ons-fab  id="submit_description" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>';
		modal.show();
		setTimeout(function() {
			var submit_description = document.getElementById('submit_description');
			submit_description.addEventListener("click", function() {
				var input_event_description = document.getElementById('input_event_description');
				if(input_event_description.value !="") 
				{
					currentNode.field_event_description=input_event_description.value;
					item_event_description.innerHTML=currentNode.field_event_description.split("\n").join("<br />");
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
	item_event_price.addEventListener("touchend", function() {
		var modal = document.getElementById('dd_modal');
		modal.innerHTML = '<ons-card>' +
		' <ons-input id="input_event_price" placeholder="'+interfacePrice[userSettings.langcode]+'" float class="form-group" value ="' + currentNode.field_event_price + '" ></ons-input><br>' +
		' <ons-fab  id="submit_price" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>';
		modal.show();
		setTimeout(function() {
			var submit_price = document.getElementById('submit_price');
			submit_price.addEventListener("click", function() {
				var input_event_price = document.getElementById('input_event_price');
				if(input_event_price.value !="") 
				{
					item_event_price.innerHTML=currentNode.field_event_price=input_event_price.value;
					modal.hide();
				}

			});
			var cancel_input = document.getElementById('cancel_input');
			cancel_input.addEventListener("click", function() {
				modal.hide();
			});

		}, 100);             
	});



	var item_event_address= document.getElementById('item_event_address');
	item_event_address.addEventListener("touchend", function() {
		var modal = document.getElementById('dd_modal');
		modal.innerHTML = '<ons-card>' +
		' <ons-input id="input_event_address" placeholder="'+interfaceAddress[userSettings.langcode]+'" float class="form-group" value ="' + '" ></ons-input><br>' +
		' <ons-fab  id="submit_address" class="submit-fab"><ons-icon icon="send"></ons-icon></ons-fab>'+
		' <ons-fab  id="cancel_input" class="submit-fab"><ons-icon icon="arrow-left"></ons-icon></ons-fab>'+
		'</ons-card>';
		modal.show();
		setTimeout(function() {
			var submit_address = document.getElementById('submit_address');
			var input_event_address = document.getElementById('input_event_address');
			input_event_address.value = newLocationName; //newLocationViewport;
			currentNode.field_event_address_lat =  myLatlng.lat();
			currentNode.field_event_address_lng =  myLatlng.lng();
			submit_address.addEventListener("click", function() {
				if(input_event_address.value !="") 
				{
					item_event_address.innerHTML=input_event_address.value;
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
				currentNode.field_event_address_lat =  place.geometry.location.lat();
				currentNode.field_event_address_lng =  place.geometry.location.lng();

				// newLocation = place.geometry.location;

			});  

		}, 200);       
	});

}
function nodeNew(){
	(function($) {
		newNode = new $.Node({
			type: [ { target_id: 'event' } ],
			title: [ { value: 'xxx' }],
			field_event_address : [{ lat: '48.8492606' , lng: '2.3745117999999' }],
			field_event_description: [{value:'description'}],
			//field_event_date: [{value:'2017-10-09'}],
			field_event_date_range : [{ value: '2017-10-09',  end_value: '2017-10-09'  }],
			field_event_price: [{value:'$1'}],
			field_event_time: [{value:'23:59'}],
			field_event_type: [{target_id:'12000'}],
			field_event_styles: [{target_id:'1'}],
			field_event_type: [{target_id:'12000'}],
			nid:  [{value:''}]
		});

	}(jDrupal));
}

function nodeDelete() {

	var dialog = document.getElementById('dd_dialog_custom');
	dialog.show();
	document.getElementById('dd_dialog_inner').innerHTML= '<div class="alert-dialog-content"><p style="font-weight: bold; font-style: italic; color:#f00" >'+currentNode.title+' '+interfaceWillBeDeleted[userSettings.langcode]+'</p></div>'+
	'<div class="alert-dialog-footer"><button class="alert-dialog-button" id="confirmed" >'+interfaceOk[userSettings.langcode]+'</button><button class="alert-dialog-button" id="canceled">'+interfaceCancel[userSettings.langcode]+'</button></div>';
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
			console.log('Node '+currentNode.nid+' deleted!');
			newNode = null;
			//currentNode = null;
		//	window.location.reload(true);
	    	ons.notification.toast({message: interfaceNodeDeleted[userSettings.langcode], timeout: 2000});
	    	onsNavigator.popPage();
			start_auth();
		});
	}(jDrupal));
}

function nodeSave() {
	(function($) {


		var modal = document.getElementById('dd_modal_save');


		modal.show();

		if(currentNode.nid!==""){
			nodeNew();
			currentNode.entity = newNode;
			currentNode.entity.entity["nid"][0].value = currentNode.nid;
			console.log('node to save: ' + currentNode.nid + " entity id =" + currentNode.entity.id() + " title=" + document.getElementById('item_event_title').innerHTML);
		}
		else {
			delete currentNode.entity.entity.nid;
		}


		console.log('Before :\n ' + currentNode.entity.stringify());


		currentNode.entity.set("title", 0, currentNode.title);
	
		   //	currentNode.entity.set("field_event_date", i, currentNode.field_event_dates[i]);
		currentNode.entity.entity.field_event_date_range[0].value = currentNode.field_event_date_range_start;
		try	{  	currentNode.entity.entity.field_event_date_range[0].end_value = currentNode.field_event_date_range_end; }
		catch(err){   currentNode.entity.entity.field_event_date_range[0].end_value = currentNode.field_event_date_range_start;	}

		i = 0;
		currentNode.entity.entity.field_event_styles = [];
		while(currentNode.field_event_styles[i])
		{
			var us = { target_id :  currentNode.field_event_styles[i] };
			currentNode.entity.entity.field_event_styles.push(us);
			i++;
		}


		currentNode.entity.set("field_event_description", 0, currentNode.field_event_description);
		currentNode.entity.set("field_event_price", 0, currentNode.field_event_price);
		currentNode.entity.set("field_event_time", 0, currentNode.field_event_time);

        currentNode.entity.entity.field_event_type[0].target_id=currentNode.field_event_type; 
        
		currentNode.entity.entity.field_event_address[0].lat=currentNode.field_event_address_lat; 
		currentNode.entity.entity.field_event_address[0].lng=currentNode.field_event_address_lng; 

		console.log('After :\n ' + currentNode.entity.stringify());
		console.log("user is: "+account.id());

		currentNode.entity.save().then(function() {
			console.log('Saved node # ' + currentNode.entity.id());
			modal.hide();
			// nodeLoad();

			currentNode.entity.postSave().then(function() {
			     ons.notification.toast({message: interfaceNodeSaved[userSettings.langcode], timeout: 2000});
			     onsNavigator.popPage();

			//	window.location.reload(true);
				start_auth();

			});
			
		},
		function(err) {
			    //console.log("user login error: " + JSON.stringify(err) );
			    modal.hide();
			    var link;
			    if(SWING_MODE) link = "https://swing.dancedose.com/swingdose";
			    else if(TANGO_MODE) link = "https://tango.dancedose.com/tangodose";

				ons.notification.toast({message: interfaceNodeNotSaved[userSettings.langcode] + username +
				                        '<br><a href="'+link+'">' + interfaceNodeAskPermission[userSettings.langcode] + '</a>'
				, timeout: 3000, cancelable : true });
			});



	}(jDrupal));

}