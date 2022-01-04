<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<?php 

$db = $this->db;
$cid = $this ->cid;
$options = $this->options;
$cut = '10';
$url = $this->permalink;
$page = 1;
$size = 32;

$total = $db->fetchObject($db->select(array('COUNT(coid)' => 'num'))->from('table.comments')->where('table.comments.cid = ?', $cid)->where('table.comments.type = ?', 'comment'))->num;
$total_page = ceil($total/$cut);

if( !empty($_GET["ipage"]) && is_numeric($_GET["ipage"])){
	$page = intval($_GET["ipage"]);
}
if( $page>$total_page){
	$page = $total_page;
}

$links = $db->fetchAll($db->select()->from('table.comments')
			->where('table.comments.type = ?', 'comment')
			->where('table.comments.cid = ?', $cid)
			->page($page, $cut)->order('table.comments.created', Typecho_Db::SORT_DESC));

?>

<ol id="saying-list">
<?php foreach($links as $link): ?>
<li itemscope itemtype="http://schema.org/UserComments" id="comment-<?php _e($link['coid']);?>" class="comment-item comment-parent comment-even comment-by-author">
<div class="comment-author" itemprop="creator" itemscope itemtype="http://schema.org/Person">
	<?php 
	$cimg = fullurl(avatar($link['author'],$link['mail']),0);
	if ($options->lazyimg){
		echo '<img class="avatar lazyloading circular b-lazy saying-avatar" '.enableHolder($cimg,1).' alt="'.$link['author'].'" width="'.$size.'" height="'.$size.'"/>';
	} else {
		echo '<img class="avatar lazyloading circular saying-avatar" src="'.$cimg.'" alt="'.$link['author'].'" width="'.$size.'" height="'.$size.'"/>';
	}?>
</div>
<div class="comment-body">
	<div class="comment-meta saying-meta">
		<strong class="author-name">
		<?php
		$author = $link['author'];
		if (!$options->showusertype){
			$img = $options->themeUrl . '/img/vip.png';
			if($img) {
				$img = parse_url($img,PHP_URL_PATH);
				$img = fullurl($img,0);
			}
			echo $author.'<img src="'.$img.'" alt="博主认证" class="vip"/>';
		} else {
			echo $author.'<span class="authorrz">博主</span>';
		}
		?>
		</strong>
		<a href="<?php _e($url."/comment-page-".$page."#comment-".$link['coid']);?>" class="saying-date"><time itemprop="commentTime" datetime="<?php _e(date('Y/m/d h:m:s',$link['created']));?>">发表于 <?php _e(date('Y 年 m 月 d 日 h:m',$link['created']));?></time></a>
	</div>
	<div class="comment-content" itemprop="commentText">
		<p>
			<?php $options->commentsHTMLTagAllowed .= '<img src="" alt="" title="" />';
				if (!empty($options->commentfun) && in_array('showsmailes', $options->commentfun)) {
					$smailetag = array_merge(parsesmilies(0)[1],parsesmilies(1)[1],parsesmilies(2)[1]);
					$smaileimg = array_merge(parsesmilies(0)[2],parsesmilies(1)[2],parsesmilies(2)[2]);
					$parsecomment = str_replace($smailetag, $smaileimg, $link['text']);
				} else {
					$parsecomment = $link['text'];
				}
				$parsecomments = commentimg($parsecomment);
				echo $parsecomments;
			?>
		</p>
	</div>
</div>
</li>
<?php endforeach;?>
</ol>
<ol class="page-navigator">
<?php
if($page >1 ){
	$pre = $page - 1;
	echo '<li class="prev"><a href="'.$url.'?ipage='.$pre.'">上一页</a></li>';
	echo '<li><a href="'.$url.'?ipage=1">1</a></li>';
	if($pre != 1){
		if(($total_page >3) or ($total_page >2 && $page=3)){
			echo '<li class="saying-circle">...</li>';
		}
	}
}
echo '<li class="current"><a href="'.$url.'?ipage='.$page.'">'.$page.'</a></li>';
if($page < $total_page){
	$next = $page + 1;
	if($next != $total_page){
		if(($total_page >3) or ($total_page >2 && $page=1)){
        		echo '<li class="saying-circle">...</li>';
		}
	}
	echo '<li><a href="'.$url.'?ipage='.$total_page.'">'.$total_page.'</a></li>';
	echo '<li class="next"><a href="'.$url.'?ipage='.$next.'">下一页</a></li>';
}
?>
</ol>
