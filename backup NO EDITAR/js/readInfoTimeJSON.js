$(document).ready(function(){

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

    $.getJSON('../edicion/horario.json', function(programas) {

        let n_programa = 0;

        $.each(programas, function(index, programa) {
            if (programa.hora_de_inicio<=time) {
                if (programa.hora_de_fin>=time){
                    $("#info-titulo").html(programa.nombre_programa);
                    $("#info-hora").html(programa.hora_de_inicio + " : " + programa.hora_de_fin);
                    $("#info-txt").html(programa.descripcion);
                    let url_image = "url('edicion/imagenes/" + programa.nombre_imagen + "')"; 
                    $("#info-img").css({ 'background-color' : '', 'background-image': url_image});
                    n_programa += 1;
                }
            }
        });


        if (n_programa > 0){
            $("#info-titulo").removeClass("empty-text");
            $("#info-hora").removeClass("empty-text");
            $("#info-txt").removeClass("empty-text");
        } else {
            $("#info-titulo").addClass("empty-text");
            $("#info-hora").addClass("empty-text");
            $("#info-txt").addClass("empty-text");
        }

    }).fail(function(jqXHR, textStatus, errorThrown) { 
        $('#info-txt').html("error al leer el horario. Comprueba las comas <br> <br>" + errorThrown);
        $("#info-txt").removeClass("empty-text");
    });

    
    
    
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

        $.getJSON('../horario.json', function(programas) {

            let n_programa = 0;

            $.each(programas, function(index, programa) {
                if (programa.hora_de_inicio<=time) {
                    if (programa.hora_de_fin>=time){
                        $("#info-titulo").html(programa.nombre_programa);
                        $("#info-hora").html(programa.hora_de_inicio + " : " + programa.hora_de_fin);
                        $("#info-txt").html(programa.descripcion);
                        let url_image = "url('imagenes/" + programa.nombre_imagen + "')"; 
                        $("#info-img").css({ 'background-color' : '', 'background-image': url_image});
                        n_programa += 1;
                    }
                }
            });


            if (n_programa > 0){
                $("#info-titulo").removeClass("empty-text");
                $("#info-hora").removeClass("empty-text");
                $("#info-txt").removeClass("empty-text");
            } else {
                $("#info-titulo").addClass("empty-text");
                $("#info-hora").addClass("empty-text");
                $("#info-txt").addClass("empty-text");
            }

        }).fail(function(jqXHR, textStatus, errorThrown) { 
            $('#info-txt').html("error al leer el horario. Comprueba las comas <br> <br>" + errorThrown);
            $("#info-txt").removeClass("empty-text");
        });

        
    
    }, 60000);

    
    
});


