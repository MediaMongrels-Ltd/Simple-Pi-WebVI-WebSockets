var GetHostname = function () {	
	var a = document.createElement('a');
	a.href = document.URL;
	if(a.hostname == ""){
		return "raspberrypi";
	} else {
		return a.hostname;
	}
}