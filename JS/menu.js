function myFunction() {
    $(".blurred-box").toggle()
    $(".main-menu").toggle()

};
$(document).ready(function () {
    $(".main-menu").hide()
    $(".about").hide()
    
});

function showAbout(){
$(".about").toggle()
$(".main-menu").hide()

};


function goBack(){
    $(".about").hide()
    $(".main-menu").toggle()
}