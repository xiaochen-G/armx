<?php
function get($txt) {
	$tag = isset($_GET[$txt]) && !empty($_GET[$txt]) ? $_GET[$txt] : 0;
	if($tag) {
		$tag = transcoding($tag);
	}
	return $tag;
}
function server($txt) {
	$tag = isset($_SERVER[$txt]) && !empty($_SERVER[$txt]) ? $_SERVER[$txt] : 0;
	return $tag;
}
function transcoding($txt) {
	return rawurlencode(rawurldecode($txt));
}

$type= get('t'); //页面信息 p，加载信息 t
$tid= get('tid'); //追踪 ID
$dt = get('dt');  //页面标题
$dl = get('dl');  //页面 URL
$de = get('de');  //页面编码
$ul = get('ul');  //用户语言
$sd = get('sd');  //颜色深度
$sr = get('sr');  //屏幕分辨率
$vp = get('vp');  //浏览器大小
$z  = get('z');   //时间戳
$uip= get('uip'); //用户 IP
$dr = get('dr');  //来源 URL
$dh = get('dh');  //主机名
$dp = get('dp');  //页面路径
$ds = get('ds');  //访问来源
$ua = server('HTTP_USER_AGENT'); //用户代理
$dnt= server('HTTP_DNT');        //拒绝追踪
$aip= 0;          //只要有这个参数就会匿名处理；
$m  = get('m');   //请求方法 get 或 post，post 成功率高
$uuid= get('uuid'); //用户唯一码
$ref= server('HTTP_REFERER');

if($dnt) {
	$aip = 1;
}

if(!$type || !$ref || !$m || ($type == 'p' && (!$tid || !$dt || !$dl || !$de || !$ul || !$sr || !$vp || !$uip || !$ua))) {
	header('HTTP/1.1 200');
	header('Error: Data Not Incomplete');
	exit();
}

$plt = get('plt'); //页面加载时间
$dns = get('dns'); //DNS 解析用时
$pdt = get('pdt'); //页面下载用时
$rrt = get('rrt'); //重定向用时
$tcp = get('tcp'); // TCP 连接用时
$srt = get('srt'); //服务器响应用时
$dit = get('dit'); //DOM Interactive 用时
$clt = get('clt'); //Content Load 用时

function combineURL($tag,$value){
	$url ='';
	if($value){
		$url = '&'.$tag.'='.$value;
	}
	return $url;
}
function combineArray($tag,$value){
	$arr = '';
	if($value){
		$arr = ',"'.$tag.'":"'.$value.'"';
	}
	return $arr;
} 
function requestSent($url,$ua,$uip){
	$timeout = '2';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_HTTPGET, 1);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
	curl_setopt($ch, CURLOPT_USERAGENT, $ua);
	curl_setopt($ch, CURLOPT_HTTPHEADER,array('Cache-Control:no-cache','CLIENT-IP:'.$uip,'X-FORWARDED-FOR:'.$uip));
	$mh = curl_multi_init();
	curl_multi_add_handle($mh, $ch);
	do {
		$status = curl_multi_exec($mh, $active);
		if ($active) {
			curl_multi_select($mh);
		}
	} while ($active && $status == CURLM_OK);
	curl_multi_remove_handle($mh, $ch);
	curl_multi_close($mh);
}
function requestPost($url,$data,$ua,$uip){
	$timeout = '2';
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
	curl_setopt($ch, CURLOPT_USERAGENT, $ua);
	curl_setopt($ch, CURLOPT_HTTPHEADER,array('Cache-Control:no-cache','CLIENT-IP:'.$uip,'X-FORWARDED-FOR:'.$uip));
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
	$mh = curl_multi_init();
	curl_multi_add_handle($mh, $ch);
	do {
		$status = curl_multi_exec($mh, $active);
		if ($active) {
			curl_multi_select($mh);
		}
	} while ($active && $status == CURLM_OK);
	curl_multi_remove_handle($mh, $ch);
	curl_multi_close($mh);
}

//GET
if($m == 'get'){
	$analysis_uid = 'v=1&'.'tid='.$tid.'&'.'cid='.$uuid.'&';
	if($aip){
		$analysis_uid = $analysis_uid.'aip=1&';
	}
	$url = 'https://www.google-analytics.com/collect?';
	if($type == 'p'){
		//页面信息
		$analysis_page = $analysis_uid.'t=pageview'.combineURL('dt',$dt).combineURL('dl',$dl).combineURL('dh',$dh).combineURL('dp',$dp).combineURL('de',$de).combineURL('ul',$ul).combineURL('sd',$sd).combineURL('sr',$sr).combineURL('vp',$vp).combineURL('uip',$uip).combineURL('ua',$ua).combineURL('dr',$dr).combineURL('ds',$ds);
		requestSent($url.$analysis_page.combineURL('z',$z),$ua,$uip);
		header('Content-Type: image/jpg');
	} else if($type == 't'){
		//加载信息
		$analysis_time = $analysis_uid.'t=timing'.combineURL('plt',$plt).combineURL('dns',$dns).combineURL('pdt',$pdt).combineURL('rrt',$rrt).combineURL('tcp',$tcp).combineURL('srt',$srt).combineURL('dit',$dit).combineURL('clt',$clt);
		requestSent($url.$analysis_time.combineURL('z',$z),$ua,$uip);
		header('Content-Type: image/jpg');
	} else {
		header('Error: Data Not Sent');
	}
	header('HTTP/1.1 204 No Content');
} else {
//POST
	$array_uid = '{"v":"1","tid":"'.$tid.'","cid":"'.$uuid.'"';
	if($aip){
		$array_uid = $array_uid.',"aip":"1"';
	}
	$url = 'https://www.google-analytics.com/collect';
	if($type == 'p'){
		//页面信息
		$array_page = json_decode($array_uid.',"t":"pageview"'.combineArray('dt',$dt).combineArray('dl',$dl).combineArray('dh',$dh).combineArray('dp',$dp).combineArray('de',$de).combineArray('ul',$ul).combineArray('sd',$sd).combineArray('sr',$sr).combineArray('vp',$vp).combineArray('uip',$uip).combineArray('ua',$ua).combineArray('dr',$dr).combineArray('ds',$ds).'}');
		requestPost($url,$array_page,$ua,$uip);
		header('Content-Type: image/jpg');
	} else if($type == 't'){
		//加载信息
		$array_time = json_decode($array_uid.',"t":"timeing"'.combineArray('plt',$plt).combineArray('dns',$dns).combineArray('pdt',$pdt).combineArray('rrt',$rrt).combineArray('tcp',$tcp).combineArray('srt',$srt).combineArray('dit',$dit).combineArray('clt',$clt).'}');
		requestPost($url,$array_time,$ua,$uip);
		header('Content-Type: image/jpg');
	} else {
		header('Error: Data Not Sent');
	}
	header('HTTP/1.1 204 No Content');
}

?>
