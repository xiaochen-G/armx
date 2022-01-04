<?php
@$width = $_GET['w'] ? intval(trim($_GET['w'])) : 225; //宽度，单位像素；
@$height = $_GET['h'] ? intval(trim($_GET['h'])) : 100; //高度，单位像素；
@$type = $_GET['t'] ? intval(trim($_GET['t'])) : 0; //类型，0：图片，1：base64；
if(!is_numeric($width)){
	$width = '225';
}
if(!is_numeric($height)){
	$height = '100';
}
if(!is_numeric($type)){
	$type = '0';
}
echoImg($width,$height,$type);

function echoImg($width,$height,$type){
	if($type == '1'){
		ob_start();
		createpng($width,$height);
		$img_data = ob_get_contents();
		ob_end_clean();
		echo 'data:image/png;base64,'.base64_encode($img_data);
	} else {

		header('Content-type: image/png');
		createpng($width,$height);
	}
}

function createpng($width,$height){
	$img = imagecreate($width,$height);
	$background_color = imagecolorallocate($img,245,245,245);
	$text_color = imagecolorallocate($img,88,102,110);
	putenv('GDFONTPATH=' . realpath('.'));
	$font='ArmxMod.ttf';
	if($width > 225){
		$txt ='ArmxMod for Typecho';
		$twidth = $width/2-108;
	} else {
		if($width >= 100 ){
			$txt ='ArmxMod';
		} else {
			$txt = ' ';
		}
		$twidth = $width/2-45;
	}
	if($height < 20){
		$txt = ' ';
	}
	$theight = $height/2+6;
	imagefilledrectangle($img,0,0,$width -1,$height -1,$background_color);
	imagettftext($img,14,0,$twidth,$theight,$text_color,$font,$txt);
	imagepng($img);
	imagedestroy($img);
}
?>
