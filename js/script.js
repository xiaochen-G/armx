//定义参数
var scrollDelta = 10, scrollOffset = 200, isScroll = false, previousTop = 0, 
	currentTop = 0, k = 0, l = 0, ver = 1, size = 14, c_expire = 365, a_idx = 0,
	m1 = 0, m2 = 0, timer = null, is404 = 0,
	upath = window.location.pathname,
	uproto = window.location.protocol,
	uhost = window.location.host,
	winH = document.documentElement.clientHeight,
	winW = document.documentElement.clientWidth,
	header = $('header'),
	htmlH = $('html').height(),
	mainw = $('#main').css('width'),
	windowH = $(window).height(),
	btt = document.getElementById("back-to-top"),
	vir = document.getElementById("copyright"),
	ipver = document.getElementById("ipver"),
	powerby = document.getElementById("fpp"),
	callb = document.getElementById("callback"),
	autonight = document.getElementById("autonight"),
	brocastip = document.getElementById("ffpp"),
	bch = document.getElementById('body').clientHeight,
	fch = document.getElementById('footer').clientHeight,
	swh = document.getElementById('footer').clientWidth,
	dbh = bch + fch, 
	divg = document.getElementsByTagName('p'),
	divl = divg.length,
	e404 = $('#template-404').length,
	content = document.getElementById("article-content"),
	hid = upath.indexOf("page"),
	first = upath.indexOf("/1/"),
	tags = upath.indexOf("/tag/"),
	author = upath.indexOf("/author/"),
	category = upath.indexOf("/category/"),
	link = upath.indexOf("link.html"),
	cross = upath.indexOf("cross.html"),
	guestbook = upath.indexOf("guestbook.html"),
	offer = upath.indexOf("offer"),
	about = upath.indexOf("about.html"),
	search = upath.indexOf("search"),
	saying = upath.indexOf("saying.html"),
	goto = upath.indexOf("goto.html"),
	auto = (author >-1 || guestbook > -1 || category >-1 || search > -1 || tags >-1),
	display = $('#tabs-sum').css('display'),
	mulu = $('#article-index'),
	timeline=$(".timeline").find('ul[id^="year-"]'),timeline_nav='';
