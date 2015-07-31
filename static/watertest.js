var basetotal = 2200;
var sofar = 0;
var toadd = 0;
var level=0;


window.onload = function() {

	document.getElementById("target").textContent=basetotal;

	$("#waterlevel").submit(function(e) {
		e.preventDefault();

		getValue();
		fillcup();
		document.getElementById("fill").value=" ";
		return false;
	});
}

function getValue()
{	
	toadd = parseInt(document.waterlevel.fill.value);
	sofar=sofar + toadd;

	document.getElementById("sofar").textContent=sofar;
	level = Math.round(sofar / basetotal * 100);

	document.getElementById("percentage").textContent=level;

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