// JavaScript 
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
