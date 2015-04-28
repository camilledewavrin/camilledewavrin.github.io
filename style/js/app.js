(function($){

	$('input.round').wrap( '<div class="round" />').each(function(){
		var $input = $(this);
		var $div = $input.parent();
		var min = $input.data('min');
		var max = $input.data('max');
		var ratio = ($input.val() - min) / (max - min); 

		/* recupere le data-color du input*/
		var color = $input.data('color') ? $input.data('color') :  "rgba(33,33,33,0.6)";

		var $circle = $('<canvas width="150px" height="150px" />');
		var $color = $('<canvas width="150px" height="150px" />');
		$div.append($circle);
		$div.append($color);
		var ctx = $circle[0].getContext('2d');


		/* Création du premier rond */
		ctx.beginPath();
		ctx.arc(75,75, 50, 0, 2*Math.PI);
		ctx.lineWidth = 10;
		ctx.strokeStyle = "#ecf0f1";
		ctx.stroke();


		/* Création du rond avec couleur */
		var ctx = $color[0].getContext('2d');
		ctx.arc(75,75, 50,-1/2 * Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
		ctx.lineWidth = 11;
		ctx.strokeStyle = color;
		ctx.stroke();
	})
})(jQuery);