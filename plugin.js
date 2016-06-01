// JavaScript 
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
} 


+(function($){

	var Pic=function(){
		$(".pic").mouseenter(function(){
	
		});	
		$(".pic").mouseleave()(function(){
		
		});	
	}
	

	$(window).on('load',function(){
		Pic();
		$(".btt").hide();
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>500){
			$(".btt").show();	
		}
		else{
			$(".btt").hide();
		}
	});
})(jQuery);
