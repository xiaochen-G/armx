var len = dPlayerOptions.length;
var dPlayers = [];
if ($("div[id^='player']").length>0) {
for (var i = 0; i < len; i++) {
    dPlayers.push(new DPlayer({
        container: document.getElementById('player' + dPlayerOptions[i]['id']),
        autoplay: dPlayerOptions[i]['autoplay'],
        theme: dPlayerOptions[i]['theme'],
        loop: dPlayerOptions[i]['loop'],
        lang: dPlayerOptions[i]['lang'],
        screenshot: dPlayerOptions[i]['screenshot'],
        hotkey: dPlayerOptions[i]['hotkey'],
        preload: dPlayerOptions[i]['preload'],
        logo: dPlayerOptions[i]['logo'],
        volume: dPlayerOptions[i]['volume'],
        mutex: dPlayerOptions[i]['mutex'],
        airplay: dPlayerOptions[i]['airplay'],
        video: dPlayerOptions[i]['video'],
        subtitle: dPlayerOptions[i]['subtitle'],
        danmaku: dPlayerOptions[i]['danmaku'],
        contextmenu: dPlayerOptions[i]['contextmenu'],
    }));
}
}
