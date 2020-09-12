$(document).ready(function() {



  setVcels();
  setEyes();
  setFrames();
  setFace();
  setFace2();
  setGeometry();
  setGeometry2();
  setKey();

  $(".lookup").click(function(){
    $(".eye").css("background-image", "url(img/eyeup.png)");
    $(".face").css("background-image", "url(img/faceup.png)");
    $(".face2").css("background-image", "url(img/faceup.png)");

  });

  $(".lookdown").click(function(){
    $(".eye").css("background-image", "url(img/eyedown.png)");
    $(".face").css("background-image", "url(img/facedown.png)");
    $(".face2").css("background-image", "url(img/facedown.png)");

  });

  $(".decreaseIPD").click(function(){
    decreaseIPD();
  });

  $(".increaseIPD").click(function(){
    increaseIPD();
  });

  $(".decreaseV").click(function(){
    increaseV();
  });

  $(".increaseV").click(function(){
    decreaseV();
  });

  $(".decreaseFH").click(function(){
    increaseFH();
  });

  $(".increaseFH").click(function(){
    decreaseFH();
  });
  $(".decreasePT").click(function(){
    increasePT();
  });

  $(".increasePT").click(function(){
    decreasePT();
  });



});  // End Doc Ready Function

  var dispN = 0;

//Function Junction
// layout functions

function setVcels(){
  width = $(window).width() / 2 - 280;
  $(".vcels").css("left", width +"px");
};

function setEyes(){
  eyeswidth = $('.eyes').width() / 2;
  width = $(window).width() / 2 - eyeswidth;
  $(".eyes").css("left", width +"px");
}

function setFrames(){
  frameswidth = $('.frames').width() / 2;
  width = $(window).width() / 2 - frameswidth;
  $(".frames").css("left", width +"px");
}

function setFace(){
  width = $(window).width() / 2 - 650;
  $(".face").css("left", width + "px");
}

function setFace2(){
  face2width = $('.face2').width() / 2 ;
  width = $(window).width() / 2 - face2width;
  $(".face2").css("left", width +"px");
}

function setGeometry2(){
    face2width = $('.display').width() / 2 ;
    width = $(window).width() / 2 - face2width;
    $(".display").css("left", width + "px");
}

function setGeometry(){
    width = $(window).width() / 2 - 730;
    $(".geometry").css("left", width + "px");
}
function setKey(){
    width = $(window).width() / 2 + 310;
    $(".geomPage ul").css("margin-left", width + "px");
}


// Animation functions

function increaseIPD(){
 width = $(".eyes").width();
 if (width < 885) {
   width = width + 15;
   $(".eyes").css("width", width + "px");
   ipd = parseInt($('.ipdPage h2').text());
   ipd = ipd + 1;
   $('.ipdPage h2').text(ipd + "mm");
   setEyes();
 };
};

function decreaseIPD(){
 width = $(".eyes").width();
  if (width > 675){
  width = width - 15;
  $(".eyes").css("width", width + "px");
  ipd = parseInt($('.ipdPage h2').text());
  ipd = ipd - 1;
  $('.ipdPage h2').text(ipd + "mm");
  setEyes();
  };
};

function decreaseV(){
  position = parseInt($('.vcels').css('top'));
  if (position > 70) {
  position = position - 6;
  $(".vcels").css("top", position);
  Vertex = parseInt($(".display").css("background-position-x"));
  Vertex = Vertex + 4;
  $(".display").css("background-position-x", Vertex + "px");
  vert = parseInt($('.vertPage h2').text());
  vert = vert + 1;
  $('.vertPage h2').text(vert + "mm"); }
};

function increaseV(){
  position = parseInt($('.vcels').css('top'));
  if (position < 280) {
  position = position + 6;
  $(".vcels").css("top", position);
  Vertex = parseInt($(".display").css("background-position-x"));
  Vertex = Vertex - 4;
  $(".display").css("background-position-x", Vertex + "px");
  vert = parseInt($('.vertPage h2').text());
  vert = vert - 1;
  $('.vertPage h2').text(vert + "mm"); }
};

function increaseFH(){
  position = parseInt($('.vcels').css('top'));
  if (position > 70) {
  margin = parseInt(jQuery(".frames").css("margin-top"));
  margin = margin - 6;
  $(".frames").css("margin-top", margin + "px");
  position = position - 6;
  $(".vcels").css("top", position);
  fh = parseInt($(".display").css("background-position-y"));
  fh = fh - 4;
  $(".display").css("background-position-y", fh + "px");
  FHdisp = parseInt($('.fhPage h2').text());
  FHdisp = FHdisp - 1;
  $('.fhPage h2').text(FHdisp + "mm");
}
};

function decreaseFH(){
  position = parseInt($('.vcels').css('top'));
  if (position < 280) {
  margin = parseInt(jQuery(".frames").css("margin-top"));
  margin = margin + 6;
  $(".frames").css("margin-top", margin + "px");
  position = position + 6;
  $(".vcels").css("top", position);
  fh = parseInt($(".display").css("background-position-y"));
  fh = fh + 4;
  $(".display").css("background-position-y", fh + "px");
  FHdisp = parseInt($('.fhPage h2').text());
  FHdisp = FHdisp + 1;
  $('.fhPage h2').text(FHdisp + "mm");
}

};

function increasePT(){
  if (dispN > -7){
  position = parseInt($('.vcels').css('top'));
  if (position > 70) {
  position = position + 4;
  $(".vcels").css("top", position);
  PTdisp = parseInt($('.panoPage h2').text());
  PTdisp = PTdisp - 1;
  $('.panoPage h2').text(PTdisp + " Degrees");

  dispN = dispN - 1;
  $('.display').css("background-image", "url(img/lightpath_" + dispN + ".png)");
  };
}
};

function decreasePT(){
  if (dispN < 7){
  position = parseInt($('.vcels').css('top'));
  if (position < 280) {
  position = position - 4;
  $(".vcels").css("top", position);
  PTdisp = parseInt($('.panoPage h2').text());
  PTdisp = PTdisp + 1;
  $('.panoPage h2').text(PTdisp + " Degrees");
  dispN = dispN + 1;
  $('.display').css("background-image", "url(img/lightpath_" + dispN + ".png)");
  };
}
};
