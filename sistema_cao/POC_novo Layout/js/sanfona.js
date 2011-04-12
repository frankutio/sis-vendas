// JavaScript Document
$(function)(){
	$("li ul li ul").hide();	
	
	$("ul li li ul a").click(function)(){
		$("li ul li ul").slideUp();
		$(this).next().slideToggle();
	}
}