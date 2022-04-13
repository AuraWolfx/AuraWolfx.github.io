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
let petDivs = ['#pure_dog_list','#bred_dog_list','#hex_dog_list','#pure_cat_list','#bred_cat_list','#hex_cat_list','#other_list'];
let titles = ['Purebred Dogs','Bred Dogs','Hexed Dogs','Purebred Cats','Bred Cats','Hexed Cats','Other Pets', 'Single Adoptions', 'Litter Adoptions', 'About', 'Home'];
var stickers = './pics/stickers/';
var bigstickers = './pics/stickers/big/';
var heads = './pics/heads/';
var bigheads = './pics/heads/big/';
const pets = {
	"dogs":{
		"purebred":{
			"Alastar":{
				"breed":""
			},
			"Arroz":{
				"breed":""
			},
			"Baby":{
				"breed":""
			},
			"Brandy":{
				"breed":""
			},
			"Caine":{
				"breed":""
			},
			"Cici":{
				"breed":""
			},
			"Daisy":{
				"breed":""
			},
			"Fame":{
				"breed":""
			},
			"Feliz":{
				"breed":""
			},
			"French Fry":{
				"breed":""
			},
			"Lights":{
				"breed":""
			},
			"Wren":{
				"breed":""
			}
		},
		"bred":{
			"Aster":{
				"breed":""
			},
			"Bubonic":{
				"breed":""
			},
			"Celine":{
				"breed":""
			},
			"Coolaid":{
				"breed":""
			},
			"Duffie":{
				"breed":""
			},
			"Dutch":{
				"breed":""
			},
			"Eddie":{
				"breed":""
			},
			"Eightball":{
				"breed":""
			},
			"Florence":{
				"breed":""
			},
			"Glancy":{
				"breed":""
			},
			"Hotpie":{
				"breed":""
			},
			"Ixika":{
				"breed":""
			},
			"Leche":{
				"breed":""
			},
			"Marmalade":{
				"breed":""
			},
			"Niles":{
				"breed":""
			},
			"Piper":{
				"breed":""
			},
			"Portia":{
				"breed":""
			},
			"Primrose":{
				"breed":""
			},
			"River":{
				"breed":""
			},
			"Setter":{
				"breed":""
			},
			"Spice":{
				"breed":""
			},
			"Ty":{
				"breed":""
			},
			"Vivian":{
				"breed":""
			},
			"Whiskey":{
				"breed":""
			},
			"Zapato":{
				"breed":""
			}
		},
		"hex":{
			"Blitzen":{
				"breed":""
			},
			"Blueberry":{
				"breed":""
			},
			"Custard":{
				"breed":""
			},
			"Georgia":{
				"breed":""
			},
			"Ginkgo":{
				"breed":""
			},
			"Goji":{
				"breed":""
			},
			"Gumball":{
				"breed":""
			},
			"Harbor":{
				"breed":""
			},
			"July":{
				"breed":""
			},
			"Kyle":{
				"breed":""
			},
			"Meteor":{
				"breed":""
			},
			"Opal":{
				"breed":""
			},
			"Petal":{
				"breed":""
			},
			"Ross":{
				"breed":""
			}
		}
	},
	"cats":{
		"purebred":{
			"Apricot":{
				"breed":""
			},
			"Dinosaur":{
				"breed":""
			},
			"Mioka":{
				"breed":""
			},
			"Pepper":{
				"breed":""
			},
			"Ragu":{
				"breed":""
			}
		},
		"bred":{
			"Aralu":{
				"breed":""
			},
			"Beat":{
				"breed":""
			},
			"Bills":{
				"breed":""
			},
			"Bonnie Blue":{
				"breed":""
			},
			"Bristol":{
				"breed":""
			},
			"Buttermilk":{
				"breed":""
			},
			"Cake":{
				"breed":""
			},
			"Carlisle":{
				"breed":""
			},
			"Cigar":{
				"breed":""
			},
			"Corteo":{
				"breed":""
			},
			"Creamsicle":{
				"breed":""
			},
			"Dandy":{
				"breed":""
			},
			"Dark":{
				"breed":""
			},
			"Dip'n'dots":{
				"breed":""
			},
			"Frito":{
				"breed":""
			},
			"Furby":{
				"breed":""
			},
			"Guster":{
				"breed":""
			},
			"Hayley":{
				"breed":""
			},
			"Holland":{
				"breed":""
			},
			"Honeycomb":{
				"breed":""
			},
			"Melba":{
				"breed":""
			},
			"Negg":{
				"breed":""
			},
			"Oreo":{
				"breed":""
			},
			"Perry":{
				"breed":""
			},
			"Popsicle":{
				"breed":""
			},
			"Razz":{
				"breed":""
			},
			"Reindeer":{
				"breed":""
			},
			"Reual":{
				"breed":""
			},
			"Romaine":{
				"breed":""
			},
			"Scurvy":{
				"breed":""
			},
			"Seagull":{
				"breed":""
			},
			"Slater":{
				"breed":""
			},
			"Sushi":{
				"breed":""
			},
			"Tocca":{
				"breed":""
			}
		},
		"hex":{
			"Cirrus":{
				"breed":""
			},
			"Moonlight":{
				"breed":""
			},
			"Parks":{
				"breed":""
			},
			"Toxic":{
				"breed":""
			}
		}
	},
	"other":{
		"Salmia":{
				"breed":""
		},
		"Patrol":{
				"breed":""
		}
	}
}
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
	//Close dropdowns
	$(document).mouseup(function(e) {
		if (!$("#crew").is(e.target) && $("#crew").has(e.target).length === 0){$('#crew').css('display', 'none');}
		if (!$("#adopt_btn").is(e.target) && $("#adopt_btn").has(e.target).length === 0){$('#adoptions').css('display', 'none');}
	});
	$('#crew_btn').hover(function(){
		$('#crew').css('display', 'block');
		$('#adoptions').css('display', 'none');
	});
	$('#crew').hover(function(){},function(){$('#crew').css('display', 'none');});
	$('#adoptions').hover(function(){},function(){$('#adoptions').css('display', 'none');});
	$('#adopt_btn').hover(function(){
		$('#adoptions').css('display', 'block');
		$('#crew').css('display', 'none');
	});
	$('#pd').click(function(){showCrew(0);});
	$('#bd').click(function(){showCrew(1);});
	$('#hd').click(function(){showCrew(2);});
	$('#pc').click(function(){showCrew(3);});
	$('#bc').click(function(){showCrew(4);});
	$('#hc').click(function(){showCrew(5);});
	$('#oth').click(function(){showCrew(6);});
	$('#singles').click(function(){hideCrew(7)});
	$('#litters').click(function(){hideCrew(8)});
	$('#about').click(function(){hideCrew(9)});
	$('#home').click(function(){hideCrew(10)});
	function showCrew(id){
		$('#crew').css('display', 'none');
		$('#pet_list').css('display', '');
		$('#pet_info').hide();
		//$('#expanded').attr('src', '');
		$('.page_title').text(titles[id]);
		for(i of petDivs)
			if(i==petDivs[id]){
				//console.log(i);
				$(i).css('display', '');
			}else{
				$(i).css('display', 'none');
			}
	}
	function hideCrew(id){
		$('#pet_list').css('display', 'none');
		$('.page_title').text(titles[id]);
	}
});