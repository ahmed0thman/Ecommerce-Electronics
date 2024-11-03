$(window).on('load',function(){
  $(".count").each(function() {
    $(this).numScroll({
      number: $(this).attr("value"),
      'time': 1500,
      'fromZero':true,
      'delay': 200
    });
  });
});