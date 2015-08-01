var queryObject = getQueryObject();
var basetotal = parseInt(queryObject.Basetotal);
var username = queryObject.Username;
console.log(queryObject);

var gender = queryObject.Gender;
console.log("it is a " + gender);
// var basetotal = parseInt(queryObject.Basetotal);
var sofar = 0;
var toadd = 0;
var level=0;

var exerciselevel = 0;
var exercisetime = 0;

window.onload = function() {
	if (gender == "female") {
		document.getElementById("man").src="static/woman.png";
	} else {
		document.getElementById("man").src="static/avatar.png";
	}

	console.log(queryObject.Weight);
	switch (queryObject.Age) {
		case "under 16":
			basetotal = queryObject.Weight * 45; 
			break;
		case "16-30":
			basetotal = queryObject.Weight * 40;
			break;
		case "31-54":
			basetotal = queryObject.Weight * 35;
			break;
		case "55-64":
			basetotal = queryObject.Weight * 30;
			break;
		case "65":
			basetotal = queryObject.Weight * 25;
			break;
		default:
			basetotal = 2600;
	}
	console.log("basetotal is " + basetotal);
	console.log("basetotal is " + basetotal);

	if (basetotal > 3000) {
		basetotal = 3000;
	}
	document.getElementById("target").textContent=basetotal;
	document.getElementById("username").textContent=username;

	$("#waterlevel").submit(function(e) {
		e.preventDefault();
		// var isnumber = Number(document.waterlevel.fill.value);

		if (isNaN(document.waterlevel.fill.value)) {
			alert("Please enter a number")
			document.getElementById("fill").value=" ";
		} else {
			getValue();

			console.log("person has entered " + toadd);
			console.log("throughout the day they have consumed" + sofar);

			fillcup();

			console.log("the man should be " + level + "% full");

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
		console.log(exerciselevel);

		if (exerciselevel != "Select level" && exercisetime == "0") {
			alert("Please enter how long you exercised for");
		} else {
		switch(exerciselevel) {
    		case "Heavy":
        		basetotal = basetotal + (30 * exercisetime);
        		break;
    		case "Moderate":
        		basetotal = basetotal + (20 * exercisetime);
        		break;
        	case "Light":
        		basetotal = basetotal + (30 * exercisetime);
        	case "Select level":
        		if (exercisetime < 0) {
        			alert("Select how hard you exercised, fool"); }
        		else {
        			alert("Would kinda help if you entered stuff");
        		}
        }}
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
		level = Math.round(sofar / basetotal * 100);

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

function emptycup()
{
	level = Math.round(level * 0.95);
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

function getQueryObject(parseCommas) {
    var queryString = location.search.slice(1).split('&');
    var queryObject = {};
    for (var i = 0; i < queryString.length; i++) {
        var param = queryString[i].split('=');
        if (param.length == 2) {
            var paramArray = param[1].split(',');
            if (parseCommas === true && paramArray.length > 1) {
                for (var j = 0; j < paramArray.length; j++) {
                    paramArray[j] = decodeURI(paramArray[j]);
                }
                queryObject[param[0]] = paramArray;
            } else {
                queryObject[param[0]] = decodeURI(param[1]);
            }
        }
    }
    return queryObject;
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
            emptycup();
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 0.2,
        display = $('#time');
    startTimer(fiveMinutes, display);
});



