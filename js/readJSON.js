$(document).ready(function(){

    console.log("hola");

    $.getJSON('../horario.json', function(programas) {
        //$('#stage').html('<p> Name: ' + jd.name + '</p>');
        $.each(programas, function(index, programa) {
            let html;
            let nombre_programa;
                $.each(programa, function(key, value) {
                if (key == "nombre_programa"){
                    nombre_programa = '<p class="titulo-programa">' + value + '</p>';
                    console.log(nombre_programa);
                }
                });

            html = '<div class="programa"><p class="titulo-programa">hola</p></div>';

            $('#parrilla').append(html);
        });       
        
    });
    
});


