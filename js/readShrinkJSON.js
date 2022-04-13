$(document).ready(function(){

    $.getJSON('../horario.json', function(programas) {
        $.each(programas, function(index, programa) {
            let html;

            let url_image = "'imagenes/" + programa.nombre_imagen + "'";

            let url_link ="";

            $.each( programa.autorxs, function( key, value ) {
                url_link += '<p class="autor-programa" onclick="window.open(';
                url_link += "'" + value.link + "'";
                url_link += ');" style="cursor: pointer;">';
                url_link += value.nombre + "</p>";
            });

            html = '<div class="programa" style="background-image: url(' + url_image + '); background-size: 100%;"><div class="programa-header"><p class="hora-programa">' + programa.hora_de_inicio + ' - ' + programa.hora_de_fin + '</p><p class="titulo-programa">' + programa.nombre_programa + '</p></div><div class="programa-body">' + url_link + '<p class="abstract-programa">' + programa.descripcion + '</p></div></div>';

            $('#parrilla').append(html);
        });     




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
    })
    .fail(function() { $('#parrilla').append("error al leer el JSON. Comprueba las comas"); });
    
});


