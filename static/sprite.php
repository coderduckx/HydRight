<?php
$Weight =$_POST['Weight'];
$Username =$_POST['Username'];
$Age =$_POST['Age'];


//work out how much water the person should be drinking

$Basetotal = 0;
switch ($Age) {
	case "under 16":
		$Basetotal = $Weight * 0.045; 
		break;
	case "16-30":
		$Basetotal = $Weight * 0.040;
		break;
	case "31-54":
		$Basetotal = $Weight * 0.035;
		break;
	case "55-64":
		$Basetotal = $Weight * 0.030;
		break;
	case "64+":
		$Basetotal = $Weight * 0.025;
		break;
}

//output the relevant information to the page

//echo $Age;
//echo $Weight;
//echo $Username;
echo "Hello " . $Username . ". You should be taking in " . $Basetotal . " litres of water per day.";

header("Location: http://yrs15.aimeec.co.uk/Sprite?Username=$Username&Basetotal=$Basetotal");
?>
