$(function(){
  $('#inputSearch').focus(function(){
    $(this).addClass('focus');
    if($(this).val() == this.defaultValue){
      $('this').val();
    }
  }).blur(function(){
    $(this).removeClass('focus');
    if($(this).val() == ''){
      $(this).val(this.defaultValue);
    }
  }).keyup(function(e){
    if(e.which == 13){
      alert('您搜索的关键词是：'+this.value);
    }
  });
});
