let petz = ['Alastar','Arroz','Baby','Brandy','Caine','Cici','Daisy','Fame','Feliz','French Fry','Lights','Wren','Aster','Bubonic','Celine','Coolaid','Duffie','Dutch','Eddie','Eightball','Florence','Glancy','Hotpie','Ixika','Leche','Marmalade','Niles','Piper','Portia','Primrose','River','Setter','Spice','Ty','Vivian','Whiskey','Zapato','Blitzen','Blueberry','Custard','Georgia','Ginkgo','Goji','Gumball','Harbor','July','Kyle','Meteor','Opal','Petal','Ross','Apricot','Dinosaur','Mioka','Pepper','Ragu','Aralu','Beat','Bills','Bonnie Blue','Bristol','Buttermilk','Cake','Carlisle','Cigar','Corteo','Creamsicle','Dandy','Dark','Dip\'n\'dots','Frito','Furby','Guster','Hayley','Holland','Honeycomb','Melba','Negg','Oreo','Perry','Popsicle','Razz','Reindeer','Reual','Romaine','Scurvy','Seagull','Slater','Sushi','Tocca','Cirrus','Moonlight','Parks','Toxic','Salmia','Patrol'];
let pureDogs = ['Alastar','Arroz','Baby','Brandy','Caine','Cici','Daisy','Fame','Feliz','French Fry','Lights','Wren'];
let pdLookup = [0,1,2,3,4,5,6,7,8,9,10,11];
let bredDogs = ['Aster','Bubonic','Celine','Coolaid','Duffie','Dutch','Eddie','Eightball','Florence','Glancy','Hotpie','Ixika','Leche','Marmalade','Niles','Piper','Portia','Primrose','River','Setter','Spice','Ty','Vivian','Whiskey','Zapato'];
let bdLookup = [12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
let hexDogs = ['Blitzen','Blueberry','Custard','Georgia','Ginkgo','Goji','Gumball','Harbor','July','Kyle','Meteor','Opal','Petal','Ross']
let hdLookup = [37,38,39,40,41,42,43,44,45,46,47,48,49,50];
let pureCats = ['Apricot','Dinosaur','Mioka','Pepper','Ragu'];
let pcLookup = [51,52,53,54,55];
let bredCats = ['Aralu','Beat','Bills','Bonnie Blue','Bristol','Buttermilk','Cake','Carlisle','Cigar','Corteo','Creamsicle','Dandy','Dark','Dip\'n\'dots','Frito','Furby','Guster','Hayley','Holland','Honeycomb','Melba','Negg','Oreo','Perry','Popsicle','Razz','Reindeer','Reual','Romaine','Scurvy','Seagull','Slater','Sushi','Tocca'];
let bcLookup = [56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89];
let hexCats = ['Cirrus','Moonlight','Parks','Toxic'];
let hcLookup = [90,91,92,93];
let other = ['Salmia','Patrol'];
let oLookup = [94,95];
var stickers = './pics/stickers/';
var bigstickers = './pics/stickers/big/';
var heads = './pics/heads/';
var bigheads = './pics/heads/big/';
$(document).ready(function(){
	$('#pet_info').hide();
	//pure dogs
	for (let i = 0; i < pureDogs.length; i++) {
		$("#pure_dog_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', pdLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+pureDogs[i]+'.png')
									.attr('class', 'img')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	//bred dogs
	for (let i = 0; i < bredDogs.length; i++) {
		$("#bred_dog_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', bdLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+bredDogs[i]+'.png')
									.attr('class', 'img')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	//hex dogs
	for (let i = 0; i < hexDogs.length; i++) {
		$("#hex_dog_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', hdLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+hexDogs[i]+'.png')
									.attr('class', 'img')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	//pure cats
	for (let i = 0; i < pureCats.length; i++) {
		$("#pure_cat_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', pcLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+pureCats[i]+'.png')
									.attr('class', 'img')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	//bred cats
	for (let i = 0; i < bredCats.length; i++) {
		$("#bred_cat_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', bcLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+bredCats[i]+'.png')
									.attr('class', 'img')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	//hex cats
	for (let i = 0; i < hexCats.length; i++) {
		$("#hex_cat_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', hcLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+hexCats[i]+'.png')
									.attr('class', 'img')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	//other
	for (let i = 0; i < other.length; i++) {
		$("#other_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', oLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+other[i]+'.png')
									.attr('class', 'img')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	$(".pet").click(function(){
		$('#pet_info').show();
		showImage($(this).attr('id'));
	});
	function showImage(id){
		var thisPet = petz[id];
		var filename = bigstickers+thisPet+'.png';
		$("#expanded").attr('src', filename).attr('onerror', 'this.onerror=null; this.src=\'pics/missing_big.png\'');
		$("#petName").text(thisPet);
	}
	function addToTable(pet){
		console.log(pet);
	}
});