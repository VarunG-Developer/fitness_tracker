<?php
include 'db.php';

$sql = "SELECT * FROM activities";
$result = $conn->query($sql);

$activities = array();
while($row = $result->fetch_assoc()) {
    $activities[] = $row;
}

echo json_encode($activities);

$conn->close();
?>
