<?php
header('Content-Type: application/json');
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

$sqlQuery = "SELECT p_name,p_qty FROM companyprodmultivalued ORDER BY p_name";

$result = mysqli_query($conn,$sqlQuery);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

mysqli_close($conn);

echo json_encode($data);
?>