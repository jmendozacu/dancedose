
function checkLoginStateG() {
   window.plugins.googleplus.trySilentLogin(
    {
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '274492602001-p7v19adot9um1f1em6r8ifpnrc4tp0fl.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      alert(JSON.stringify(obj)); // do something useful instead of alerting
      function onSignIn(googleUser) {
            var id_token = googleUser.getAuthResponse().id_token;
           alert(id_token);
       }

    },
    function (msg) {
      alert('error: ' + msg);
    }
);
    
}
   
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '755677894589497',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
    });
      
    FB.AppEvents.logPageView();   
      
  };
  
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   


function checkLoginStateF() {
    
    var fbLoginSuccess = function (userData) {
	alert("UserInfo: " + JSON.stringify(userData));
	facebookConnectPlugin.getAccessToken(function(token) {
		alert("Token: " + token);
	}, function(err) {
		alert("Could not get access token: " + err);
	});
}

facebookConnectPlugin.login(["public_profile"],
    fbLoginSuccess,
    function (error) { alert("" + error) }
);
    
    
    openFB.init({
      appId      : '755677894589497',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.8'
      });
    openFB.login(
                function(response) {
                    if(response.status === 'connected') {
                        alert('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                         var accessData = response.authResponse;
                           // Logged into your app and Facebook.
                           var data = {
                             source: 'facebook',
                             access_token: accessData.accessToken
                           };
                
                       var req = new XMLHttpRequest();
                        req.open('POST', '/social-connect/handle?source=facebook&access_token='+accessData.accessToken);
                        req.setRequestHeader('Content-type', 'application/json;  charset=utf-8', true);
                        req.onreadystatechange = function() {//Call a function when the state changes.
                           if(req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                               window.location.reload(true);
                           }
                        }
                        req.send();
                    } else {
                        alert('Facebook login failed: ' + response.error);
                    }
                }, {scope: 'email,read_stream,publish_actions'});
    
    
    
  FB.getLoginStatus(function(response) {
      
    alert("authResponse .accessToken  : " + response.authResponse.accessToken );

    if(response.status === "connected") 
    {
        var accessData = response.authResponse;
            // Logged into your app and Facebook.
            var data = {
              source: 'facebook',
              access_token: accessData.accessToken
            };

        var req = new XMLHttpRequest();
         req.open('POST', '/social-connect/handle?source=facebook&access_token='+accessData.accessToken);
         req.setRequestHeader('Content-type', 'application/json;  charset=utf-8', true);
         req.onreadystatechange = function() {//Call a function when the state changes.
            if(req.readyState == XMLHttpRequest.DONE && req.status == 200) {
                window.location.reload(true);
            }
         }
         req.send();

    }
   
  });
}
  