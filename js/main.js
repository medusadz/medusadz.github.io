$(document).ready(function(){
		
		setTimeout(function(){ document.getElementById("snow").style.top = 0; }, 500);
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	var controllerpin = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});
		//----------------------------------
var step = document.getElementsByClassName("steps");
var ligne = document.getElementsByClassName("lignes");
var txt = document.getElementsByClassName("text");

	for(i=0;i<=step.length;i++){
	var ourScene = new ScrollMagic.Scene({
		triggerHook: 0.2,
		triggerElement: step[i],
		reverse:false
	})
	
	.setClassToggle(step[i], 'active-step')
	.addTo(controller); 
	/*----------------------*/
	if(i<ligne.length){	
	var ourScene1 = new ScrollMagic.Scene({
		triggerHook: 0.2,
		triggerElement: step[i],
		reverse:false
	})
	
	.setClassToggle(ligne[i], 'active-ligne')
  
	.addTo(controller);
	}
	/*----------------------------*/
			var ourScene2 = new ScrollMagic.Scene({
				triggerHook: 0.2,
		triggerElement: step[i],
		reverse:false
	})
	
	.setClassToggle(txt[i], 'active-text')
  
	.addTo(controller);
		}

var pinningscene = new ScrollMagic.Scene({
	triggerElement: '#intro',
	duration : '100%',
	triggerHook : 0
})
.setPin('#intro', {pushFollowers: false})
.addTo(controller);
		// get all slides
		var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addTo(controllerpin);
		}
		
		/*-----------------------*/
	$('.project').each(function(){

		// build a scene
		var projectScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook:0.8,
			reverse: false
		})
		.setClassToggle(this.children[0], 'project_active') // add class to project01
		.addTo(controller);
		
		var projectScenetxt = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook:0.8,
			reverse: false
		})
		.setClassToggle(this.children[1], 'project_active') // add class to project01
		.addTo(controller);
	});
});
var vid = document.getElementById("myvideo");
//vid.loop = true; 
function album(){
	$('.pause')[0].style.height = "0";
	$('.pause')[0].style.padding = "0";
	$('#play')[0].style.display = "block";
vid.play = true; 
}
function hint(x) {
$('.hint')[x].style.display = "block";
}

function pause(){
	
if($('.hint')[0].style.display == "block"){$('.move')[0].onmousemove = "";}

}
function move() {
$('.move')[0].style.top = (Math.floor(Math.random() * 90) + 10) + "%";
$('.move')[0].style.left = (Math.floor(Math.random() * 90) + 1) + "%";
hint(1);
}