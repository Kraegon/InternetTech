/*!
 *  v0.1
 *  By Julian G. West & Jelle Braat
 *  Custom Scripts
*/

$(document).ready(function(){
	var storage = localStorage.getItem("styleSheet");
	if (!storage){ return; }
	document.getElementById("style").setAttribute("href", storage);
});

function documentReadyContent(){
	var cooks = new Cookie("Naam", "waarde", 10);
	var htmlCookie = "";
	var cookieList = getCookieList();
	for (var i = 0; i < cookieList.length; i++){
		htmlCookie = "<tr> <td>" + cooks.cname + "</td> <td>" + cooks.cvalue + "</td> <td>" + cooks.cexpire + "</td> </tr> ";
		$("#CookieTableBody").append(htmlCookie);
	}
}

function changeCss(){
	if (document.getElementById("style").getAttribute("href") == "../Style/css/MasterSheet.css"){
		document.getElementById("style").setAttribute("href", "../Style/css/MetroSheet.css");
		localStorage.setItem("styleSheet", "../Style/css/MetroSheet.css");
	}
	else{
		document.getElementById("style").setAttribute("href", "../Style/css/MasterSheet.css");
		localStorage.setItem("styleSheet", "../Style/css/MasterSheet.css");
	}
}

function Cookie(cname, cvalue, cexpire){
	this.cname = cname;
	this.cvalue = cvalue;
	this.cexpire = cexpire;
}

Cookie.prototype = {
	secondsRemaining : function(){
		return 10;
	},

	toString : function(){
		return this.cname + " " + this.cvalue + " " + this.cexpire;
	}
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookieList(){
	return document.cookie.split(';');
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



