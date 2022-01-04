$(function () {
	var url = window.location.href;
	var arr = url.split('/');
	var len = arr.length;
	var path = url.split(arr[len-2] + '/' +arr [len-1])[0];
	var fileref = document.createElement('link');
	fileref.setAttribute("rel","stylesheet");
	fileref.setAttribute("type","text/css");
	fileref.setAttribute("href", path + 'usr/themes/armx/ext/editor/iconfont.css');
	var pyref = document.createElement('script');
	pyref.setAttribute("src", path + 'usr/themes/armx/ext/editor/pinyin4js.js');
	var list_script = document.getElementsByTagName('script');
	list_script[list_script.length-1].parentNode.insertBefore(pyref,list_script[list_script.length-1]);

	if(typeof fileref != "undefined"){
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
	if ($('#wmd-button-row').length > 0) {
		console.log('欢迎使用 ArmxMod for Typecho 短代码，效果演示地址：https://vircloud.net/change-theme-tag.html');
		$('#wmd-button-row').append('<style>.wmd-button-row{display: contents;}</style>');
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-panel-button" style="" title="插入面板"><i class="iconfont">&#xe66a;</i></li>'); //面板
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-button-button" style="" title="插入按钮"><i class="iconfont">&#xe663;</i></li>'); //按钮
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-item-sh-button" style="" title="插入收缩段落"><i class="iconfont">&#xe65e;</i></li>'); //收缩段落
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-item-tab-button" style="" title="插入选项卡段落"><i class="iconfont">&#xe67c;</i></li>'); //选项卡段落
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-item-friend-button" style="" title="插入友链段落"><i class="iconfont">&#xe664;</i></li>'); //友链段落
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-audio-button" style="" title="插入 H5 音乐"><i class="iconfont">&#xe67d;</i></li>'); //音乐
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-video-button" style="" title="插入 H5 视频"><i class="iconfont">&#xe66e;</i></li>'); //直链视频
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-y2b-button" style="" title="插入 Youtube、Vimeo 视频"><i class="iconfont">&#xe666;</i></li>'); //Youtube
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-dplayer-button" style="" title="插入 Dplayer 支持的视频（mp4、flv、hls 等）"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGUlEQVQ4T6XTvyuFURgH8M9lkTKYlMGiRDKIxSQDkcFgYVAmi8WPwY+Uxa8FhWQmWdgMiAxmf4BYpFAGSRkY6K1z6tJ1vTdnfc/zOU/P830z/nkyoX4GIyjHHKrQjyXUoh3raEQT9nGDjQQowjk6cYcBnOIJHbjCY4DecYtK7KIrAUqwiNHweh16sRa+DWEbD5jAIS5QgekIJB0cB3kwgNXowTLq0YpNNKMB92iLwALGCpznSnYHP4EyvP4B5gX6wlaGcfkL9Cewh0/sYDIMMdtKBcSCN4xjK0tIDXyE6c/ipVAg2Xmynescc/jWQQxSvNeCUpzl2cQqpmKUj0JsC4nCSRL/+DMl66rBcwqhGN04wHwEUtTlvvIFs5ZDZeiythMAAAAASUVORK5CYII="/></li>'); //Dplayer
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-shang-button" style="" title="插入打赏按钮"><i class="iconfont">&#xe660;</i></li>'); //打赏
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-split-button" style="" title="插入分页"><i class="iconfont">&#xe661;</i></li>'); //分页
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-reply-button" style="" title="插入回复可见"><i class="iconfont">&#xe67b;</i></li>'); //回复可见
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-cutin-button" style="" title="插入嵌套网页"><i class="iconfont">&#xe65d;</i></li>'); //网页嵌套
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-from-button" style="" title="插入网页引用"><i class="iconfont">&#xe66d;</i></li>'); //网页引用
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-hide-button" style="" title="插入隐藏文字"><i class="iconfont">&#xe662;</i></li>'); //隐藏文字
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-footer-button" style="" title="插入脚注"><i class="iconfont">&#xe676;</i></li>'); //脚注
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-wxfans-button" style="" title="插入微信吸粉"><i class="iconfont">&#xe66c;</i></li>'); //微信吸粉
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-todolist-button" style="" title="插入任务清单"><i class="iconfont">&#xe67e;</i></li>'); //插入任务清单
		$('#wmd-button-row').append('<li class="wmd-button" id="wmd-py-button" style="" title="插入拼音注释"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABOElEQVQ4T6VTbU6DQBCdWdRoYqI30CN4hHIDPIEgKAgxwZuYmC6iJfQG7Q2sN8AbcARMjDYqO2YIGGq1tWX/bLK782bexyJ0XNixHmYAZBJPGNC33R7vURQd0qYY7WhbumVZhRzEBiCc+LZ73DReCJCm6f6bes+JaBg4XiiTOAeEiX/qmnMAMompTadUSteEePiLom+7VfPvCW7uo56GeM2HJVG4u7GdvXxOj2qQq1KprH1/eXZR0V1IgR/wZDwNF/zU6FcAIjpAgNx3PH0lAJnEBQDsAcAzIIzLUg1X0kAmcQhEJiAWbCM78PoxNVATKQCsp0Ht+6hR/F8atIPEBURUBI5n1HrMBG3ORoGYosBHDkr/LjJ5/MaBpQBVkIieSBNmYJ1n/cHtGAByTmATpqUU1vlYnX/jFxEFwxGtjHA/AAAAAElFTkSuQmCC"/></li>'); //插入拼音注释
	}

//面板添加提示
	$(document).on('click', '#wmd-panel-button', function () {
		$('body').append(
			'<div id="Armxmod-Panel">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入面板</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="radio" id="task" value="task" name="paneltype">项目面板&emsp;</input>' +
			'<input type="radio" id="noway" value="noway" name="paneltype">禁止面板&emsp;</input>' +
			'<input type="radio" id="warning" value="warning" name="paneltype">警告面板&emsp;</input><br>' +
			'<input type="radio" id="buy" value="buy" name="paneltype" checked>购买面板&emsp;</input>' +
			'<input type="radio" id="down" value="down" name="paneltype">下载面板&emsp;</input></p>' +
			'<p><textarea id="panel-text" value="" placeholder="面板内容，支持 MarkDown 语法" style="width: 100%;"></textarea></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="panelok">确定</button>' +
			'<button type="button" class="btn btn-s" id="panelcancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//面板取消动作
	$(document).on('click', '#panelcancel', function () {
		$('#Armxmod-Panel').remove();
		$('textarea').focus();
	});
//面板确定动作
	$(document).on('click', '#panelok', function () {
//插入面板内容
		var radio = document.getElementsByName("paneltype");
		var panel_type = '';
		var panel_text = document.getElementById('panel-text').value;
		if (panel_text.length == 0) {
			panel_text = '请输入面板内容';
		}
		for (i=0; i<radio.length; i++) {
			if (radio[i].checked) {
				panel_type = radio[i].value;
			}
		}
		var tag = '\n['+ panel_type + ']';
		tag += '\n\n';
		tag += panel_text + '\n\n';
		tag += '[/' + panel_type + ']\n\n';
//插入面板并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + panel_type.length + 5; //起始
			select_length = panel_text.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += tag;
			myField.focus();
		}
		$('#Armxmod-Panel').remove();
	});

//按钮添加提示
	$(document).on('click', '#wmd-button-button', function () {
		$('body').append(
			'<div id="Armxmod-Button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入按钮</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="radio" id="btntext" value="btntext" name="buttontype">文本按钮&emsp;</input>' +
			'<input type="radio" id="btnheart" value="btnheart" name="buttontype">爱心按钮&emsp;</input>' +
			'<input type="radio" id="btnbox" value="btnbox" name="buttontype">盒子按钮&emsp;</input><br>' +
			'<input type="radio" id="btnsearch" value="btnsearch" name="buttontype">搜索按钮&emsp;</input>' +
			'<input type="radio" id="btnlink" value="btnlink" name="buttontype">链接按钮&emsp;</input>' +
			'<input type="radio" id="btndown" value="btndown" name="buttontype">下载按钮&emsp;</input><br>' +
			'<input type="radio" id="btnnext" value="btnnext" name="buttontype">箭头按钮&emsp;</input>' +
			'<input type="radio" id="btnaudio" value="btnaudio" name="buttontype">音频按钮&emsp;</input>' +
			'<input type="radio" id="btnvideo" value="btnvideo" name="buttontype">视频按钮&emsp;</input><br>' +
			'<input type="radio" id="btncolor" value="btncolor" name="buttontype" checked>随机按钮&emsp;</input></p>' +
			'<p><input type="text" id="btn-text" value="" placeholder="按钮文字"></input></p>' +
			'<p><input type="text" id="btn-url" value="" placeholder="按钮链接"></input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="btnok">确定</button>' +
			'<button type="button" class="btn btn-s" id="btncancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//按钮取消动作
	$(document).on('click', '#btncancel', function () {
		$('#Armxmod-Button').remove();
		$('textarea').focus();
	});
//按钮确定动作
	$(document).on('click', '#btnok', function () {
//插入按钮内容
		var btn_radio = document.getElementsByName("buttontype");
		var btn_type = '';
		var btn_text = document.getElementById('btn-text').value;
		var btn_url = document.getElementById('btn-url').value;
		if (btn_text.length == 0) {
			btn_text = '请输入按钮提示';
		}
		if (btn_url.length == 0) {
			btn_url = '请输入按钮链接';
		}
		for (i=0; i<btn_radio.length; i++) {
			if (btn_radio[i].checked) {
				btn_type = btn_radio[i].value;
			}
		}
		var btn_tag = '\n['+ btn_type;
		btn_tag += ' href="' + btn_url + '" target="_blank"]';
		btn_tag += btn_text;
		btn_tag += '[/' + btn_type + ']\n\n';
//插入按钮并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = btn_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ btn_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + btn_type.length + 9; //起始
			select_length = btn_url.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += btn_tag;
			myField.focus();
		}
		$('#Armxmod-Button').remove();
	});

//收缩添加提示
	$(document).on('click', '#wmd-item-sh-button', function () {
		$('body').append(
			'<div id="Armxmod-sh-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入收缩段落</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="sh-title" value="" placeholder="标题"></input></p>' +
			'<p><textarea id="sh-content" value="" placeholder="段落内容，支持 MarkDown 语法" style="width: 100%;"></textarea></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="sh-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="sh-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//收缩取消动作
	$(document).on('click', '#sh-cancel', function () {
		$('#Armxmod-sh-button').remove();
		$('textarea').focus();
	});
//收缩确定动作
	$(document).on('click', '#sh-ok', function () {
//插入收缩内容
		var sh_title = document.getElementById('sh-title').value;
		var sh_content = document.getElementById('sh-content').value;
		if (sh_title.length == 0) {
			sh_title = '请输入标题';
		}
		if (sh_content.length == 0) {
			sh_content = '请输入内容';
		}
		var sh_tag = '\n[toggle title="';
		sh_tag += sh_title + '"]\n\n\n';
		sh_tag += sh_content;
		sh_tag += '\n\n[/toggle]\n\n';
//插入收缩并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = sh_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ sh_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 16; //起始
			select_length = sh_title.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += sh_tag;
			myField.focus();
		}
		$('#Armxmod-sh-button').remove();
	});

//选项卡添加提示
	$(document).on('click', '#wmd-item-tab-button', function () {
		$('body').append(
			'<div id="Armxmod-tab-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入选项卡段落</b></p>' +
			'<p>在下方输入参数，至少需要两个选项卡（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="tab-title-1" value="" placeholder="选项卡一标题"></input></p>' +
			'<p><textarea id="tab-content-1" value="" placeholder="选项卡一段落内容，支持 MarkDown 语法" style="width: 100%;"></textarea></p>' +
			'<p><input type="text" id="tab-title-2" value="" placeholder="选项卡二标题"></input></p>' +
			'<p><textarea id="tab-content-2" value="" placeholder="选项卡二段落内容，支持 MarkDown 语法" style="width: 100%;"></textarea></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="tab-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="tab-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//选项卡取消动作
	$(document).on('click', '#tab-cancel', function () {
		$('#Armxmod-tab-button').remove();
		$('textarea').focus();
	});
//选项卡确定动作
	$(document).on('click', '#tab-ok', function () {
//插入选项卡内容
		var tab_title_1 = document.getElementById('tab-title-1').value;
		var tab_content_1 = document.getElementById('tab-content-1').value;
		var tab_title_2 = document.getElementById('tab-title-2').value;
		var tab_content_2 = document.getElementById('tab-content-2').value;
		if (tab_title_1.length == 0) {
			tab_title_1 = '请输入选项卡一标题';
		}
		if (tab_content_1.length == 0) {
			tab_content_1 = '请输入选项卡一内容';
		}
		if (tab_title_2.length == 0) {
			tab_title_2 = '请输入选项卡二标题';
		}
		if (tab_content_2.length == 0) {
			tab_content_2 = '请输入选项卡二内容';
		}
		var tab_tag = '\n[tabs]\n[item title="';
		tab_tag += tab_title_1 + '"]';
		tab_tag += tab_content_1 + '[/item]\n';
		tab_tag += '[item title="';
		tab_tag += tab_title_2 + '"]';
		tab_tag += tab_content_2 + '[/item]\n';
		tab_tag += '[/tabs]\n\n';
//插入选项卡并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = tab_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ tab_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 21; //起始
			select_length = tab_title_1.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += tab_tag;
			myField.focus();
		}
		$('#Armxmod-tab-button').remove();
	});

//友链添加提示
	$(document).on('click', '#wmd-item-friend-button', function () {
		$('body').append(
			'<div id="Armxmod-friend-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入友链段落</b></p>' +
			'<p>在下方输入参数，建议两个以上（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="friend-url-1" value="" placeholder="友链一链接"></input></p>' +
			'<p><input type="text" id="friend-title-1" value="" placeholder="友链一标题"></input></p>' +
			'<p><input type="text" id="friend-content-1" value="" placeholder="友链一说明"></input></p>' +
			'<p><input type="text" id="friend-url-2" value="" placeholder="友链二链接"></input></p>' +
			'<p><input type="text" id="friend-title-2" value="" placeholder="友链二标题"></input></p>' +
			'<p><input type="text" id="friend-content-2" value="" placeholder="友链二说明"></input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="friend-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="friend-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//友链取消动作
	$(document).on('click', '#friend-cancel', function () {
		$('#Armxmod-friend-button').remove();
		$('textarea').focus();
	});
//友链确定动作
	$(document).on('click', '#friend-ok', function () {
//插入友链内容
		var friend_url_1 = document.getElementById('friend-url-1').value;
		var friend_title_1 = document.getElementById('friend-title-1').value;
		var friend_content_1 = document.getElementById('friend-content-1').value;
		var friend_url_2 = document.getElementById('friend-url-2').value;
		var friend_title_2 = document.getElementById('friend-title-2').value;
		var friend_content_2 = document.getElementById('friend-content-2').value;
		if (friend_url_1.length == 0) {
			friend_url_1 = '请输入友链一链接';
		}
		if (friend_title_1.length == 0) {
			friend_title_1 = '请输入友链一标题';
		}
		if (friend_content_1.length == 0) {
			friend_content_1 = '请输入友链一说明';
		}
		if (friend_url_2.length == 0) {
			friend_url_2 = '请输入友链二链接';
		}
		if (friend_title_2.length == 0) {
			friend_title_2 = '请输入友链二标题';
		}
		if (friend_content_2.length == 0) {
			friend_content_2 = '请输入友链二说明';
		}
		var friend_tag = '\n[friends random="false"]\n[link href="';
		friend_tag += friend_url_1 + '" title="';
		friend_tag += friend_title_1 + '"]';
		friend_tag += friend_content_1 + '[/link]\n';
		friend_tag += '[link href="';
		friend_tag += friend_url_2 + '" title="';
		friend_tag += friend_title_2 + '"]';
		friend_tag += friend_content_2 + '[/link]\n';
		friend_tag += '[/friends]\n\n';
//插入友链并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = friend_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ friend_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 38; //起始
			select_length = friend_url_1.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += friend_tag;
			myField.focus();
		}
		$('#Armxmod-friend-button').remove();
	});

//音乐添加提示
	$(document).on('click', '#wmd-audio-button', function () {
		$('body').append(
			'<div id="Armxmod-audio-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入 H5 直链音乐</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="audio-src" value="" placeholder="音乐直链"></input></p>' +
			'<p><input type="checkbox" id="audio-auto" checked>自动播放</input></p>' +
			'<p><input type="checkbox" id="audio-loop">循环播放</input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="audio-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="audio-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//音乐取消动作
	$(document).on('click', '#audio-cancel', function () {
		$('#Armxmod-audio-button').remove();
		$('textarea').focus();
	});
//音乐确定动作
	$(document).on('click', '#audio-ok', function () {
//插入音乐内容
		var audio_src = document.getElementById('audio-src').value;
		var audio_auto = document.getElementById('audio-auto').checked ? true : false;
		var audio_loop = document.getElementById('audio-loop').checked ? true : false;
		if (audio_src.length == 0) {
			audio_src = '请输入音乐直链';
		}
		var audio_tag = '\n[audio src="';
		audio_tag += audio_src + '" preload="metadata"';
		if(audio_auto){
			audio_tag += ' autoplay="autoplay"';
		}
		if(audio_loop){
			audio_tag += ' loop="loop"';
		}
		audio_tag += ']音乐播放[/audio]\n\n';
//插入音乐并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = audio_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ audio_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 13; //起始
			select_length = audio_src.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += audio_tag;
			myField.focus();
		}
		$('#Armxmod-audio-button').remove();
	});

//视频添加提示
	$(document).on('click', '#wmd-video-button', function () {
		$('body').append(
			'<div id="Armxmod-video-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入 H5 直链视频</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="video-src" value="" placeholder="视频直链"></input></p>' +
			'<p><input type="checkbox" id="video-auto" checked>自动播放</input></p>' +
			'<p><input type="checkbox" id="video-loop">循环播放</input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="video-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="video-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//视频取消动作
	$(document).on('click', '#video-cancel', function () {
		$('#Armxmod-video-button').remove();
		$('textarea').focus();
	});
//视频确定动作
	$(document).on('click', '#video-ok', function () {
//插入视频内容
		var video_src = document.getElementById('video-src').value;
		var video_auto = document.getElementById('video-auto').checked ? true : false;
		var video_loop = document.getElementById('video-loop').checked ? true : false;
		if (video_src.length == 0) {
			video_src = '请输入视频直链';
		}
		var video_tag = '\n[video src="';
		video_tag += video_src + '" preload="metadata"';
		if(video_auto){
			video_tag += ' autoplay="autoplay"';
		}
		if(video_loop){
			video_tag += ' loop="loop"';
		}
		video_tag += ' width="100%" height="100%"]视频播放[/video]\n\n';
//插入视频并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = video_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ video_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 13; //起始
			select_length = video_src.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += video_tag;
			myField.focus();
		}
		$('#Armxmod-video-button').remove();
	});

//Dplayer 添加提示
	$(document).on('click', '#wmd-dplayer-button', function () {
		$('body').append(
			'<div id="DPlayer-Panel">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入视频（Dplayer）</b></p>' +
			'<p>在下方输入参数</p>' +
			'<p><input type="text" id="DP-url" value="" placeholder="请输入视频直链（必填）"></input></p>' +
			'<p><input type="text" id="DP-pic" value="" placeholder="请输入视频缩略图 URL"></input></p>' +
			'<p><input type="text" id="DP-addition" value="" placeholder="请输入弹幕源 URL（仅支持 Json）"></input></p>' +
			'<p><input type="text" id="DP-danmuID" value="" placeholder="请输入弹幕 ID（若启用了弹幕服务器地址）"></input></p>' +
			'<p><input type="text" id="subtitle-url" value="" placeholder="请输入外挂字幕 URL（仅支持 webvtt）"></input></p>' +
			'<p><input type="checkbox" id="DP-danmu">开启弹幕</input></p>' +
			'<p><input type="checkbox" id="DP-autoplay" checked>自动播放</input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//Dplayer 取消动作
	$(document).on('click', '#cancel', function () {
		$('#DPlayer-Panel').remove();
		$('textarea').focus();
	});
//插入 Dplayer 内容
	$(document).on('click', '#ok', function () {
		var DP_url = document.getElementById('DP-url').value,
			DP_pic = document.getElementById('DP-pic').value,
			DP_danmu = document.getElementById('DP-danmu').checked ? true : false,
			DP_autoplay = document.getElementById('DP-autoplay').checked ? true : false,
			DP_addition = document.getElementById('DP-addition').value,
			DP_danmuID = document.getElementById('DP-danmuID').value,
			subtitle_url = document.getElementById('subtitle-url').value;
		if (DP_url.length == 0){
			DP_url = '请输入视频直链';
		}
		if (DP_pic.length == 0){
			DP_pic = '请输入视频缩略图 URL';
		}
		var tag = '\n[dplayer url="' + DP_url + '" pic="' + DP_pic + '" ';
		if (DP_danmu) tag += 'danmu="' + DP_danmu + '" ';
		if (DP_autoplay) tag += 'autoplay="' + DP_autoplay + '" ';
		if (DP_addition) tag += 'danmaku_addition="' + DP_addition + '" ';
		if (DP_danmuID) tag += 'danmaku_id="' + DP_danmuID + '" ';
		if (subtitle_url) tag += 'subtitle_url="' + subtitle_url + '" ';
		tag += '/]\n\n';
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 15;
			select_length = DP_url.length;
			cursorPos = select_startPos + select_length;
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += tag;
			myField.focus();
		}
		$('#DPlayer-Panel').remove();
	});

//Youtube添加提示
	$(document).on('click', '#wmd-y2b-button', function () {
		$('body').append(
			'<div id="Armxmod-y2b-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入 Youtube、Vimeo 或直链视频链接</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="y2b-src" value="" placeholder="视频网址或直链"></input></p>' +
			'<p><input type="text" id="y2b-jpg" value="" placeholder="视频缩略图"></input></p>' +
			'<p><input type="text" id="y2b-txt" value="" placeholder="视频标题"></input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="y2b-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="y2b-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//Youtube取消动作
	$(document).on('click', '#y2b-cancel', function () {
		$('#Armxmod-y2b-button').remove();
		$('textarea').focus();
	});
//Youtube确定动作
	$(document).on('click', '#y2b-ok', function () {
//插入Youtube内容
		var y2b_src = document.getElementById('y2b-src').value;
		var y2b_jpg = document.getElementById('y2b-jpg').value;
		var y2b_txt = document.getElementById('y2b-txt').value;
		if (y2b_src.length == 0) {
			y2b_src = '请输入视频网址或直链';
		}
		if (y2b_jpg.length == 0) {
			y2b_jpg = '请输入视频缩略图';
		}
		if (y2b_txt.length == 0) {
			y2b_txt = '请输入视频标题';
		}
		var y2b_tag = '\n[fanv url="';
		y2b_tag += y2b_src + '" jpg="';
		y2b_tag += y2b_jpg + '" txt="';
		y2b_tag += y2b_txt + '"]\n\n';
//插入Youtube并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = y2b_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ y2b_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 12; //起始
			select_length = y2b_src.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += y2b_tag;
			myField.focus();
		}
		$('#Armxmod-y2b-button').remove();
	});

//打赏添加提示
	$(document).on('click', '#wmd-shang-button', function () {
		$('body').append(
			'<div id="Armxmod-shang-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入打赏功能</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="shang-txt" value="" placeholder="打赏提示文字"></input></p>' +
			'<p><input type="checkbox" id="shang-check" checked>确认已经在主题设置中配置好打赏参数</input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="shang-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="shang-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//打赏取消动作
	$(document).on('click', '#shang-cancel', function () {
		$('#Armxmod-shang-button').remove();
		$('textarea').focus();
	});
//打赏确定动作
	$(document).on('click', '#shang-ok', function () {
//插入打赏内容
		var shang_txt = document.getElementById('shang-txt').value;
		var shang_check = document.getElementById('shang-check').checked ? true : false;
		if (shang_check) {

			if (shang_txt.length == 0) {
				shang_txt = '欢迎各位大佬打赏';
			}
			var shang_tag = '\n[pshang]';
			shang_tag += shang_txt;
			shang_tag += '[/pshang]\n\n';
//插入打赏并聚焦
			myField = document.getElementById('text');
			if (document.selection) {
				myField.focus();
				sel = document.selection.createRange();
				sel.text = shang_tag;
				myField.focus();
			}
			else if (myField.selectionStart || myField.selectionStart == '0') {
				var startPos = myField.selectionStart;
				var endPos = myField.selectionEnd;
				var cursorPos = startPos;
				myField.value = myField.value.substring(0, startPos)
					+ shang_tag
					+ myField.value.substring(endPos, myField.value.length);
				select_startPos = startPos + 9; //起始
				select_length = shang_txt.length; //选择长度
				cursorPos = select_startPos + select_length; //结束
				myField.focus();
				myField.selectionStart = select_startPos;
				myField.selectionEnd = cursorPos;
			}
			else {
				myField.value += shang_tag;
				myField.focus();
			}

		}

		$('#Armxmod-shang-button').remove();
	});

//分页添加提示
	$(document).on('click', '#wmd-split-button', function () {
		$('body').append(
			'<div id="Armxmod-split-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入分页功能</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="checkbox" id="split-check" checked>确认已经在主题设置中启用分页，并设置了本文自定义字段（字段名：next，值：y）</input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="split-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="split-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//分页取消动作
	$(document).on('click', '#split-cancel', function () {
		$('#Armxmod-split-button').remove();
		$('textarea').focus();
	});
//分页确定动作
	$(document).on('click', '#split-ok', function () {
//插入分页内容
		var split_check = document.getElementById('split-check').checked ? true : false;
		if (split_check) {

			var split_tag = '\n\n[next]\n\n';
			var split_txt = split_tag;

//插入分页并聚焦
			myField = document.getElementById('text');
			if (document.selection) {
				myField.focus();
				sel = document.selection.createRange();
				sel.text = split_tag;
				myField.focus();
			}
			else if (myField.selectionStart || myField.selectionStart == '0') {
				var startPos = myField.selectionStart;
				var endPos = myField.selectionEnd;
				var cursorPos = startPos;
				myField.value = myField.value.substring(0, startPos)
					+ split_tag
					+ myField.value.substring(endPos, myField.value.length);
				select_startPos = startPos + 0; //起始
				select_length = split_txt.length; //选择长度
				cursorPos = select_startPos + select_length; //结束
				myField.focus();
				myField.selectionStart = select_startPos;
				myField.selectionEnd = cursorPos;
			}
			else {
				myField.value += split_tag;
				myField.focus();
			}

		}

		$('#Armxmod-split-button').remove();
	});

//回复可见添加提示
	$(document).on('click', '#wmd-reply-button', function () {
		$('body').append(
			'<div id="Armxmod-reply-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入回复可见内容</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><textarea id="reply-content" value="" placeholder="回复可见内容，支持 MarkDown 语法" style="width: 100%;"></textarea></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="reply-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="reply-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//回复可见取消动作
	$(document).on('click', '#reply-cancel', function () {
		$('#Armxmod-reply-button').remove();
		$('textarea').focus();
	});
//回复可见确定动作
	$(document).on('click', '#reply-ok', function () {
//插入回复可见内容
		var reply_content = document.getElementById('reply-content').value;
		if (reply_content.length == 0) {
			reply_content = '请输入需要回复才能看的内容';
		}
		var reply_tag = '\n[hide]\n\n';
		reply_tag += reply_content + '\n\n';
		reply_tag += '[/hide]\n\n';
//插入回复可见并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = reply_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ reply_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 9; //起始
			select_length = reply_content.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += reply_tag;
			myField.focus();
		}
		$('#Armxmod-reply-button').remove();
	});

//嵌套添加提示
	$(document).on('click', '#wmd-cutin-button', function () {
		$('body').append(
			'<div id="Armxmod-cutin-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入网页嵌套</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="cutin-src" value="" placeholder="嵌套链接"></input></p>' +
			'<p><input type="text" id="cutin-txt" value="" placeholder="链接名称"></input></p>' +
			'<p><input type="checkbox" id="cutin-check" checked>确认链接没有 X-Frame-Options 限制</input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="cutin-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="cutin-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//嵌套取消动作
	$(document).on('click', '#cutin-cancel', function () {
		$('#Armxmod-cutin-button').remove();
		$('textarea').focus();
	});
//嵌套确定动作
	$(document).on('click', '#cutin-ok', function () {
//插入嵌套内容
		var cutin_src = document.getElementById('cutin-src').value;
		var cutin_txt = document.getElementById('cutin-txt').value;
		var cutin_check = document.getElementById('cutin-check').checked ? true : false;
		if (cutin_src.length == 0) {
			cutin_src = '请输入嵌套链接';
		}
		if (cutin_txt.length == 0) {
			cutin_txt = '请输入链接名称';
		}
		if(cutin_check){
			var cutin_tag = '\n[btnif href="';
			cutin_tag += cutin_src + '" target="_blank"';
			cutin_tag += ']' + cutin_txt +'[/btnif]\n\n';
//插入嵌套并聚焦
			myField = document.getElementById('text');
			if (document.selection) {
				myField.focus();
				sel = document.selection.createRange();
				sel.text = cutin_tag;
				myField.focus();
			}
			else if (myField.selectionStart || myField.selectionStart == '0') {
				var startPos = myField.selectionStart;
				var endPos = myField.selectionEnd;
				var cursorPos = startPos;
				myField.value = myField.value.substring(0, startPos)
					+ cutin_tag
					+ myField.value.substring(endPos, myField.value.length);
				select_startPos = startPos + 14; //起始
				select_length = cutin_src.length; //选择长度
				cursorPos = select_startPos + select_length; //结束
				myField.focus();
				myField.selectionStart = select_startPos;
				myField.selectionEnd = cursorPos;
			}
			else {
				myField.value += cutin_tag;
				myField.focus();
			}
		}
		$('#Armxmod-cutin-button').remove();
	});

//引用添加提示
	$(document).on('click', '#wmd-from-button', function () {
		$('body').append(
			'<div id="Armxmod-from-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入网页引用</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="from-src" value="" placeholder="引用链接"></input></p>' +
			'<p><input type="text" id="from-jpg" value="" placeholder="引用插图"></input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="from-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="from-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//引用取消动作
	$(document).on('click', '#from-cancel', function () {
		$('#Armxmod-from-button').remove();
		$('textarea').focus();
	});
//引用确定动作
	$(document).on('click', '#from-ok', function () {
//插入引用内容
		var from_src = document.getElementById('from-src').value;
		var from_jpg = document.getElementById('from-jpg').value;
		if (from_src.length == 0) {
			from_src = '请输入引用链接';
		}
		if (from_jpg.length == 0) {
			from_jpg = '请输入插图链接';
		}

		var from_tag = '\n[post url="';
			from_tag += from_src + '" jpg="';
			from_tag += from_jpg + '"';
			from_tag += ']\n\n';
//插入引用并聚焦
			myField = document.getElementById('text');
			if (document.selection) {
				myField.focus();
				sel = document.selection.createRange();
				sel.text = from_tag;
				myField.focus();
			}
			else if (myField.selectionStart || myField.selectionStart == '0') {
				var startPos = myField.selectionStart;
				var endPos = myField.selectionEnd;
				var cursorPos = startPos;
				myField.value = myField.value.substring(0, startPos)
					+ from_tag
					+ myField.value.substring(endPos, myField.value.length);
				select_startPos = startPos + 12; //起始
				select_length = from_src.length; //选择长度
				cursorPos = select_startPos + select_length; //结束
				myField.focus();
				myField.selectionStart = select_startPos;
				myField.selectionEnd = cursorPos;
			}
			else {
				myField.value += from_tag;
				myField.focus();
			}

		$('#Armxmod-from-button').remove();
	});

//文字隐藏添加提示
	$(document).on('click', '#wmd-hide-button', function () {
		$('body').append(
			'<div id="Armxmod-hide-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入网页隐藏文字</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="hide-txt" value="" placeholder="要做隐藏处理的文字，不宜过长"></input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="hide-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="hide-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//文字隐藏取消动作
	$(document).on('click', '#hide-cancel', function () {
		$('#Armxmod-hide-button').remove();
		$('textarea').focus();
	});
//文字隐藏确定动作
	$(document).on('click', '#hide-ok', function () {
//插入文字隐藏内容
		var hide_txt = document.getElementById('hide-txt').value;
		if (hide_txt.length == 0) {
			hide_txt = '请输入要做隐藏处理的文字';
		}

		var hide_tag = '\n[yw txt="';
			hide_tag += hide_txt + '"';
			hide_tag += ']\n\n';
//插入文字隐藏并聚焦
			myField = document.getElementById('text');
			if (document.selection) {
				myField.focus();
				sel = document.selection.createRange();
				sel.text = hide_tag;
				myField.focus();
			}
			else if (myField.selectionStart || myField.selectionStart == '0') {
				var startPos = myField.selectionStart;
				var endPos = myField.selectionEnd;
				var cursorPos = startPos;
				myField.value = myField.value.substring(0, startPos)
					+ hide_tag
					+ myField.value.substring(endPos, myField.value.length);
				select_startPos = startPos + 10; //起始
				select_length = hide_txt.length; //选择长度
				cursorPos = select_startPos + select_length; //结束
				myField.focus();
				myField.selectionStart = select_startPos;
				myField.selectionEnd = cursorPos;
			}
			else {
				myField.value += hide_tag;
				myField.focus();
			}

		$('#Armxmod-hide-button').remove();
	});

//脚注添加提示
	$(document).on('click', '#wmd-footer-button', function () {
		$('body').append(
			'<div id="Armxmod-footer-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入脚注</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><input type="text" id="footer-txt" value="" placeholder="脚注内容"></input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="footer-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="footer-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//脚注取消动作
	$(document).on('click', '#footer-cancel', function () {
		$('#Armxmod-footer-button').remove();
		$('textarea').focus();
	});
//脚注确定动作
	$(document).on('click', '#footer-ok', function () {
//插入脚注内容
		var footer_txt = document.getElementById('footer-txt').value;
		if (footer_txt.length == 0) {
			footer_txt = '请输入脚注内容';
		}

		var footer_tag = '[^';
			footer_tag += footer_txt + ']';
			footer_tag += '\n\n';
//插入脚注并聚焦
			myField = document.getElementById('text');
			if (document.selection) {
				myField.focus();
				sel = document.selection.createRange();
				sel.text = footer_tag;
				myField.focus();
			}
			else if (myField.selectionStart || myField.selectionStart == '0') {
				var startPos = myField.selectionStart;
				var endPos = myField.selectionEnd;
				var cursorPos = startPos;
				myField.value = myField.value.substring(0, startPos)
					+ footer_tag
					+ myField.value.substring(endPos, myField.value.length);
				select_startPos = startPos + 2; //起始
				select_length = footer_txt.length; //选择长度
				cursorPos = select_startPos + select_length; //结束
				myField.focus();
				myField.selectionStart = select_startPos;
				myField.selectionEnd = cursorPos;
			}
			else {
				myField.value += footer_tag;
				myField.focus();
			}

		$('#Armxmod-footer-button').remove();
	});

//微信吸粉添加提示
	$(document).on('click', '#wmd-wxfans-button', function () {
		$('body').append(
			'<div id="Armxmod-wxfans-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入微信吸粉内容</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><textarea id="wxfans-txt" value="" placeholder="微信吸粉段落内容，支持 MarkDown 语法" style="width: 100%;"></textarea></p>' +
			'<p><input type="checkbox" id="wxfans-check" checked>确认已在主题设置中配置好微信吸粉参数</input></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="wxfans-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="wxfans-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//微信吸粉取消动作
	$(document).on('click', '#wxfans-cancel', function () {
		$('#Armxmod-wxfans-button').remove();
		$('textarea').focus();
	});
//微信吸粉确定动作
	$(document).on('click', '#wxfans-ok', function () {
//插入微信吸粉内容
		var wxfans_txt = document.getElementById('wxfans-txt').value;
		if (wxfans_txt.length == 0) {
			wxfans_txt = '请输入微信吸粉段落内容';
		}
		var wxfans_check = document.getElementById('wxfans-check').checked ? true : false;
		if(wxfans_check){
			var wxfans_tag = '\n[wx]';
			wxfans_tag += wxfans_txt + '[/wx]';
			wxfans_tag += '\n\n';
//插入微信吸粉并聚焦
			myField = document.getElementById('text');
			if (document.selection) {
				myField.focus();
				sel = document.selection.createRange();
				sel.text = wxfans_tag;
				myField.focus();
			}
			else if (myField.selectionStart || myField.selectionStart == '0') {
				var startPos = myField.selectionStart;
				var endPos = myField.selectionEnd;
				var cursorPos = startPos;
				myField.value = myField.value.substring(0, startPos)
					+ wxfans_tag
					+ myField.value.substring(endPos, myField.value.length);
				select_startPos = startPos + 5; //起始
				select_length = wxfans_txt.length; //选择长度
				cursorPos = select_startPos + select_length; //结束
				myField.focus();
				myField.selectionStart = select_startPos;
				myField.selectionEnd = cursorPos;
			}
			else {
				myField.value += wxfans_tag;
				myField.focus();
			}
		}
		$('#Armxmod-wxfans-button').remove();
	});

});

//任务计划添加提示
$(document).on('click', '#wmd-todolist-button', function () {
	$('body').append(
		'<div id="Armxmod-todolist-button">' +
		'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
		'<div class="wmd-prompt-dialog">' +
		'<div>' +
		'<p><b>插入任务计划</b></p>' +
		'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
		'<p>（多项任务请在添加后参照格式自行补充）</p>' +
		'<p><input type="text" id="todolist-txt-title" value="" placeholder="任务列表名称"></input></p>' +
		'<p><input type="text" id="todolist-txt-task-undo" value="" placeholder="待完成任务"></input></p>' +
		'<p><input type="text" id="todolist-txt-task-undo-c" value="" placeholder="待完成子任务"></input></p>' +
		'<p><input type="text" id="todolist-txt-task-done" value="" placeholder="已完成任务"></input></p>' +
		'<p><input type="text" id="todolist-txt-task-done-c" value="" placeholder="已完成子任务"></input></p>' +
		'<p><input type="checkbox" id="todolist-check" checked>确认已经在主题设置中启用 GitHub Task List</input></p>' +
		'</div>' +
		'<form>' +
		'<button type="button" class="btn btn-s primary" id="todolist-ok">确定</button>' +
		'<button type="button" class="btn btn-s" id="todolist-cancel">取消</button>' +
		'</form>' +
		'</div>' +
		'</div>');
});
//任务计划取消动作
$(document).on('click', '#todolist-cancel', function () {
	$('#Armxmod-todolist-button').remove();
	$('textarea').focus();
});
//任务计划确定动作
$(document).on('click', '#todolist-ok', function () {
//插入任务计划内容
	var todolist_title = document.getElementById('todolist-txt-title').value;
	var todolist_undo = document.getElementById('todolist-txt-task-undo').value;
	var todolist_undo_c = document.getElementById('todolist-txt-task-undo-c').value;
	var todolist_done = document.getElementById('todolist-txt-task-done').value;
	var todolist_done_c = document.getElementById('todolist-txt-task-done-c').value;
	var todolist_check = document.getElementById('todolist-check').checked ? true : false;
	if (todolist_check) {
		if (todolist_title.length == 0) {
			todolist_title = '任务计划：';
		}
		if (todolist_undo.length == 0) {
			todolist_undo = '待完成任务';
		}
		if (todolist_undo_c.length == 0) {
			todolist_undo_c = '已完成子任务';
		}
		if (todolist_done.length == 0) {
			todolist_done = '已完成任务';
		}
		if (todolist_done_c.length == 0) {
			todolist_done_c = '待完成子任务';
		}
		var todolist_tag = '\n' + todolist_title + '\n';
		todolist_tag += '- [ ] ' + todolist_undo + '\n';
		todolist_tag += ' - [x] ' + todolist_undo_c + '\n';
		todolist_tag += '- [x] ' + todolist_done + '\n';
		todolist_tag += ' - [ ] ' + todolist_done_c;
		todolist_tag += '\n\n';
//插入任务计划并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = todolist_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ todolist_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 1; //起始
			select_length = todolist_title.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += todolist_tag;
			myField.focus();
		}
	}
	$('#Armxmod-todolist-button').remove();
});

//拼音添加提示
	$(document).on('click', '#wmd-py-button', function () {
		$('body').append(
			'<div id="Armxmod-py-button">' +
			'<div class="wmd-prompt-background" style="position: absolute; top: 0px; z-index: 1000; opacity: 0.5; height: 875px; left: 0px; width: 100%;"></div>' +
			'<div class="wmd-prompt-dialog">' +
			'<div>' +
			'<p><b>插入拼音注释</b></p>' +
			'<p>在下方输入参数（效果参见 <a href="https://vircloud.net/change-theme-tag.html" target="_blank">短代码演示</a>）：</p>' +
			'<p><textarea id="py-title" value="" placeholder="输入汉字" style="width: 100%;"></textarea></p>' +
			'<p><textarea id="py-content" value="" placeholder="输入拼音，不填则自动生成" style="width: 100%;"></textarea></p>' +
			'</div>' +
			'<form>' +
			'<button type="button" class="btn btn-s primary" id="py-ok">确定</button>' +
			'<button type="button" class="btn btn-s" id="py-cancel">取消</button>' +
			'</form>' +
			'</div>' +
			'</div>');
	});
//拼音取消动作
	$(document).on('click', '#py-cancel', function () {
		$('#Armxmod-py-button').remove();
		$('textarea').focus();
	});
//拼音确定动作
	$(document).on('click', '#py-ok', function () {
//插入拼音内容
		var py_title = document.getElementById('py-title').value;
		var py_content = document.getElementById('py-content').value;
		if (py_title.length == 0) {
			py_title = '请输入汉字';
		}
		if (py_content.length == 0) {
			py_content = PinyinHelper.convertToPinyinString(py_title,' ', PinyinFormat.WITH_TONE_MARK);
		}
		var py_tag = '\n\n!!!\n<ruby>';
		py_tag += py_title;
		py_tag += '<rp> (</rp><rt>';
		py_tag += py_content;
		py_tag += '</rt><rp>) </rp></ruby>\n!!!\n\n';
//插入拼音并聚焦
		myField = document.getElementById('text');
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = py_tag;
			myField.focus();
		}
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			var cursorPos = startPos;
			myField.value = myField.value.substring(0, startPos)
				+ py_tag
				+ myField.value.substring(endPos, myField.value.length);
			select_startPos = startPos + 12; //起始
			select_length = py_title.length; //选择长度
			cursorPos = select_startPos + select_length; //结束
			myField.focus();
			myField.selectionStart = select_startPos;
			myField.selectionEnd = cursorPos;
		}
		else {
			myField.value += py_tag;
			myField.focus();
		}
		$('#Armxmod-py-button').remove();
	});

//调整高度
function findDimensions() {
	var left_h = $('#wmd-button-bar').height();
	var right_h =$('.submit').height();
	var adjust_height = left_h + 5.75;
	var view_adjust_height = adjust_height + 20;
	if(left_h != right_h){
		$('.submit').height(adjust_height);
		$('#text').css('top',view_adjust_height);
		$('.fullscreen #wmd-preview').css('top',view_adjust_height);
	}
}

//自动调整高度
$(document).on('click', '#wmd-fullscreen-button', function () {
	findDimensions();
});
window.onresize=findDimensions;
