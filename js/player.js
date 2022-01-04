function liebiao() {
	$("ol#playlist").toggle();
}
function qiehuan() {
	$("ol#playlist").hide();
	$("#bgmplayer").toggleClass("bgmon");
}
function mplaying() {
	var oyd = document.getElementById('ydmc');
	oyd.className = 'icon-music';
	$('#playstatus').addClass('playing');
	$('#ydtitle').addClass('gundong');
	document.getElementById("ydfm").className = "Rotation";
}
function mstoped() {
	var oyd = document.getElementById('ydmc');
	oyd.className = 'icon-bofang';
	document.getElementById("ydfm").className = "";
	$('#playstatus').removeClass('playing');
	$('#ydtitle').removeClass('gundong');
}
function playbtu() {
	if (yaudio.paused) {
		yaudio.play();
		mplaying();
	} else {
		yaudio.pause();
		mstoped();
	}
	$('#playlist li').removeClass('yd-playing').eq(a).addClass('yd-playing');
}
function next(b) {
	if (b === undefined) {
		if (a == musicArr.length - 1) {
			a = 0;
		} else {
			a = a + 1;
		}
	} else {
		a = b;
	}
	sj = musicArr[a];
	yaudio.src = sj.mp3;
	yaudio.ti = sj.title;
	yaudio.art = sj.artist;
	yaudio.fm = sj.cover;
	yaudio.play();
	var autopause = 0;
	document.getElementById('ydtitle').innerHTML = yaudio.ti + '&nbsp;-&nbsp;' + yaudio.art;
	document.getElementById("ydfm").src = yaudio.fm;
	$('#playlist li').removeClass('yd-playing').eq(a).addClass('yd-playing');
	mplaying();
}
function previous() {
	if (a == 0) {
		a = musicArr.length - 1;
	} else {
		a = a - 1;
	}
	sj = musicArr[a];
	yaudio.src = sj.mp3;
	yaudio.ti = sj.title;
	yaudio.art = sj.artist;
	yaudio.fm = sj.cover;
	yaudio.play();
	var autopause = 0;
	document.getElementById('ydtitle').innerHTML = yaudio.ti + '&nbsp;-&nbsp;' + yaudio.art;
	document.getElementById("ydfm").src = yaudio.fm;
	$('#playlist li').removeClass('yd-playing').eq(a).addClass('yd-playing');
	mplaying();
}
function dianbo(a) {
	var oyd = document.getElementById('ydmc');
	var b = a;
	next(b);
}
yaudio.addEventListener('ended',
function() {
	next();
},
false);
