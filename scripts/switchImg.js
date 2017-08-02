
//点击缩略图，显示对应的大图
$(document).ready(function() {
  $(".imgList img").click(function() { //给img绑定点击事件
    $(".jqzoomWrap img").attr('src', $(this).attr('big')); //找到缩略图的big属性（自定义的），并用它替换大图的src属性
    $(this).addClass('activeImg')//给当前img增加 .activeImg类（选中样式）
           .parent().siblings().find("img").removeClass('activeImg');//找到父元素的所有兄弟节点的img标签，并移除.activeImg类
  }).eq(0).triggerHandler('click');
});
