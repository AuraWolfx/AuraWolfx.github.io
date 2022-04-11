let petz = ['arroz','beatnipped','bubonic','buttermilkk','cakeperfectboy','custarddd4','daisycutie','gumbally','romainegettingup'];
let dogs = ['arroz','bubonic','custarddd4','daisycutie','gumbally'];
let dogLookup = [0,2,5,6,7];
let cats = ['beatnipped','buttermilkk','cakeperfectboy','romainegettingup'];
let catLookup = [1,3,4,8];
let other = [];
var stickers = './pics/stickers/';
var bigstickers = './pics/stickers/big/';
var heads = './pics/heads/';
var bigheads = './pics/heads/big/';
$(document).ready(function(){
	$('#pet_info').hide();
	for (let i = 0; i < dogs.length; i++) {
		$("#pure_dog_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', dogLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+dogs[i]+'.png')
									.attr('class', 'img'))
		);
	}
	for (let i = 0; i < cats.length; i++) {
		$("#pure_cat_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', catLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+cats[i]+'.png')
									.attr('class', 'img'))
		);
	}
	$(".pet").click(function(){
		$('#pet_info').show();
		showImage($(this).attr('id'));
	});
	function showImage(id){
		var thisPet = petz[id];
		var filename = bigstickers+thisPet+'.png';
		$("#expanded").attr('src', filename);
		$("#petName").text(thisPet);
	}
	function addToTable(pet){
		console.log(pet);
	}
});