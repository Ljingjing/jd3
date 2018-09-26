// zepto入口函数
$(function() {
	var jdCategory=new JdCategory();
	jdCategory.initLeftSlide();
	jdCategory.initRightSlide();
	jdCategory.leftCeiling();
   
});

var JdCategory=function(){

}

JdCategory.prototype={
	initLeftSlide:function(){
		// 初始化左边
		var swiper = new Swiper('.category-left .swiper-container', {
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: '.swiper-scrollbar',
			},
			mousewheel: true,
		});

	},
	initRightSlide:function(){
		 // 初始化右边
		 var swiper = new Swiper('.category-right .swiper-container', {
		 	direction: 'vertical',
		 	slidesPerView: 'auto',
		 	freeMode: true,
		 	scrollbar: {
		 		el: '.swiper-scrollbar',
		 	},
		 	mousewheel: true,
		 });
		},
		// 左侧吸顶效果
		leftCeiling:function(){
			// 1.给所有li添加点击事件
			// 当需要给很多子元素添加重复的事件的时候可以给父元素添加使用事件 捕获到子元素
			var ul = $('.category-left ul');
			var lis=ul.children();
			// 2. 给所有li添加一个index索引
			lis.each(function(index, value) {
				$(value).attr('index',index);
			});
			// 给ul添加的点击事件 注意移动端click有延迟,使用tap来解决延迟问题
			ul.on('tap',function(e){
				// 真正触发事件的其实是子元素 由于a在最里面所以是a的parentNode父元素
				// 3.获取当前点击的li
				var li = $(e.target).parent();
				console.dir(li);
				console.log(li.index);
				// 4.获取当前点击的li的索引
				var index = li.attr('index');
				// 5.获取当前点击的li的高度
				var liHeight=li.height();
				// 6.计算当前需要位移的距离
				var distanceY = -index*liHeight;
				// 7.判断当前位移的距离是否大于最大的位移的距离
				// 如果大于就使用当前计算的,如果小于使用最大位移距离
				// 值是负的
				var maxDistanceY = $('.category-left').height()-ul.height();
				if (distanceY>maxDistanceY) {
					// 8.给当前swiper滑动的所有图片容器元素(ul的父元素的父元素)设置位移
					ul.parent().parent().css('transform', 'translate3d(0px,'+distanceY+'px,0px)');

				}else{
					ul.parent().parent().css('transform', 'translate3d(0px,'+maxDistanceY+'px,0px)');

				}
				// 10.给当前的位移的元素添加一个过渡效果让他慢慢位移
					ul.parent().parent().css('transitionDuration', '300ms');
					// 11.给所有的li删除active 给当前的li添加active
					lis.removeClass('active');
					li.addClass('active');
			});
		}
}
