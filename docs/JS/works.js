$(document).ready(function(){
    $(".card").addClass("animated fadeIn")
    $("#Valorant").hide();
    $("#League").hide();
    $("#rs").hide();
    $("#gametoggle").click(function(){
        $(".card").hide();
        $("#Valorant").toggle()
        $("#League").toggle()
        $("#rs").toggle()

    
    })


    $("#Valorant").click(function(){
        location.reload();
    })




})