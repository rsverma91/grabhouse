$(document).ready(function(){
	$('input[name="stype"]').parent().on('click', function(){
		$('input[name="stype"]').parent().css('backgroundColor', '#000');
		$(this).find('input[name="stype"]').prop('checked', true);
		$(this).css('background-color','#FF2300');
	});
	$('.selectbtn').click(function(){
		$('.' + $(this).prop("id")).slideDown();
	})
});