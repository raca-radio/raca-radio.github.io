$(document).ready(function() {
    if (window.matchMedia("(max-width: 900px)").matches)  
    { 

        var open;
        open = 0;
            
        
        $(".about").click(function () {
            if (open==0) {
                $("#about-info-expand").stop(true, false).animate({
                    height: "600px"
                });
                open = 1;
            } else {
                $("#about-info-expand").stop(true, false).animate({
                    height: "100%"
                });
                open = 0;
             }
        });

        $(".about").hover(function () {}, function () {
            $("#about-info-expand").stop(true, false).animate({
                height: "100%"
            }); 
            open = 0;    
        });
        
            
        

    } else { 
        $(".about").hover(function () {
            $("#about-info-expand").stop(true, false).animate({
                height: "600px"
            });
        }, function () {
            $("#about-info-expand").stop(true, false).animate({
                height: "100%"
            });       
        });
    }

    

});