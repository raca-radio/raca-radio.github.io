$(document).ready(function() {

    var current = new Date();
    var hour = current.getHours();
    if (hour.toString().length<2){
        hour = "0" + hour.toString();
    }
    var minute = current.getMinutes();
    if (minute.toString().length<2){
        minute = "0" + minute.toString();
    }
    var time = hour + ":" + minute;
    console.log(time);

    var element_time = $( ".info-time" );
    for(var i = 0; i < element_time.length; i++)
    {
        var inicio_time = element_time[i].getAttribute("inicio");
        var fin_time = element_time[i].getAttribute("fin");

        if (fin_time<=time) {
            element_time[i].style.display = "none";
                
        } else {
            if (inicio_time<=time){
                element_time[i].style.display = "inline-flex";
            } else {
                element_time[i].style.display = "none";
            }
        }
        
    }
    

    if ($('.info-time:visible').length == 0){
        $("#info-empty").css( "display", "inline-flex" );
    } else {
        $("#info-empty").css( "display", "none" );
    }
    
    setInterval(function(){ 

        var current = new Date();
    var hour = current.getHours();
    if (hour.toString().length<2){
        hour = "0" + hour.toString();
    }
    var minute = current.getMinutes();
    if (minute.toString().length<2){
        minute = "0" + minute.toString();
    }
    var time = hour + ":" + minute;
    console.log(time);

    var empty = true;

    var element_time = $( ".info-time" );
    for(var i = 0; i < element_time.length; i++)
    {
        var inicio_time = element_time[i].getAttribute("inicio");
        var fin_time = element_time[i].getAttribute("fin");

        if (fin_time<=time) {
            element_time[i].style.display = "none";
                
        } else {
            if (inicio_time<=time){
                element_time[i].style.display = "inline-flex";
                empty = false;
            } else {
                element_time[i].style.display = "none";
            }
        }
        
    }

    if ($('.info-time:visible').length == 0){
        $("#info-empty").css( "display", "inline-flex" );
    } else {
        $("#info-empty").css( "display", "none" );
    }

        
    
    }, 60000);

});

