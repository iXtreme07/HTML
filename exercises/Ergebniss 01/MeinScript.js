$('h1').text("Das ist eine Überschrift");
$('p').text("Das ist ein Absatz");
$("Button").text("Ich bin ein Button!");


$("Button").click(button);


function button(){
    $('p:odd').html($('input').val());
}