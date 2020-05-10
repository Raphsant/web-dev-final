$(document).ready(function(){
        $(".scrolldown").hide();
        $(".white").addClass("animated fadeIn")
        $(".transparent").addClass("animated fadeIn")
        $("#dosbox").hide();
        
        $(".transparent").click(function(){
            $("#dosbox").toggle();
            $(".scrolldown").toggle();
            $(".scrolldown").addClass("animated heartBeat");
            $(document).scroll(function(){
                $(".scrolldown").css("color", "red");
                
            });
            
        });

        
})






var dosbox = new Dosbox({
    id: "dosbox",
    onload: function (dosbox) {   dosbox.run("https://cdn.rawgit.com/darrengruber/docker-em-dosbox-doom/afad47b2/doom_shareware/doom19s_deiced.zip", "./DOOM.EXE");
    },
    onrun: function (dosbox, app) {
      console.log("App '" + app + "' is runned");
    }
  });
