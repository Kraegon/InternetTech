/*!
 *  v1.1
 *  By Julian G. West & Jelle Braat
 *  Custom Scripts
 */

 $(document).ready(function(){
 	var storage = localStorage.getItem("styleSheet");
 	if (!storage){ return; }
 	document.getElementById("style").setAttribute("href", storage);
 });

function documentReadyContent(){
 	readAllCookies();
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

function Cookie(cname, cvalue){
	this.cname = cname;
	this.cvalue = cvalue;
}

function Cookie(cstring){
	var splitString = cstring.split('=');
	this.cname = splitString[0];
	this.cvalue = splitString[1];
}

Cookie.prototype = {
	secondsRemaining : function(){
		return 10;
	},

	toString : function(){	
		return this.cname + " " + this.cvalue;
	}
}

function readAllCookies() {
	var cookiesList = document.cookie.split(";");
	clearTable();
	for (var i = cookiesList.length - 1; i >= 0; i--) {
		var cooks = new Cookie(cookiesList[i]);
		insertIntoTable(cooks);
	};
}
	
function readCookie(nameTemp){
	var name = nameTemp + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return null;
}

function createCookie(name,value){
	document.cookie = name+"="+value+";";
}

function clearTable(){
	$("#CookieTableBody").empty();
}

function insertIntoTable(cookie){
	var htmlCookie = "<tr> <td>" + cookie.cname + "</td> <td>" + cookie.cvalue+ "</td> </tr> ";
	$("#CookieTableBody").append(htmlCookie);
}

function makeDocumentCookie(name, value){
	createCookie(name,value,1);
	readAllCookies();
}
