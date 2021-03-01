$(document).ready(function() {
    
    setInterval(function(){ 

        var current = new Date();
        var hour = current.getHours();
        if (hour.length<2){
            hour = "0" + hour;
        }
        var minute = current.getMinutes();
        if (minute.length<2){
            minute = "0" + minute;
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
                    element_time[i].style.display = "inline";
                } else {
                    element_time[i].style.display = "none";
                }
            }
        
        }
        
    
    }, 5000);

});

