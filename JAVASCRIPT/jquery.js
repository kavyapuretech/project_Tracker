 $(function(){
   var height = $(window).height();
   $("#map").css("height",height-90);  //map in body
   $("#map").css("z-index","-1");
   $("#map").show();
   $("#hiddenfooter").toggle();  //footer hidden code for default hide
    $("#search").hide();
    
   $("#maps").click(function(){
   
    $("#map").show();
    $("#search").show();
   });
   
//       $("#querywidget").click(function() {
//			$("#querywindow").css("display", "block");		
//          
//		});
    //footer hidden code
     $("button").click(function(){  
    $("#hiddenfooter").toggle(); 
    });
   });
