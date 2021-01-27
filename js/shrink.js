$(document).ready(function(){

    window.onload = function() {
      var vNavimg = document.getElementsByClassName("programa");
      
      numItems = $('.programa').length;
      documentHeigth = $( document ).height();
      height_items = documentHeigth * 0.90 / numItems;
      height_programa = height_items + "px";
      console.log(height_items); 
      height_programa_open = "300px";
      
      for(var i=0;i<vNavimg.length;i++){
        vNavimg[i].style.height = height_programa;
        vNavimg[i].style.overflow = "hidden";
      }
    };
  
    $('.programa').hover(function(){
        height_programa_open = $(this).width();
        $(this).css('height', height_programa_open);
        $(this).css('overflow', "auto");
        lastElementTop = $('#parrilla .programa:last-child').position().top ;
        scrollAmount = lastElementTop - 200 ;
    
        $('#parrilla').animate({scrollTop: scrollAmount},1000);
    }, function() {
        $(this).css('height',height_programa);
        $(this).css('overflow', "hidden");
        $(this).animate({scrollTop: '0px'}, 800);
    });
  });