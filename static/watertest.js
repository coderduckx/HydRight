var basetotal = 2200;
var sofar = 0;
var toadd = 0;
var level=0;

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
}

function getValue()
{	
	toadd = parseInt(document.waterlevel.fill.value);
	sofar=sofar + toadd;
	document.getElementById("sofar").textContent=sofar;

	level = Math.round(sofar / basetotal * 100);

	if(typeof level == "string") {
		alert("That's a string not a number silly!")
	} document.getElementById("percentage").textContent=level;

}

function fillcup()
{

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
}