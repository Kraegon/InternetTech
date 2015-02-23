/*!
 *  v0.1
 *  By Julian G. West & Jelle Braat
 *  Custom Scripts
*/
function ChangeCss(documentPage){
	if (documentPage == "index"){
		if (document.getElementById("style").getAttribute("href") == "Style/css/MasterSheet.css")
		{
			document.getElementById("style").setAttribute("href", "Style/css/MetroSheet.css");
			makeCookieTTLOneDay("Style", "MetroSheet.css");
		}
		else
		{
			document.getElementById("style").setAttribute("href", "Style/css/MasterSheet.css");
			makeCookieTTLOneDay("Style", "MasterSheet.css");
		}
	}
	else 
	{
		if (document.getElementById("style").getAttribute("href") == "../Style/css/MasterSheet.css")
		{
			document.getElementById("style").setAttribute("href", "../Style/css/MetroSheet.css");
			makeCookieTTLOneDay("Style", "MetroSheet.css");
		}
		else
		{
			document.getElementById("style").setAttribute("href", "../Style/css/MasterSheet.css");
			makeCookieTTLOneDay("Style", "MasterSheet.css");
		}
	}
}

function OnCookieTableLoad(){
	//write html and load cookie in, something like this:
	//var cookieList = document.cookie.split(";");
	//for (var i = 0; i<cookieList.lenght; ++i){
	//	var c = cookieList[i];
	//}
}

function makeCookieTTLOneDay(name, value){


}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cookieName){
    var name = cookieName + "=";
    var cookieList = document.cookie.split(';');
    for(var i=0; i<cookieList.length; i++) {
        var c = cookieList[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkStyleCookie(){

}



