$(document).ready(function() {
  $("#jnBrandList li").each(function(index) {
    var $img = $(this).find("img");
    var img_w = $img.width();
    var img_h = $img.height();
    var spanHtml = '<em style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></em>';
    $(spanHtml).appendTo(this);
    // console.log("append");
  });

  // $("#jnBrandList").delegate(".imageMask", "hover", function() {
  //   $(this).toggleClass("imageOver");
  //   console.log("aa");
  // });
  //
  $("#jnBrandList").on('hover','.imageMask',function(){
    $(this).toggleClass('imageOver');
    console.log("aa");
  });

});
