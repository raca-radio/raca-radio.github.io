$(document).ready(function() {
    if (window.matchMedia("(max-width: 900px)").matches)  
    { 

        var open;
        open = 0;
        
        console.log(open)
            
        
        $(".about").click(function () {
            if (open==0) {
                $("#about-info-expand").stop(true, false).animate({
                    height: "400px"
                });
                open = 1;
                console.log(open)
            } else {
                $("#about-info-expand").stop(true, false).animate({
                    height: "100%"
                });
                open = 0;
                console.log(open)
             }
        });

        $(".about").hover(function () {}, function () {
            $("#about-info-expand").stop(true, false).animate({
                height: "100%"
            }); 
            open = 0;
            console.log(open)      
        });
        
            
        

    } else { 
        $(".about").hover(function () {
            $("#about-info-expand").stop(true, false).animate({
                height: "400px"
            });
        }, function () {
            $("#about-info-expand").stop(true, false).animate({
                height: "100%"
            });       
        });
    }

    

});