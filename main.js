// 631374630768-ut74gc707rckeicpq3ep1f8a2bc9rthi.apps.googleusercontent.com   -clienid
// LCFMEfViNcWwQzhpcTrY_WJJ   -clientsecret

$(document).ready(function(){
         

     var clientId = "631374630768-ut74gc707rckeicpq3ep1f8a2bc9rthi.apps.googleusercontent.com";
   

     var redirect_uri = "http://localhost/fileupload/upload.html";


     var scope = "https://www.googleapis.com/auth/drive";


     var url = "http://localhost";



     $("#login").click(function(){


        signIn(clientId,redirect_uri,scope,url);

     });

     function signIn(clientId,redirect_uri,scope,url){
      

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";


        window.location = url;




     }



});