var basetotal = 2200;
var sofar = 0;
var toadd = 0;


window.onload = function() {
	// if (window.jQuery) {
	// 	alert("bangin");
	// }
	// else {
	// 	alert("balls")
	// }
	document.getElementById("target").textContent=basetotal;
}

function getValue()
{	
	toadd = parseInt(document.waterlevel.fill.value);
	sofar=sofar + toadd;

	alert("So far you've had " + sofar + " millitres of water");
	var level=sofar / basetotal * 100;
	alert("This is " + level + "% of your goal")
	// var level=document.waterlevel.fill.value;
	// alert(level);
	fillcup(parseInt(level,10));
	// document.getElementById("water").style.height = level + "%";
}

$(function fillcup(level)
{
	$("#waterlevel").submit(function(level) {
		level=document.waterlevel.fill.value;
		
		$('.water').animate({
        	height: level + '%'
    	}, 1000)

		return false;
	});
})