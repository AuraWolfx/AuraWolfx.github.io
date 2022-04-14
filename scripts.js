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
				"breed":"",
				"sex":""
			},
			"Arroz":{
				"breed":"",
				"sex":""
			},
			"Baby":{
				"breed":"",
				"sex":""
			},
			"Brandy":{
				"breed":"",
				"sex":""
			},
			"Caine":{
				"breed":"",
				"sex":""
			},
			"Cici":{
				"breed":"",
				"sex":""
			},
			"Daisy":{
				"breed":"",
				"sex":""
			},
			"Fame":{
				"breed":"",
				"sex":""
			},
			"Feliz":{
				"breed":"",
				"sex":""
			},
			"French Fry":{
				"breed":"",
				"sex":""
			},
			"Lights":{
				"breed":"",
				"sex":""
			},
			"Wren":{
				"breed":"",
				"sex":""
			}
		},
		"bred":{
			"Aster":{
				"breed":"",
				"sex":""
			},
			"Bubonic":{
				"breed":"",
				"sex":""
			},
			"Celine":{
				"breed":"",
				"sex":""
			},
			"Coolaid":{
				"breed":"",
				"sex":""
			},
			"Duffie":{
				"breed":"",
				"sex":""
			},
			"Dutch":{
				"breed":"",
				"sex":""
			},
			"Eddie":{
				"breed":"",
				"sex":""
			},
			"Eightball":{
				"breed":"",
				"sex":""
			},
			"Florence":{
				"breed":"",
				"sex":""
			},
			"Glancy":{
				"breed":"",
				"sex":""
			},
			"Hotpie":{
				"breed":"",
				"sex":""
			},
			"Ixika":{
				"breed":"",
				"sex":""
			},
			"Leche":{
				"breed":"",
				"sex":""
			},
			"Marmalade":{
				"breed":"",
				"sex":""
			},
			"Niles":{
				"breed":"",
				"sex":""
			},
			"Piper":{
				"breed":"",
				"sex":""
			},
			"Portia":{
				"breed":"",
				"sex":""
			},
			"Primrose":{
				"breed":"",
				"sex":""
			},
			"River":{
				"breed":"",
				"sex":""
			},
			"Setter":{
				"breed":"",
				"sex":""
			},
			"Spice":{
				"breed":"",
				"sex":""
			},
			"Ty":{
				"breed":"",
				"sex":""
			},
			"Vivian":{
				"breed":"",
				"sex":""
			},
			"Whiskey":{
				"breed":"",
				"sex":""
			},
			"Zapato":{
				"breed":"",
				"sex":""
			}
		},
		"hex":{
			"Blitzen":{
				"breed":"",
				"sex":""
			},
			"Blueberry":{
				"breed":"",
				"sex":""
			},
			"Custard":{
				"breed":"",
				"sex":""
			},
			"Georgia":{
				"breed":"",
				"sex":""
			},
			"Ginkgo":{
				"breed":"",
				"sex":""
			},
			"Goji":{
				"breed":"",
				"sex":""
			},
			"Gumball":{
				"breed":"",
				"sex":""
			},
			"Harbor":{
				"breed":"",
				"sex":""
			},
			"July":{
				"breed":"",
				"sex":""
			},
			"Kyle":{
				"breed":"",
				"sex":""
			},
			"Meteor":{
				"breed":"",
				"sex":""
			},
			"Opal":{
				"breed":"",
				"sex":""
			},
			"Petal":{
				"breed":"",
				"sex":""
			},
			"Ross":{
				"breed":"",
				"sex":""
			}
		}
	},
	"cats":{
		"purebred":{
			"Apricot":{
				"breed":"",
				"sex":""
			},
			"Dinosaur":{
				"breed":"",
				"sex":""
			},
			"Mioka":{
				"breed":"",
				"sex":""
			},
			"Pepper":{
				"breed":"",
				"sex":""
			},
			"Ragu":{
				"breed":"",
				"sex":""
			}
		},
		"bred":{
			"Aralu":{
				"breed":"",
				"sex":""
			},
			"Beat":{
				"breed":"",
				"sex":""
			},
			"Bills":{
				"breed":"",
				"sex":""
			},
			"Bonnie Blue":{
				"breed":"",
				"sex":""
			},
			"Bristol":{
				"breed":"",
				"sex":""
			},
			"Buttermilk":{
				"breed":"",
				"sex":""
			},
			"Cake":{
				"breed":"",
				"sex":""
			},
			"Carlisle":{
				"breed":"",
				"sex":""
			},
			"Cigar":{
				"breed":"",
				"sex":""
			},
			"Corteo":{
				"breed":"",
				"sex":""
			},
			"Creamsicle":{
				"breed":"",
				"sex":""
			},
			"Dandy":{
				"breed":"",
				"sex":""
			},
			"Dark":{
				"breed":"",
				"sex":""
			},
			"Dip'n'dots":{
				"breed":"",
				"sex":""
			},
			"Frito":{
				"breed":"",
				"sex":""
			},
			"Furby":{
				"breed":"",
				"sex":""
			},
			"Guster":{
				"breed":"",
				"sex":""
			},
			"Hayley":{
				"breed":"",
				"sex":""
			},
			"Holland":{
				"breed":"",
				"sex":""
			},
			"Honeycomb":{
				"breed":"",
				"sex":""
			},
			"Melba":{
				"breed":"",
				"sex":""
			},
			"Negg":{
				"breed":"",
				"sex":""
			},
			"Oreo":{
				"breed":"",
				"sex":""
			},
			"Perry":{
				"breed":"",
				"sex":""
			},
			"Popsicle":{
				"breed":"",
				"sex":""
			},
			"Razz":{
				"breed":"",
				"sex":""
			},
			"Reindeer":{
				"breed":"",
				"sex":""
			},
			"Reual":{
				"breed":"",
				"sex":""
			},
			"Romaine":{
				"breed":"",
				"sex":""
			},
			"Scurvy":{
				"breed":"",
				"sex":""
			},
			"Seagull":{
				"breed":"",
				"sex":""
			},
			"Slater":{
				"breed":"",
				"sex":""
			},
			"Sushi":{
				"breed":"",
				"sex":""
			},
			"Tocca":{
				"breed":"",
				"sex":""
			}
		},
		"hex":{
			"Cirrus":{
				"breed":"",
				"sex":""
			},
			"Moonlight":{
				"breed":"",
				"sex":""
			},
			"Parks":{
				"breed":"",
				"sex":""
			},
			"Toxic":{
				"breed":"",
				"sex":""
			}
		}
	},
	"other":{
		"Salmia":{
				"breed":"Pig",
				"sex":""
		},
		"Patrol":{
				"breed":"Cow",
				"sex":"",
				"origin":""
		}
	}
}

$(document).ready(function(){
	//console.log(pets["dogs"].purebred["Arroz"]);
	$('#pet_info').hide();
	//pure dogs
	for (let i = 0; i < pureDogs.length; i++) {
		$("#pure_dog_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', pdLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+pureDogs[i]+'.png')
									.addClass('img')
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
		setPetInfo(thisPet);
	}

	function setPetInfo(name){
		var thisPet;
		switch(parseInt(titles.indexOf($('.page_title').text()))){
			case 0:
				thisPet = pets["dogs"].purebred[name];
				break;
			case 1:
				thisPet = pets["dogs"].bred[name];
				break;
			case 2:
				thisPet = pets["dogs"].hex[name];
				break;
			case 3:
				thisPet = pets["cats"].purebred[name];
				break;
			case 4:
				thisPet = pets["cats"].bred[name];
				break;
			case 5:
				thisPet = pets["cats"].hex[name];
				break;
			case 6:
				thisPet = pets["other"][name];
				break;
		}
		$('#info').text("Breed: "+thisPet.breed);
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