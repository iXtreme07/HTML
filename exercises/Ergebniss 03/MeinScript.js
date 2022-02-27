$("div:first").css('backgroundColor', 'Orange');
$("div:last").css('backgroundColor', 'Green');
$("div").css("margin","20px")
$("div").css("margin-left","20%")
$("div").css("margin-right","20%")
$("div").css("height","50px")
$("div").css("width","50%")
$("div:first").hide();

$("Button").text("Ich bin ein Button!");



function animation(){
    $("div:first").toggle("slow");
    $("div:last").slideToggle("slow");

}