<?php
//非法链接直接退出
if(strlen($_SERVER['REQUEST_URI']) > 384 ||
	strpos($_SERVER['REQUEST_URI'], 'eval(') || strpos($_SERVER['REQUEST_URI'], 'base64')) {
		header("HTTP/1.1 414 Request-URI Too Long");
		header("Status: 414 Request-URI Too Long");
		header("Connection: Close");
		exit;
}
//开始处理链接
$t_url = preg_replace('/^url=(.*)$/i','$1',$_SERVER["QUERY_STRING"]);
$t_url = str_replace('%3A',':',$t_url);
$t_url = str_replace('%2F','/',$t_url);
$domain = trim($_SERVER['HTTP_HOST']);
//指定后缀跳转
if($t_url=="home" ) {
	$t_url="https://www.vircloud.net/";
} elseif($t_url=="blog") {
	$t_url="https://vircloud.net/";
} elseif($t_url=="cloud") {
	$t_url="https://vclo.me/";
} elseif($t_url=="download") {
	$t_url="https://dl.vircloud.net";
}
//加密函数
function passport_encrypt($str,$key){
	srand((double)microtime() * 1000000);
	$encrypt_key=md5(rand(0, 32000));
	$ctr=0;
	$tmp='';
	for($i=0;$i<strlen($str);$i++){
		$ctr=$ctr==strlen($encrypt_key)?0:$ctr;
		$tmp.=$encrypt_key[$ctr].($str[$i] ^ $encrypt_key[$ctr++]);
	}
	return base64_encode(passport_key($tmp,$key));
}
//解密函数
function passport_decrypt($str,$key){
	$str=passport_key(base64_decode($str),$key);
	$tmp='';
	for($i=0;$i<strlen($str);$i++){
		$md5=$str[$i];
		$tmp.=$str[++$i] ^ $md5;
	}
	return $tmp;
}
//辅助函数 
function passport_key($str,$encrypt_key){
	$encrypt_key=md5($encrypt_key);
	$ctr=0;
	$tmp='';
	for($i=0;$i<strlen($str);$i++){ 
		$ctr=$ctr==strlen($encrypt_key) ? 0 : $ctr;
		$tmp.=$str[$i] ^ $encrypt_key[$ctr++];
	}
	return $tmp;
}
//是否正常链接（加密？）
if(!filter_var($t_url,FILTER_VALIDATE_URL) && substr($t_url,0,2) != '//'){
	$t_url = passport_decrypt($t_url,'vircloud');
}
//是否合法请求
if(!empty($_SERVER["HTTP_REFERER"]) && strpos($_SERVER["HTTP_REFERER"],$domain)){
	$validdomain = 1;
} else{
	$validdomain = 0;
}
//修改标题
if(!empty($t_url) && $validdomain && filter_var($t_url,FILTER_VALIDATE_URL)) {
	preg_match('/^(http|https|thunder|qqdl|ed2k|Flashget|qbrowser|ftp):\/\//i',$t_url,$matches);
	if($matches){
		$url = $t_url;
		$title = '跳转中，请稍候...';
	} else {
		$url = 'http://'.$domain;
		$title='请求错误，正在返回...';
	}
} else {
	$title = '请求错误，正在返回...';
	$url = 'http://'.$domain;
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="robots" content="noindex, nofollow" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="applicable-device" content="pc,mobile">
<meta name="MobileOptimized" content="width">
<meta name="HandheldFriendly" content="true">
<noscript><meta http-equiv="refresh" content="1;url='<?php echo $url;?>';"></noscript>
<script>
function link_jump() {
	var host = new RegExp("<?php echo $domain; ?>");
	if (!host.test(document.referrer)) {
		location.href="https://" + host;
	}
	location.href="<?php echo $url;?>";
}
setTimeout(link_jump, 1000);
setTimeout(function(){window.opener=null;window.close();}, 50000);
</script>
<title><?php echo $title;?></title>
<style type="text/css">
body{background:#555}.loading{-webkit-animation:fadein 2s;-moz-animation:fadein 2s;-o-animation:fadein 2s;animation:fadein 2s}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.spinner-wrapper{position:absolute;top:0;left:0;z-index:300;height:100%;min-width:100%;min-height:100%;background:rgba(255,255,255,0.93)}.spinner-text{position:absolute;top:45.5%;left:50%;margin-left:-100px;margin-top:2px;color:#58666e;letter-spacing:1px;font-size:20px;font-family:Arial}.spinner{position:absolute;top:45%;left:50%;display:block;margin-left:-160px;width:1px;height:1px;border:20px solid rgba(255,0,0,1);-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;border-left-color:transparent;border-right-color:transparent;-webkit-animation:spin 1.5s infinite;-moz-animation:spin 1.5s infinite;animation:spin 1.5s infinite}@-webkit-keyframes spin{0%,100%{-webkit-transform:rotate(0deg) scale(1)}50%{-webkit-transform:rotate(720deg) scale(0.6)}}@-moz-keyframes spin{0%,100%{-moz-transform:rotate(0deg) scale(1)}50%{-moz-transform:rotate(720deg) scale(0.6)}}@-o-keyframes spin{0%,100%{-o-transform:rotate(0deg) scale(1)}50%{-o-transform:rotate(720deg) scale(0.6)}}@keyframes spin{0%,100%{transform:rotate(0deg) scale(1)}50%{transform:rotate(720deg) scale(0.6)}}
</style>
</head>
<body>
<div class="loading">
	<div class="spinner-wrapper">
		<span class="spinner-text">跳转中，请稍候...</span>
		<span class="spinner"></span>
	</div>
</div>
</body>
</html>
