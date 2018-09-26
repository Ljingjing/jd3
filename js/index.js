window.addEventListener('load', function() {

    var jdEffect = new JdEffect();
    jdEffect.headerScroll();
    jdEffect.downTime();
    jdEffect.slide();

});

var JdEffect = function(dom) {};

JdEffect.prototype = {
    /* 头部背景渐变 */
    headerScroll: function() {
    	var header = document.querySelector('#header');
        window.addEventListener('scroll',scroll);
        scroll();; 

            function scroll(){
            	var scrollTop = document.documentElement.scrollTop;

            	var slideHeight = document.querySelector('#slide').offsetHeight;

            	var opacity = scrollTop / slideHeight;

            	if (opacity > 1) {
              	  opacity = 1;
           	 	}
            	header.style.backgroundColor = "rgba(222, 24, 27, " + opacity + ")";
            }

    },
    
    // 秒杀倒计时
    downTime:function(){

        var futureTime = new Date(2018, 8, 22, 18, 0, 0).getTime();
        var nowTime = new Date().getTime();
        // 求秒数
        var time = (futureTime - nowTime) / 1000;
        // console.log(time);
        var spans = document.querySelectorAll('.seckill .down-time span');

        setInterval(setTime, 1000);
        setTime();
        function setTime(){
        	time--;
            if (time <= 0) {
                time = 7200;
                // clearInterval(timeID);
            }

            var hour = Math.floor(time / 3600);
            var minute = Math.floor(time % 3600) / 60;
            var second = Math.floor(time % 60);

            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = Math.floor(hour % 10);
            spans[3].innerHTML = Math.floor(minute / 10);
            spans[4].innerHTML = Math.floor(minute % 10);
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = Math.floor(second % 10);
        }
    },

    /*轮播图 */
    slide: function() {
        var mySwiper = new Swiper('.swiper-container', {

            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true, //等同于以下设置
            // effect: 'fade',
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

}