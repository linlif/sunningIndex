
//等待必要的DOM节点加载完成
$(function(){
  var $imgrolls = $('#jnImageroll div a');
  $imgrolls.css("opacity","0.7");
  var len = $imgrolls.length;
  var index=0;
  var adTimer = null;

  //给imgrolls设置鼠标经过事件，鼠标经过时显示对应的大图
  $imgrolls.mouseover(function(e){
    clearInterval(adTimer);//停止动画
    index = $imgrolls.index(this);
    showImg(index);
    // e.stopPropagation();
  }).eq(0).mouseover();

//给imgrolls设置点击事件
  // $imgrolls.bind('click', function(event) {
  //     clearInterval(adTimer);//停止动画
  //     index = $imgrolls.index(this);
  //     showImg(index);
  //     // e.stopPropagation();
  // }).eq(0).triggerHandler('click');

//鼠标离开事件
  $imgrolls.mouseleave(function(e){
    e.stopPropagation();
    $('#jnImageroll').trigger("mouseleave");
    console.log("imgrolls.mouseleave");
  })

  // 滑入停止动画 滑出开始动画
  $('#jnImageroll').hover(function(){
    if(adTimer){
      // clearInterval(adTimer);//停止动画
    }
  },function(){
    clearInterval(adTimer);//停止动画,防止动画叠加
      // index++;//先自加一次，防止第一次启动时等待时长加倍！！
      // if(index==len){index=0;}//循环
    adTimer = setInterval(function(){ //设置动画
      index++; //进入函数index先自加，避免初次出发这个函数时需要等待2倍时间才会切换幻灯片
      if(index==len){index=0;}//index达到上限时，归零
      showImg(index);
    },3000);//定时切换
    console.log("setInterval.mouseleave");
  }).trigger("mouseleave");//页面载入时候，触发鼠标移出事件，开始广告轮播

});



// 显示广告图函数
function showImg(index){
  var $rollObj = $('#jnImageroll');
  var $rollList = $rollObj.find("div a");
  var newHref = $rollList.eq(index).attr("href");//获取当前a标签href属性
  $("#JS_imgWrap").attr("href",newHref)//将href属性赋值给广告大图的a标签，然后就可以通过对应的index属性来显示广告图
                  //stop(true,true)用于清空未完成的动画序列，同时将正在执行的动画跳转到末状态
                  .find("img").eq(index).stop(true,true).fadeIn()
                  .siblings().fadeOut();
  $rollList.removeClass("chos").css("opacity","0.7")
           .eq(index).addClass("chos").css("opacity","1");
}
