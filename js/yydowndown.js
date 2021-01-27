$(document).ready(function(){
    $("#descargar").click(function(){
        var password = $("#password").val();
        console.log(password);

        if (password == "XERWREERER") {
            window.location.href = 'pdfs/portfolio1.pdf'



          } else if (password == "portfolio2") {
            window.location.href = 'pdfs/portfolio2.pdf'



          } else if (password == "portfolio3") {
            window.location.href = 'pdfs/portfolio2.pdf'



          } else {
            alert("a Oscar no le gusta");
          }
    });
  });

