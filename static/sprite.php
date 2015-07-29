<?php
$Weight =$_POST['Weight'];
$Username =$_POST['Username'];
$Age =$_POST['Age'];


//work out how much water the person should be drinking

$basetotal = 0;
switch ($Age) {
	case "under 16":
		$basetotal = $Weight * 0.045; 
		break;
	case "16-30":
		$basetotal = $Weight * 0.040;
		break;
	case "31-54":
		$basetotal = $Weight * 0.035;
		break;
	case "55-64":
		$basetotal = $Weight * 0.030;
		break;
	case "64+":
		$basetotal = $Weight * 0.025;
		break;
}

//output the relevant information to the page

//echo $Age;
//echo $Weight;
//echo $Username;
echo "Hello " . $Username . ". You should be taking in " . $basetotal . " litres of water per day.";
?>
