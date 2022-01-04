$(document).click(function() {
	$("ol#playlist").hide();
});
$("#bgmplayer").click(function(event) {
	event.stopPropagation();
});
$(body).click(function() {
	$("#bgmplayer").removeClass("bgmon");
});
$("#mplayer,#mplayer-btn").click(function() {
	$('#bgmplayer').toggleClass('bgmon');
});
document.addEventListener("touchmove", function(){
	$("ol#playlist").hide();
	$("#bgmplayer").removeClass("bgmon");
});
document.addEventListener("scroll", function(){
	$("ol#playlist").hide();
	$("#bgmplayer").removeClass("bgmon");
});
$(document).ready(function() {
	// Load playlist
	for (var i = 0; i < musicArr.length; i++) {
		var item = musicArr[i];
		var anum = i + 1;
		if (anum < 10) {
			anum = '0' + anum;
		}
		$('#playlist').append('<li class="yd-lib"><span class="anum">' + anum + '.</span><span style="margin-left: 5px;">' + item.title + '</span><span style="float: right;" class="artist">' + item.artist + '</span></li>');
		if (item.mp3 == "") {
			$('#playlist li').eq(i).css('color', '#ddd');
		}
	}
	$('#playlist li').removeClass('yd-playing').eq(a).addClass('yd-playing');
	$('#playlist li').click(function() {
		var a = $(this).index();
		dianbo(a);
	});
});
var ody = document.getElementById('ydmc');
if (yaudio.paused) {
	var autopause = 0;
	mstoped();
} else {
	var autopause = 1;
	mplaying();
}
document.getElementById('ydtitle').innerHTML = yaudio.ti + '&nbsp;-&nbsp;' + yaudio.art;
document.getElementById("ydfm").src = yaudio.fm;
var setProgress = function(value) {
	var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
	ratio = value / yaudio.duration * 100;
	document.getElementById('jindu').style.width = ratio + '%';
	document.getElementById('ytime').innerHTML = (parseInt(value / 60) + ':' + currentSec);
}
var updateProgress = function() {
	setProgress(yaudio.currentTime);
}
timeout = setInterval(updateProgress, 500);
