var basetotal = 2200;
var workingtotal = basetotal;
var sofar = 0;
var toadd = 0;
var level=0;

var exerciselevel = 0;
var exercisetime = 0;

window.onload = function() {

	document.getElementById("target").textContent=basetotal;

	$("#waterlevel").submit(function(e) {
		e.preventDefault();
		// var isnumber = Number(document.waterlevel.fill.value);

		if (isNaN(document.waterlevel.fill.value)) {
			alert("Please enter a number")
			document.getElementById("fill").value=" ";
		} else {
			getValue();
			fillcup();
			document.getElementById("fill").value=" ";
		}
		return false;
	});

		$("#exercise").submit(function(e) {
		e.preventDefault();
		// var isnumber = Number(document.waterlevel.fill.value);

		// if (isNaN(document.waterlevel.fill.value)) {
		// 	alert("Please enter a number")
		// 	document.getElementById("fill").value=" ";
		// } else {
		// 	getValue();
		// 	fillcup();
		// 	document.getElementById("fill").value=" ";
		// }		

		var q = document.getElementById("Exercise");
		exerciselevel = q.options[q.selectedIndex].textContent;

		switch(exerciselevel) {
    		case "Heavy":
        		workingtotal = workingtotal + (30 * exercisetime);
        		break;
    		case "Moderate":
        		workingtotal = workingtotal + (20 * exercisetime);
        		break;
        	case "Light":
        		workingtotal = workingtotal + (30 * exercisetime);
        }
        // document.getElementById("target").textContent=basetotal;
        fillcup();
        document.getElementById("Exercise").value = "";
        document.getElementById("content").value = "0";

		// alert("You have completed " + exerciselevel + " exercise for " + exercisetime + " minutes.");
		return false;
	});
}

function getValue()
{	
	toadd = parseInt(document.waterlevel.fill.value);
	sofar=sofar + toadd;
	document.getElementById("sofar").textContent=sofar;

	



}

function fillcup()
{
		level = Math.round(sofar / workingtotal * 100);

		if(typeof level == "string") {
		alert("That's a string not a number you plum")
		} 
		document.getElementById("percentage").textContent=level;
		if (level > 100) {
			level = 100;
		}
		$('.water').animate({
        	height: level + '%'
    	}, 1000)
}

function updateSpinner(obj)
{
    var contentObj = document.getElementById("content");
    var value = parseInt(contentObj.value);
    if(obj.id == "down") {
    	if (value <= 0) {
    		value = 0;
    	} else {
        	value = value-5;
    	}
    } else {
        value = value+5;
    }
    contentObj.value = value;
    exercisetime = value;
}