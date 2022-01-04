var cookies = document.cookie;
var ca = document.cookie.split(';');
for (var i=0;i<ca.length;i++){
	var tm = ca[i].indexOf("_armxmod_tmode");
	if (tm != -1){
		var tmode = ca[i].split('=')[0];
		var tmode = tmode.replace(/\s+/g,"");
		var tmo   = tmode.split('_')[0].replace(/\s+/g,"");
	}
}
if (typeof tmode !="undefined"){
	if(Cookies.get(tmode) != 'dark'){
		dmode();
	}else{
		nmode();
	}
} else {
	if (Cookies.get('tmode') != 'dark'){
		dmode();
	}else{
		nmode();
	}
}
