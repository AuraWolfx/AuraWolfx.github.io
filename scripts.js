let petz = ['arroz','beatnipped','bubonic','buttermilkk','cakeperfectboy','custarddd4','daisycutie','gumbally','romainegettingup'];
var stickers = './pics/stickers/';
var bigstickers = './pics/stickers/big/';
var heads = './pics/heads/';
var bigheads = './pics/heads/big/';
$(document).ready(function(){
	$('#pet_info').hide();
	for (let i = 0; i < petz.length; i++) {
		//$("#pet_name").append($('<td>').text(petz[i]));
		$("#pet_list").append($('<div>')
						.append($('<img>')
							.attr('src', heads+petz[i]+'.png')
							.attr('id', i.toString())
							.attr('class', 'img'))
		);
		/*$("#pet_img").append($('<td>')
			.append($('<img>')
				.attr('src', bigheads+petz[i]+'.png')
				.attr('id', i.toString())
				.attr('class', 'img')));*/
	}
	/*$("#pet_name").append($('<td>'));
	$("#pet_img").append($('<td>').append($('<img>').attr('id', 'expanded')));*/
	$(".img").click(function(){
		$('#pet_info').show();
		showImage($(this).attr('id'));
	});
	function showImage(id){
		var filename = bigstickers+petz[id]+'.png';
		$("#expanded").attr('src', filename);
	}
	function addToTable(pet){
		console.log(pet);
	}
});