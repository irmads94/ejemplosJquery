// $(document).ready(saluda)

// function saluda(){
// alert($('h1').text())
// }

$(function(){
    //alert($('h1').text())
    //Se crea un Parrafo nuevo en un objeto jquery
    $nuevo = $('<p>Parrafo Nuevo</p>')//sin var se vuelve global
    $('h2').after($nuevo)
})