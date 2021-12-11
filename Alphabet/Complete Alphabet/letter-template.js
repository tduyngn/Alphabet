var pix = document.getElementsByName("pixel");

for (var i = 0; i < pix.length; i++) {
  pix[i].style.animationDelay = Math.ceil(Math.random()*5000)+"ms";
}
$(document).ready(function(){
         
  for (var i = 0; i < 10; i++) {  
      var img = "<img src ='Asset 1.svg'/>"; 
      $("body .dudu1").append(img);
  }

})