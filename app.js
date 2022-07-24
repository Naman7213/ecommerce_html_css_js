$(document).ready(function(){
	$("#showhide").click(function(){
		$("#s21ultra").toggle();
	});
	$("#showhide1").click(function(){
		$("#oneplus").toggle();
	});
	$("#showhide2").click(function(){
		$("#apple").toggle();
	});
	$("#showhide3").click(function(){
		$("#asusrog").toggle();
	});
});

$(document).ready(function(){
  $("#visible").click(function(){
    $("#menubar").toggle();
  });
});
var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

var myIndex = 0;
advert();

function advert() {
  var i;
  var x = document.getElementsByClassName("myad");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(advert, 2000);
}