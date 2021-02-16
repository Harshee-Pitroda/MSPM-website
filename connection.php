<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if($conn)
{
	
}
else{
	die("Connection Failed".mysqli_connect_error());
	}

?>