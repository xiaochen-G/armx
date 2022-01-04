<?php
include "./phpqrcode.php";
$url        = isset($_GET["url"]) ? $_GET["url"] : '0';
$errorLevel = isset($_GET["e"]) ? $_GET["e"] : 'L';
$PointSize  = isset($_GET["p"]) ? $_GET["p"] : '3';
$margin     = isset($_GET["m"]) ? $_GET["m"] : '0';
$domain = trim($_SERVER['HTTP_HOST']);

if($url){
	preg_match('/(https:\/\/|http:\/\/)([\w\W]*?)\//si', $url, $matches);

	if ($matches) {
		if ($matches[2] != $domain && $url != 'help') {
			header("Content-type: text/html; charset=utf-8");
			echo '<title>二维码 API 接口</title><p>暂不开放二维码 API 接口，谢谢！</p>';
			exit();
		} else {
			if ( $url == 'help') {
				header("Content-type: text/html; charset=utf-8");
				echo '<title>二维码 API 接口</title><h3>二维码 API 接口</h3><p>使用前请仔细查看参数说明：</p><br><br><p>url：二维码对应的网址</p><br><br><p>m：二维码白色边框尺寸，缺省值: 3px<br><br><p>e：容错级别(errorLevel)，可选参数如下(缺省值 L)：<br></p><p>&emsp;L：7% 的字码可被修正<br></p><p>&emsp;M：15%的字码可被修正</p><br><p>&emsp;Q：25%的字码可被修正</p><br><p>&emsp;H：30%的字码可被修正</p><br><br><p>p：二维码尺寸，可选范围 1-10 (具体大小和容错级别有关)（缺省值：6）</p><br><br><p>常规用法：<a href="https://vircloud.net/ext/qr/?m=2&e=H&p=7&url=https://vircloud.net/" target="_blank">https://vircloud.net/ext/qr/?m=2&e=H&p=7&url=https://vircloud.net/</a></p><br><br>';
				exit();
			} else {
				createqr($url, $errorLevel, $PointSize, $margin);
			}
		}
	} else {
		header("Content-type: text/html; charset=utf-8");
		echo '<title>二维码 API 接口</title>';
		echo '<p>链接不正确，仅支持 http|https！</p>';
		exit();
	}
} else {
	exit();
}

function createqr($value,$errorCorrectionLevel,$matrixPointSize,$margin) {
	QRcode::png($value, false, $errorCorrectionLevel, $matrixPointSize, $margin);
}

?>
