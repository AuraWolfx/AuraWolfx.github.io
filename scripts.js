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
let titles = ['Purebred Dogs','Bred Dogs','Hexed Dogs','Purebred Cats','Bred Cats','Hexed Cats','Other Pets', 'Single Adoptions', 'Litter Adoptions', 'About', 'Contact', 'Home'];
var stickers = './pics/stickers/';
var heads = './pics/heads/';
var bigheads = './pics/heads/big/';
let crewOpen = false;
let adoptOpen = false;
const pets = {
	"dogs":{
		"purebred":{
			"Alastar":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Arroz":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Baby":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Brandy":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Caine":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Cici":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Daisy":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Fame":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Feliz":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"French Fry":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Lights":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Wren":{
				"breed":"",
				"sex":"",
				"origin":""
			}
		},
		"bred":{
			"Aster":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Bubonic":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Celine":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Coolaid":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Duffie":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Dutch":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Eddie":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Eightball":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Florence":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Glancy":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Hotpie":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Ixika":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Leche":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Marmalade":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Niles":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Piper":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Portia":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Primrose":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"River":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Setter":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Spice":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Ty":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Vivian":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Whiskey":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Zapato":{
				"breed":"",
				"sex":"",
				"origin":""
			}
		},
		"hex":{
			"Blitzen":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Blueberry":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Custard":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Georgia":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Ginkgo":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Goji":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Gumball":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Harbor":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"July":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Kyle":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Meteor":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Opal":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Petal":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Ross":{
				"breed":"",
				"sex":"",
				"origin":""
			}
		}
	},
	"cats":{
		"purebred":{
			"Apricot":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Dinosaur":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Mioka":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Pepper":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Ragu":{
				"breed":"",
				"sex":"",
				"origin":""
			}
		},
		"bred":{
			"Aralu":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Beat":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Bills":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Bonnie Blue":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Bristol":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Buttermilk":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Cake":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Carlisle":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Cigar":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Corteo":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Creamsicle":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Dandy":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Dark":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Dip'n'dots":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Frito":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Furby":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Guster":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Hayley":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Holland":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Honeycomb":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Melba":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Negg":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Oreo":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Perry":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Popsicle":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Razz":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Reindeer":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Reual":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Romaine":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Scurvy":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Seagull":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Slater":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Sushi":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Tocca":{
				"breed":"",
				"sex":"",
				"origin":""
			}
		},
		"hex":{
			"Cirrus":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Moonlight":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Parks":{
				"breed":"",
				"sex":"",
				"origin":""
			},
			"Toxic":{
				"breed":"",
				"sex":"",
				"origin":""
			}
		}
	},
	"other":{
		"Salmia":{
				"breed":"Pig",
				"sex":"",
				"origin":""
		},
		"Patrol":{
				"breed":"Cow",
				"sex":"",
				"origin":""
		}
	}
}

$(document).ready(function(){
	//pure dogs
	for (let i = 0; i < pureDogs.length; i++) {
		$("#pure_dog_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', pdLookup[i].toString())
								.append($('<img>')
									.attr('src', heads+pureDogs[i]+'.png')
									.addClass('img')
									.addClass('unselectable')
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
									.addClass('unselectable')
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
									.addClass('unselectable')
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
									.addClass('unselectable')
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
									.addClass('unselectable')
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
									.addClass('unselectable')
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
									.addClass('unselectable')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
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
	$('#contact').click(function(){hideCrew(10)});
	$('#home').click(function(){hideCrew(11)});

	function showCrew(id){
		$('#crew').css('display', 'none');
		$('#pet_list').css('display', '');
		//$('#pet_info').hide();
		$("#petName").text('Select a pet!');
		$('#expanded').hide();
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

	$(".pet").click(function(){
		$('#pet_info').show();
		showImage($(this).attr('id'));
	});

	function showImage(id){
		var thisPet = petz[id];
		var filename = stickers+thisPet+'.png';
		$('#expanded').show();
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

	
});
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	crewOpen = false;
	adoptOpen = false;
	closeCrew();
	closeAdopt();
}

function openCrew(){
	crewOpen=!crewOpen;
	if(crewOpen){
		document.getElementById("crewOpts").style.height = "310px";
		document.getElementById("crewOpts").style.padding = "10px 0";
		document.getElementById("crewLbl").innerHTML = "Crew&#9662;";
	}else{
		closeCrew();
	}
}

function closeCrew(){
	document.getElementById("crewOpts").style.height = "0";
	document.getElementById("crewOpts").style.padding = "0";
	document.getElementById("crewNav").style.marginTop = "0";
	document.getElementById("crewLbl").innerHTML = "Crew&#9656;";
}

function openAdopt(){
	adoptOpen=!adoptOpen;
	if(adoptOpen){
		document.getElementById("adoptOpts").style.height = "80px";
		document.getElementById("adoptLbl").innerHTML = "Adoptions&#9662;";
	}else{
		closeAdopt();
	}
}

function closeAdopt(){
	document.getElementById("adoptOpts").style.height = "0";
	document.getElementById("adoptLbl").innerHTML = "Adoptions&#9656;";
}