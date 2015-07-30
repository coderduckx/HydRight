window.onload = function() {
	if (window.jQuery) {
		alert("bangin");
	}
	else {
		alert("balls")
	}
}

function getValue()
{	
	var level=document.waterlevel.fill.value;
	// alert(level);
	fillcup(parseInt(level,10));
	// document.getElementById("water").style.height = level + "%";
}

$(function fillcup(level)
{
	$("#waterlevel").submit(function() {
		var level=document.waterlevel.fill.value;
		
		$('.water').animate({
        	height: level + '%'
    	}, 1000)

		return false;
	});
})