//全局事件
var OS = function() {
	var a = navigator.userAgent,
	b = /(?:Android)/.test(a),
	d = /(?:Firefox)/.test(a),
	e = /(?:Mobile)/.test(a),
	f = b && e,
	g = b && !f,
	c = /(?:iPad.*OS)/.test(a),
	h = !c && /(?:iPhone\sOS)/.test(a),
	k = c || g || /(?:PlayBook)/.test(a) || d && /(?:Tablet)/.test(a),
	a = !k && (b || h || /(?:(webOS|hpwOS)[\s\/]|BlackBerry.*Version\/|BB10.*Version\/|CriOS\/)/.test(a) || d && e);
	return {
		android: b,
		androidPad: g,
		androidPhone: f,
		ipad: c,
		iphone: h,
		tablet: k,
		phone: a
	}
}();
function touchStart(event) {
	$(this).addClass("scrollhover");
}
function touchEnd(event) {
	$(this).removeClass("scrollhover");
}
function getScrollHeight() {
	return document.body.scrollHeight || document.documentElement.scrollHeight;
}
function getClientHeight() {
	return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
function getScrollTop() {
	return document.body.scrollTop || document.documentElement.scrollTop;
}
//返回顶部按钮
if (btt) {
	$(window).scroll(function() {
		if (!isScroll) {
			isScroll = true; (window.requestAnimationFrame) ? requestAnimationFrame(autoHideHeader) : setTimeout(autoHideHeader, 250);
		}
		var winT = $(this).scrollTop();
		if (winT > 100 && winW <= 428) {
			btt.setAttribute('style', 'display:block');
		} else {
			btt.setAttribute('style', 'display:none');
		}
	});
}
//头部自动显示隐藏
if (header.length) {
	function autoHideHeader() {
		currentTop = $(window).scrollTop();
		var distance = header.offset().top - header.height();
		if (previousTop >= currentTop) {
			if (previousTop - currentTop >= scrollDelta) {
				header.removeClass('is-hide');
			}
		} else {
			if (currentTop - previousTop >= scrollDelta && currentTop > scrollOffset) {
				header.addClass('is-hide');
			}
		}
		if ($("#banner")[0].clientHeight > 0) {
			if ($("#body")[0].offsetTop - document.documentElement.scrollTop > 80) {
				header.removeClass('is-show');
			} else {
				header.addClass('is-show');
			}
		}
		previousTop = currentTop;
		isScroll = false;
	}
}
//定位到页头
$('.scroll-h,#back-to-top').click(function() {
	$('html,body').animate({
		scrollTop: '0px'
	}, 800);
});
//定位到评论
$('.scroll-c').click(function() {
	if ($("#header").attr("class").indexOf("is-hide") > -1) {
		var Ch = 40;
	} else {
		var Ch = -20;
	}
	$('html,body').animate({
		scrollTop: $('#comments').offset().top + Ch
	}, 800);
});
//定位到页脚
$('.scroll-b').click(function() {
	$('html,body').animate({
		scrollTop: $('#footer').offset().top
	}, 800);
});
//按钮触控事件
$("#mplayer,.scroll-h,.scroll-b,.scroll-c,#gb2big5,#nightmode-btn,#sum-btn,#sidehb_a,.show-hide").on("touchstart", touchStart);
$("#mplayer,.scroll-h,.scroll-b,.scroll-c,#gb2big5,#nightmode-btn,#sum-btn,#sidehb_a,.show-hide").on("touchmove", touchEnd);
$("#mplayer,.scroll-h,.scroll-b,.scroll-c,#gb2big5,#nightmode-btn,#sum-btn,#sidehb_a,.show-hide").on("mouseover", touchStart);
$("#mplayer,.scroll-h,.scroll-b,.scroll-c,#gb2big5,#nightmode-btn,#sum-btn,#sidehb_a,.show-hide").on("mouseout", touchEnd);
//图库功能
$().fancybox({
	selector: '[data-fancybox="gallery"]',
	loop: true
});
$("#article-content img,#article img").each(function(k) {
	var b = $(this), c = (b.attr("title"), b.parent("a")), d = typeof b.attr("noGallery"), o = b.attr("alt"), o = o + "";
//	if ((typeof Blazy != 'undefined' && Blazy instanceof Function) || (typeof lazyLoadInstance != 'undefined')) {
	if(b.attr("data-src")!=undefined && b.attr("data-src").length>0){
		var m = b.attr("data-src");
	} else {
		var m = b.attr("src");
	}
	if (m.indexOf("sinaimg") > -1) {
		b.attr("referrerpolicy", "no-referrer");
	}
	if (o.indexOf(".") > -1) {
		var p = '.' + o.split(".")[o.split(".").length - 1], q = o.replace(p, ""), r = q.replace(/\./g, " ");
		b.attr("alt",r);
		b.attr("title",r);
	} else {
		var r = o;
	}
	void 0 !== b.attr("max") && b.wrap('<div class="max-img"></div>'), "undefined" === d && (c.length < 1 && (c = b.wrap('<p class="tc"><a data-no-instant="true" data-fancybox="gallery" data-type="image" href="' + m + '"></a>').parent("a")), c.addClass("light-link"), b.addClass("lazy lazy2 lazyloading b-lazy"));
	k++;
	if (document.getElementById("onlyimg")) {
		b.addClass("nomargin");
	} else {
		if (document.getElementById("autotitle")) {
			var lzload = 'javascript:updateimg();';
			var loadagain = '<a data-no-instant="true" id="loadimg" href="' + lzload + '" title="重新加载图片"><span class="showorno">（图片不显示？）</span></a>';
			if (typeof lzload != 'undefined' && $("#loadagain").length >0) {
				c.after('<span class="loadimg">图 ' + k + '：' + r + '</span>' + loadagain);
			} else {
				c.after('<span class="loadimg">图 ' + k + '：' + r + '</span>');
			}
		}
	}
});
function updateimg(){
	if((typeof Blazy != 'undefined' && Blazy instanceof Function)){
		Blazy();
	}
	if(typeof lazyLoadInstance != 'undefined'){
		lazyLoadInstance.update();
	}
}
//自动添加标题
$("#article-content table").each(function() {
	if (document.getElementById("autotitle")) {
		l++;
		var c = $(this).wrap('<div class="article-table" id="article-table-' + l + '"></div>'), d = document.getElementById('article-table-' + l).nextSibling, r = d.innerText, f = d.id;
		if (r.length < 1) {
			r = d.textContent;
		}
		if (r.length > 0 && !f.indexOf("tbn")) {
			$(this).after('<span class="loadimg">表 ' + l + '：' + r + '</span>');
		} else {
			$(this).after('<span class="loadimg">表 ' + l + '</span>');
		}
	}
//自动调整宽度
	var tbw = $(this).width(), tbtrl = $(this)[0].firstChild.children.length, tbtdl = $(this)[0].firstChild.children[0].cells.length, tdw = tbw / tbtdl;
	for (n = 0; n < tbtdl; n++) {
		$(this)[0].firstChild.children[0].cells[n].width = tdw;
	}
});
//搜索关键词检测
$("#search-box").bind("input porpertychange", function() { 
	- 1 != $("#search-box").val().indexOf("自杀") && ArmMessage.error('如需帮助请<a href="/about.html"><i class="fa fa-heart"></i> 联系我们</a><i class="fa fa-heart"></i>。') && $('#search-box').val("");
});
//表情功能
function grin(tag) {
	var myField;
	tag = ' ' + tag + ' ';
	if (document.getElementById('comment-text') && document.getElementById('comment-text').type == 'textarea') {
		myField = document.getElementById('comment-text');
	} else {
		return false;
	}
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = tag;
		myField.focus();
	} else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = endPos;
		myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length);
		cursorPos += tag.length;
		myField.focus();
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
	} else {
		myField.value += tag;
		myField.focus();
	}
	$("#smiles-sidebar").hide();
}
$("#smilies").click(function() {
	if ($("#smiles-sidebar").css("display") == "none") {
		$("#smiles-sidebar").show();
		if (typeof Blazy != 'undefined' && Blazy instanceof Function) {
			Blazy();
		}
	} else {
		$("#smiles-sidebar").hide();
	}
});
$("#alus").click(function() {
	if (typeof Blazy != 'undefined' && Blazy instanceof Function) {
		Blazy();
	}
});
$(document).bind('click',
function(e) {
	if ($(e.target).closest("#form-emoji").length == 0 && $(e.target).closest("#smiles-sidebar").length == 0 && $("#smiles-sidebar").css("display") != "none") {
		$("#smiles-sidebar").hide();
	}
});
//弹窗
if($('#loadpop').length>0 && Cookies.get(c_prefix + '_armxmod_popup') != '1'){
	setTimeout(function(){
		$('#loadpop').click();
		Cookies.set(c_prefix + '_armxmod_popup', '1', { path: c_path }); 
	},1000);
}
$('.copop').click(function(){
	$('.fancybox-close-small').click();
});
//隐私模式
if (Cookies.get(c_prefix + '_armxmod_privacy') != 'accept') {
	if (document.getElementById("cookie-notice")) {
		$('#cookie-notice').css('visibility', 'visible');
	}
}
$('#cn-accept-cookie').click(function() {
	Cookies.set(c_prefix + '_armxmod_privacy', 'accept' ,{ expires: c_expire, path: c_path });
	$('#cookie-notice').css('visibility', 'hidden');
});
//多域名 CDN 提示
var cncdn_off = Cookies.get(c_prefix + '_armxmod_cncdn_off');
if (cncdn_off === 'undefined' || cncdn_off != 'accept') {
	if (document.getElementById("origin-notice")) {
		$('#origin-notice').css('visibility', 'visible');
	}
}
$('#origin-more-info').click(function() {
	Cookies.set(c_prefix + '_armxmod_cncdn_off', 'accept' ,{ expires: c_expire, path: c_path });
	$('#origin-notice').css('visibility', 'hidden');
});
$('#origin-cookie').click(function() {
	var origin_url = $("#origin-cookie").attr("data-href");
	location.href = origin_url;
});
//微信吸粉
if (Cookies.get(c_prefix + '_armxmod_wxfans_error_author') == 1){
	ArmMessage.error('作者并没有设置验证码呢~');
	Cookies.set(c_prefix + '_armxmod_wxfans_error_author',0,{ expires: c_expire, path: c_path});
}
if (Cookies.get(c_prefix + '_armxmod_wxfans_error') == 1){
	ArmMessage.error('验证码不正确，请重新输入~');
	Cookies.set(c_prefix + '_armxmod_wxfans_error',0,{expires: c_expire, path: c_path});
}
//框架模式
if (self.frameElement && self.frameElement.tagName == "IFRAME") {
	$('#body').css('margin-top', '20px');
	$('#main').css('width', 'auto');
	$('#sidebar,#header,.article-meta,.sidehb,.sum-li,.footer-line,.footer-site,.footer-time,.footer-ext,#footer-count').css('display', 'none');
}
//夜间模式
var jmode = Cookies.get(c_prefix + '_armxmod_tmode');
if (jmode == 'dark') {
	nmode();
} else if (jmode == 'light') {
	dmode();
}
//自动夜间模式
if (autonight && Cookies.get(c_prefix + '_armxmod_autonight') != '1' && autonight.innerHTML) {
	ArmMessage.success(autonight.innerHTML);
	Cookies.set(c_prefix + '_armxmod_autonight', '1', { expires: c_expire, path: c_path });
}
//IP 版本提示
if (ipver && (Cookies.get(c_prefix + '_armxmod_ipnotice') != '1') && ipver.innerHTML.length > 0) {
	var txt = ipver.innerHTML;
	if (powerby.innerHTML) {
		var pby = powerby.innerHTML;
//		var ver=txt.indexOf('IPv6');
		if (ver > -1) {
//			txt = txt + ' 服务提供: ' + pby;
			setTimeout('ArmMessage.success(txt)', 4000);
		}
	}
	Cookies.set(c_prefix + '_armxmod_ipnotice', '1', { expires: c_expire, path: c_path });
}
//访问来源提示
if (callb && (Cookies.get(c_prefix + '_armxmod_newvisitor') == '1') && callb.innerHTML) {
	setTimeout('ArmMessage.info(callb.innerHTML)', 2000);
	Cookies.set(c_prefix + '_armxmod_newvisitor', '2', { expires: c_expire, path: c_path });
}
//调整字体大小
var osize = Cookies.get(c_prefix + '_armxmod_fontsize');
if (!osize) {
	Cookies.set(c_prefix + '_armxmod_fontsize', 14, { expires: c_expire, path: c_path });
} else {
	if (content) {
		content.setAttribute('style', 'font-size:' + osize + 'px;');
	}
}
$('#font-bigger').click(function() {
	tsize = Cookies.get(c_prefix + '_armxmod_fontsize');
	size = tsize - 0 + 1;
	content.setAttribute('style', 'font-size:' + size + 'px;');
	Cookies.set(c_prefix + '_armxmod_fontsize', size, { expires: c_expire, path: c_path });
});
$('#font-smaller').click(function() {
	tsize = Cookies.get(c_prefix + '_armxmod_fontsize');
	size = tsize - 1;
	content.setAttribute('style', 'font-size:' + size + 'px;');
	Cookies.set(c_prefix + '_armxmod_fontsize', size, { expires: c_expire, path: c_path });
});
$('#font-normal').click(function() {
	var size = 14;
	Cookies.set(c_prefix + '_armxmod_fontsize', 14, { expires: c_expire, path: c_path });
	content.setAttribute('style', 'font-size:' + size + 'px;');
});
//短代码支持
$('.toggle-title').on('click', function() {
	$(this).parent().toggleClass('active');
});
$('.tabs-title').each(function(k){
	$(this).on('click', 'li', function(e) {
		e.preventDefault();
		var index = $(this).index();
		$(this).parent().find('li').removeClass('active');
		$(this).addClass('active');
		$(this).parent().parent().find('.tabs-content').removeClass('active');
		$(this).parent().parent().find('.mc-tab-'+index).addClass('active');
	});
});
if ($('#response').length < 1) {
	$('.comment-reply').css('display', 'none');
};
$('#form-user-edit').on('click', function(e) {
	e.preventDefault();
	$(this).parent().remove();
	$('#form-user').removeClass('form-item-hide');
});
$(".mc-button").each(function() {
	var b = $(this);
	if (b.length > 0) {
		b.wrap('<p class="tc"></p>');
	}
});
$("#mc-video").each(function() {
	var b = $(this);
	if (b.length > 0) {
		b.wrap('<p class="tc"></p>');
	}
});
if (!vir || vir.innerHTML != 'VIRCLOUD') {
	alert('开发不易，留个版权声明就那么难么？');
}
$('.wz-title').on('click', 'li', function(e) {
	e.preventDefault();
	var index = $(this).index();
	$(this).parent().find('li').removeClass('active');
	$(this).addClass('active');
	$('.wz-content').removeClass('active');
	$('#wz-tab-' + index).addClass('active');
});
//懒加载
if (header.length) {
	lazycl('#sharewx', '#wxscimg');
	lazycl('#groupwx', '#groupqr');
	lazycl('#tabali', '#groupqr');
	lazycl('#index-shang', '#shangqr');
	lazycl('#like-shang', '#shangqr');
	lazycl('#mi6-dcp', '#mi6img');
	lazycl('#sidehb_a', '#sidehbqr');
}
$(".b-lazy").on("click", function(e) {
	var src = e.target.getAttribute('src');
	var dsrc = e.target.getAttribute('data-src');
	var yes = new RegExp("data:image").test(src);
	if (yes) {
		$(this).attr('src', dsrc);
		if (typeof Blazy != 'undefined' && Blazy instanceof Function) {
			Blazy();
		} else {
			lazyLoadInstance.update();
		}
	}
});
$('.fancybox').fancybox({
	parent: 'body'
});
//更新分页链接
if (window.location.hash) { 
	var r = window.location.hash;
	$("a").each(function() {
		var g = $(this), c = g.attr("href");
		if (typeof c != 'undefined') {
			var d = c.indexOf("comment-page-"), e = c.indexOf("ipage=");
			if (d > -1) {
				if (e > -1) {
					c = c + r;
				}
				if (e < 1 && getQueryVariable("ipage")) {
					var j = c.split("#")[1], k = c.split("#")[0];
					c = k + "?ipage=" + getQueryVariable("ipage") + "#" + j;
				}
				g.attr("href", c);
			}
		}
	});
}
//显示调整
if (OS.phone) {
	if (document.getElementById("disableservice")) {
		$("#tabs-service").hide();
	}
	if (document.getElementById("disabletags")) {
		$("#tabs-label").hide();
	}
	if (document.getElementById("disableads")) {
		$("#tabs-recom").hide();
	}
	if (document.getElementById("disablestat")) {
		$("#tabs-sum").hide();
	}
	if (document.getElementById("disablerecommend")) {
		$("#tabs-recomp").hide();
	}
	if (document.getElementById("disableabout")) {
		$("#tabs-related").hide();
	}
	if (document.getElementById("disableaboutme")) {
		$("#tabs-aboutme").hide();
	}
}
if (display == 'none') {
	$("#usetime").addClass("first");
}
if (hid > -1 && first < 1) {
	$("#tabs-label").hide();
	$("#tabs-aboutme").hide();
}
if (link > -1) {
	$("#link").addClass("current");
}
if (saying > -1) {
	$("#saying").addClass("current");
}
if (cross > -1) {
	$("#cross").addClass("current");
	for (var i=0;i<timeline.length;i++){
		timeline_year=timeline[i].id.split('-')[1];
		timeline_nav = timeline_nav.concat('<li class="btn"><a href="javascript:changenav('+timeline_year+');" id="'+timeline_year+'" title="查看 '+timeline_year+' 年所有文章目录">'+timeline_year+' 年</a></li>');
	}
	$('.timeline-navigator').append(timeline_nav);
}
if (guestbook > -1) {
	$("#guestbook").addClass("current");
}
if (offer > -1) {
	$("#offer").addClass("current");
}
if (about > -1) {
	$("#about").addClass("current");
}
if (search > -1) {
	var wh = document.getElementById("search-box");
	$("#search-single").on("click", function() {
		wh.focus();
	});
	$("#search-single").click();
}
if (swh > 768) {
	var ran = 74;
} else {
	var ran = 63;
}
if (e404 > 0) {
	var is404 = 1;
}
if ((dbh < winH && auto) || is404) {
	var footop = winH - dbh - ran;
	document.getElementById("footer").setAttribute('style', 'margin-top:' + footop + 'px');
}
if (htmlH < winH && goto > -1) {
	var footop = winH - htmlH + 15;
	document.getElementById("footer").setAttribute('style', 'margin-top:' + footop + 'px');
}
var reverse = function(str) { return str.split('').reverse().join(''); };
if (divl > -1) {
	var i = 0;
	for (i; i < divl; i++) {
		if (divg[i].className.indexOf('goaway') > -1) {
			var txt = divg[i].innerText;
			var rtxt = reverse(txt);
			divg[i].innerText = rtxt;
		}
	}
}
$("#nav div").on("mouseover", function() {
	$(this).children('ul').css('display', 'block');
	$(this).children('li').children('a').addClass("current");
});
$("#nav div").on("mouseleave", function() {
	$(this).children('ul').css('display', 'none');
	$(this).children('li').children('a').removeClass("current");
});
if(($('#nav div').css('display') == 'inline-block') && (winW+6 <= 768)){
        $('.nav>li').css('width','90px');
}
//AMP 链接
if (document.getElementById("goo-amp")) {
	var q = location.href.substring(location.href.lastIndexOf('/'));
	if (q != '/'){ 
		if (c_path !='/') {
			var r = c_path + "amp" + q;
		} else {
			var r = "/amp" + q;
		}
		$('#goo-amp').attr('href', r);
	}
}
//阅读指示
function getContentVisibilityHeight() {
	var conH = $('.container').height();
	var docH = $(document).height();
	var contentVisibilityHeight = conH > winH ? conH - winH: docH - winH;
	return contentVisibilityHeight;
}
function initBackToTop() {
	var scrollTop = $(window).scrollTop();
	var contentVisibilityHeight = getContentVisibilityHeight();
	var scrollPercent = scrollTop / contentVisibilityHeight;
	var scrollPercentRounded = Math.round(scrollPercent * 100);
	var scrollPercentMaxed = scrollPercentRounded > 100 ? 100 : scrollPercentRounded;
	if (scrollTop > 0
	/*&& swh>894*/
	) {
		$('#scrollpercent').addClass('showpercent');
	} else {
		$('#scrollpercent').removeClass('showpercent');
	}
	$('#scrollpercent>span').html(scrollPercentMaxed);
	setTimeout(function() {
		$('#scrollpercent').removeClass('showpercent');
	},
	500);
}
//语法高亮
if (typeof Prism != 'undefined') {
	Prism.highlightAll();
}
//瀑布流
function fixtips() {
	$(".loading-all").each(function(index) {
		if (index) {
			$(this).css("display", "none");
		}
	});
}
function fixloading() {
	$(".ias-spinner").each(function(index) {
		if (index) {
			$(this).css("display", "none");
		}
	});
}
//文字选择定位
if (content) {
	document.onmousedown = document.onmouseup = function(e) {
		var newhash = "";
		if (window.getSelection) {
			var sel = window.getSelection();
			try {
				if (!sel.isCollapsed) {
					var pos = 0,
					begin = [0, 0],
					end = [0, 0];
					var range = sel.getRangeAt(0);
					function recur(e) {
						if (e.nodeType == 1) pos = (pos & ~1) + 2;
						if (e.nodeType == 3) pos = pos | 1;
						if (range.startContainer === e) begin = [pos, range.startOffset];
						if (range.endContainer === e) end = [pos, range.endOffset];
						for (var i = 0; i < e.childNodes.length; i++) recur(e.childNodes[i]);
						if (e.childNodes.length > 0 && e.lastChild.nodeType == 3) pos = (pos & ~1) + 2;
					}
					recur(content);
					if (begin[0] > 0 && end[0] > 0) {
						newhash = "selection-" + begin[0] + "." + begin[1] + "-" + end[0] + "." + end[1];
					}
				}
			} catch(e) {}
		} else if (document.selection) {
		}
		try {
			var oldhash = location.hash.replace(/^#/, "");
			if (oldhash != newhash) {
				prevhash = newhash;
				if (history.replaceState) {
					history.replaceState('', document.title, newhash.length > 0 ? '#' + newhash: window.location.pathname);
				} else {
					if (newhash.length > 0) location.hash = newhash;
				}
			}
		} catch(e) {}
	};
}
//登录
if (document.login !== undefined) {
	var oriurl = document.login.referer.value;
	var adminurl = document.login.gotoadmin.value;
	$("#login-referer").click(function() {
		var tloc = $("#login-referer:checkbox:checked").val();
		if (tloc == undefined) {
			document.login.referer.value = oriurl;
		} else {
			document.login.referer.value = adminurl;
		}
	});
}
$("#gotoadmin").click(function() {
	var adminurl = $("#gotoadmin").attr("data-src");
	location.href = adminurl;
});
//点赞
var like_cookies = Cookies.get(c_prefix + '_armxmod_like') || '';
var like_id = $('.post-like').attr('data-pid');
if(like_cookies.indexOf(',' + like_id + ',') !== -1 && $('#social-main').length>-1){
	if($('#social-main').css('display') == 'block') {
		$('#social-main').css('display','none');
		$('#social-shang').css('display','block');
	}
}
$('.post-like').on('click', function(e){
	var th = $(this);
	var id = th.attr('data-pid');
	var cookies = Cookies.get(c_prefix + '_armxmod_like') || '';;
	if (!id || !/^\d{1,10}$/.test(id)) 
		return;
	if (-1 !== cookies.indexOf(',' + id + ',')) {
		ArmMessage.error('已经赞过啦，不如赏杯咖啡吧！');
		if($('#like-shang').length>-1){
			setTimeout(function(){$('#like-shang').click()},1000);
		}
		if($('#social-main').length>0 && $('#social-shang').length>0){
			setTimeout(function(){document.getElementById('social-main').style.display='none'},1000);
			setTimeout(function(){document.getElementById('social-shang').style.display='block'},1000);
		}
		return;
	}
	cookies ? cookies.length >= 160 ? (cookies = cookies.substring(0, cookies.length - 1), cookies = cookies.substr(1).split(','), cookies.splice(0, 1), cookies.push(id), cookies = cookies.join(','), Cookies.set(c_prefix + '_armxmod_like', ',' + cookies + ',', { path: c_path })) : Cookies.set(c_prefix + '_armxmod_like', cookies + id + ',', { path: c_path }) : Cookies.set(c_prefix + '_armxmod_like', ',' + id + ',', { path: c_path });
	$.post(likeup,{
		cid:id
	},
	function(data){
		th.addClass('actived');
		var zan = th.find('span').text();
		th.find('span').text(parseInt(zan) + 1);
		var a = new Array('+ 1');
		var $i = $('<span/>').text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
		y = e.pageY;
		$i.css({
			'z-index': 999,
			'top': y - 20,
			'left': x,
			'position': 'absolute',
			'font-weight': 'bold',
			'color': '#ff6651',
			'font-size': '20px'
		});
		$('body').append($i);
		$i.animate({
			'top': y - 180,
			'opacity': 0
		},
		1500,
		function() {
			$i.remove();
		});
		like_success();
	},'json').fail(like_failed);
});
//魔法视频
$('.card-deck a').fancybox({
	caption : function( instance, item ) { 
		return $(this).parent().find('.card-text').html();
	}
});
//打赏二维码
$('#index-shang').fancybox({
	touch: false
});
$('#wxscan').click(function(){
	$('#shangqr').attr('src',wximg);
	$(this).css('color','#22aa3b');
	$('#aliscan').css('color','#58666e');
});
$('#aliscan').click(function(){
	$('#shangqr').attr('src',aliimg);
	$(this).css('color','#0798e2');
	$('#wxscan').css('color','#58666e');
});
$('#like-shang').click(function(){
	$('#aliscan').css('color','#58666e');
	$('#wxscan').css('color','#22aa3b');
});
//时光鸡
function changenav(id){
	$('#article-index').css('display','none');
	timeline.css('display','none');
	$('.timeline-navigator li').removeClass('current');
	$('#'+id).parents('li').addClass('current');
	$('#year-'+id).css('display','block');
}
//侧边栏显示或隐藏
if(winW > 895){
	$('.show-hide-bth').css('display','list-item');
}
function hideaside(){
	if( $('#sidebar').css('display') === 'none' ){
		$('#main').css('width',mainw);
		$('#sidebar').css('display','block');
		$('.show-hide')[0].attributes[2].value = '隐藏侧栏';
	} else {
		$('#main').css('width','97%');
		$('#sidebar').css('display','none');
		$('.show-hide')[0].attributes[2].value = '显示侧栏';
	}
}
//子分类
$('.cate-c').each(function(k){
	$(this).addClass('cate-c-f');
});
//阅读时间
function ydts(){
	if($('#ydts').length){
		$txt = $('#ydts')[0].attributes['title'].value;
		ArmMessage.info('本文'+$txt);
	}
}
//全局事件
$(window).on('scroll', function() {
	initBackToTop();
	updateimg();
	updateMulu();
});
$(window).on('load', function() {
	initBackToTop();
	CheckLogin(c_prefix,c_path);
	changeClone();
	ydts();
});

