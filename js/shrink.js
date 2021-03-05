$(document).ready(function(){

    
      var vNavimg = document.getElementsByClassName("programa");
      
      numItems = $('.programa').length;
      documentHeigth = $( document ).height();
      height_items = documentHeigth/ numItems;
      height_programa = height_items + "px";
      height_programa_open = "300px";
      
      for(var i=0;i<vNavimg.length;i++){
        vNavimg[i].style.height = height_programa;
        vNavimg[i].style.overflow = "hidden";
      }
  
    $('.programa').hover(function(){
        height_programa_open = $(this).width();
        height_shrink_program = (documentHeigth - height_programa_open) / (numItems - 1);
        $('.programa').not(this).css('height', height_shrink_program);
        $(this).css('height', height_programa_open);
        $(this).css('overflow', "auto");
        $(this).find(".autor-programa").css('margin-top', "10px");

    }, function() {
        $(this).css('height',height_programa);
        $('.programa').not(this).css('height',height_programa);
        $(this).css('overflow', "hidden");
        $(this).find(".autor-programa").css('margin-top', "30%");
    });
  });