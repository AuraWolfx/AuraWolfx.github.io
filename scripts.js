let petz = ['Alastar','Arroz','Baby','Brandy','Caine','Cici','Daisy','Fame','Feliz','French Fry','Lights','Wren','Aster','Bubonic','Celine','Coolaid','Duffie','Dutch','Eddie','Eightball','Florence','Glancy','Hotpie','Ixika','Leche','Marmalade','Niles','Piper','Portia','Primrose','River','Setter','Spice','Ty','Vivian','Whiskey','Zapato','Blitzen','Blueberry','Custard','Georgia','Ginkgo','Goji','Gumball','Harbor','July','Kyle','Meteor','Opal','Petal','Ross','Apricot','Dinosaur','Mioka','Pepper','Ragu','Aralu','Beat','Bills','Bonnie Blue','Bristol','Buttermilk','Cake','Carlisle','Cigar','Corteo','Creamsicle','Dandy','Dark','Dip\'n\'dots','Frito','Furby','Guster','Hayley','Holland','Honeycomb','Melba','Negg','Oreo','Perry','Popsicle','Razz','Reindeer','Reual','Romaine','Scurvy','Seagull','Slater','Sushi','Tocca','Cirrus','Moonlight','Parks','Toxic','Salmia','Patrol'];
let petDivs = ['#dog_list', '#cat_list', '#other_list'];
let titles = ['Dogs', 'Cats','Other Pets', 'Single Adoptions', 'Litter Adoptions', 'About', 'Contact', 'Home'];
var stickers = './pics/stickers/';
var heads = './pics/heads/';
var bigheads = './pics/heads/big/';
let crewOpen = false;
let adoptOpen = false;
let dogs = {
	'Alastar':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Arroz':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Baby':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Brandy':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Caine':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Cici':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Daisy':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Fame':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Feliz':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'French_Fry':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Lights':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Wren':{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	'Aster':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Bubonic':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Celine':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Coolaid':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Duffie':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Dutch':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Eddie':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Eightball':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Florence':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Glancy':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Hotpie':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Ixika':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Leche':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Marmalade':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Niles':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Piper':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Portia':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Primrose':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'River':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Setter':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Spice':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Ty':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Vivian':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Whiskey':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Zapato':{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	'Blitzen':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Blueberry':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Custard':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Georgia':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Ginkgo':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Goji':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Gumball':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Harbor':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'July':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Kyle':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Meteor':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Opal':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Petal':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	'Ross':{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	}
};
let cats = {
	"Apricot":{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	"Dinosaur":{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	"Mioka":{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	"Pepper":{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	"Ragu":{
		"breed":"",
		"sex":"",
		"type":"purebred",
		"origin":""
	},
	"Aralu":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Beat":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Bills":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Bonnie_Blue":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Bristol":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Buttermilk":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Cake":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Carlisle":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Cigar":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Corteo":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Creamsicle":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Dandy":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Dark":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Dip-n-dots":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Frito":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Furby":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Guster":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Hayley":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Holland":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Honeycomb":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Melba":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Negg":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Oreo":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Perry":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Popsicle":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Razz":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Reindeer":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Reual":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Romaine":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Scurvy":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Seagull":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Slater":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Sushi":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Tocca":{
		"breed":"",
		"sex":"",
		"type":"bred",
		"origin":""
	},
	"Cirrus":{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	"Moonlight":{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	"Parks":{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	},
	"Toxic":{
		"breed":"",
		"sex":"",
		"type":"hex",
		"origin":""
	}
};
let other = {
	"Salmia":{
		"breed":"Pig",
		"sex":"",
		"type":"",
		"origin":""
	},
	"Patrol":{
		"breed":"Cow",
		"sex":"",
		"type":"",
		"origin":""
	}
};

$(document).ready(function(){
	for(let d in dogs){
		$("#dog_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', d)
								.append($('<img>')
									.attr('src', heads+d.replaceAll("_"," ").replaceAll("-","'")+'.png')
									.addClass('img')
									.addClass('unselectable')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	for(let c in cats){
		$("#cat_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', c)
								.append($('<img>')
									.attr('src', heads+c.replaceAll("_"," ").replaceAll("-","'")+'.png')
									.addClass('img')
									.addClass('unselectable')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}

	for(let o in other){
		$("#other_list").append($('<div>')
							.attr('class', 'pet')
							.attr('id', o)
								.append($('<img>')
									.attr('src', heads+o.replaceAll("_"," ").replaceAll("-","'")+'.png')
									.attr('class', 'img')
									.addClass('unselectable')
									.attr('onerror', 'this.onerror=null; this.src=\'pics/missing.png\''))
		);
	}
	$("#filter").hide();

	$('#dog').click(function(){showCrew(0)});
	$('#cat').click(function(){showCrew(1)});
	$('#oth').click(function(){showCrew(2)});
	$('#singles').click(function(){hideCrew(3)});
	$('#litters').click(function(){hideCrew(4)});
	$('#about').click(function(){hideCrew(5)});
	$('#contact').click(function(){hideCrew(6)});
	$('#home').click(function(){hideCrew(7)});

	function showCrew(id){
		$('#pet_list').css('display', '');
		$("#petName").text('Select a pet!');
		$('#expanded').hide();
		$('#home_page').hide();
		$('.page_title').text(titles[id]);
		if(id==0 || id==1){
			$("#filter").show();
			document.getElementById('filter').value="All";
			resetFilter();
		}else{
			$("#filter").hide();
		}
		for(i of petDivs)
			if(i==petDivs[id]){
				//console.log(i);
				$(i).css('display', '');
			}else{
				//console.log(i);
				$(i).css('display', 'none');
			}
	}
	function hideCrew(id){
		$('#pet_list').css('display', 'none');
		$('.page_title').text(titles[id]);
		$("#filter").hide();
		if(id==7)$('#home_page').show();
	}

	$(".pet").click(function(){
		$('#pet_info').show();
		showImage($(this).attr('id'));
	});

	function showImage(id){
		var filename = stickers+id.replaceAll("_"," ").replaceAll("-","'")+'.png';
		$('#expanded').show();
		$("#expanded").attr('src', filename).attr('onerror', 'this.onerror=null; this.src=\'pics/missing_big.png\'');
		$("#petName").text(id.replaceAll("_"," ").replaceAll("-","'"));
		setPetInfo(id);
	}

	function setPetInfo(name){
		var thisPet;
		switch(parseInt(titles.indexOf($('.page_title').text()))){
			case 0:
				thisPet = dogs[name];
				break;
			case 1:
				thisPet = cats[name];
				break;
			case 2:
				thisPet = other[name];
				break;
		}
		$('#info').text("Breed: "+thisPet.breed);
	}

	
});

function filterPets(){
	var selected = document.getElementById("filter").value.toLowerCase();
	var page = document.getElementById("page_title").innerHTML;
	if(page=="Dogs"){
		setFilter(dogs, selected);
	}else if(page=="Cats"){
		setFilter(cats, selected);
	}
}

function resetFilter(){
	for(let d in dogs){
		$('#'+d).fadeIn(0, 'linear');
			$('#'+d).css('width', '96px');
			$('#'+d).css('margin-left', '5px');
			$('#'+d).css('margin-right', '5px');
			$('#'+d).css('border', '3px solid var(--c1)');
	}
	for(let c in cats){
		$('#'+c).fadeIn(0, 'linear');
			$('#'+c).css('width', '96px');
			$('#'+c).css('margin-left', '5px');
			$('#'+c).css('margin-right', '5px');
			$('#'+c).css('border', '3px solid var(--c1)');
	}
}

function setFilter(arr, selected){
	for(let a in arr){
		if(selected=="all"){
			$('#'+a).fadeIn(500, 'linear');
			$('#'+a).css('width', '96px');
			$('#'+a).css('margin-left', '5px');
			$('#'+a).css('margin-right', '5px');
			$('#'+a).css('border', '3px solid var(--c1)');
		}else{
			if(arr[a].type!=selected){
				$('#'+a).fadeOut(500, 'linear');
				$('#'+a).css('width', '0');
				$('#'+a).css('margin-left', '0');
				$('#'+a).css('margin-right', '0');
				$('#'+a).css('border', '0');
			}else{
				$('#'+a).fadeIn(500, 'linear');
				$('#'+a).css('width', '96px');
				$('#'+a).css('margin-left', '5px');
				$('#'+a).css('margin-right', '5px');
				$('#'+a).css('border', '3px solid var(--c1)');
			}
		}
	}
}

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
		document.getElementById("crewOpts").style.height = "110px";
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