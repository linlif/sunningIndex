
$(function(){
  $("#jnBrandTab li a").click(function() {
    $(this).parent().addClass('chos')
            .siblings().removeClass('chos');
    var index = $("#jnBrandTab li a").index(this);
    showBrandList(index);
    return false
  }).eq(0).click();
});


//显示不同模块
function showBrandList(index){
  // console.log("haha");
  var $rollObj = $("#jnBrandList");
  var rollWidth = $rollObj.find("li").outerWidth();
  rollWidth = rollWidth * 4;//一个版面的宽度
  $rollObj.stop(true, false).animate({left : -rollWidth*index}, 800);
}
