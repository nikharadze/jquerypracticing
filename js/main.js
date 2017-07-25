$(document).ready(function(){
    $(".btn1").click(function(){
        $("img").hide();
    });
    $(".btn2").click(function(){
        $("img").show();
    });
    $(".btn1").dblclick(function(){
      $("h1").css("color","orange");
      $("h1").css('font-size', "50px");
      $("h1").css('font-family', "Arial");
});
$(".btn2").dblclick(function(){
  $("h1").css("color","blue");
  $("h1").css('font-family', "Times New Roman");
  $("h1").css('font-size', "150px");
});
  $("#addbtn").click(function(){
    $("ul").append("<li>number3</li>")
    });
$(".change").hover(function(){
  $(this).css("color","blue");
  $(this).css("font-size","100px")
  });
  $(".change").mouseout(function(){
    $(this).css("color","black");
    $(this).css("font-size","20px")
});
$("#h22").mouseout(function(){
  $("#h22").slideUp("#h22");
  });
  $("#fade").mouseover(function(){
    $("#fade").fadeOut("slow");
    });
    $("#comeback").click(function(){
      $("#fade").fadeIn("slow");
    });
});
