$(document).ready(function(){
	$('input[name="stype"]').parent().on('click', function(){
		$('input[name="stype"]').parent().css('backgroundColor', '#000');
		$(this).find('input[name="stype"]').prop('checked', true);
		$(this).css('background-color','#FF2300');
	});
	$('body > div.ng-view.ng-scope').addClass('mainSignIn');
	$('<div class="form-title">Login In</div>').insertBefore('.mainSignIn');
});