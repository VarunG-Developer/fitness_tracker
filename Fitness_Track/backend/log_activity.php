<?php
include 'db.php';

$type = $_POST['type'];
$duration = $_POST['duration'];
$date = $_POST['date'];

$sql = "INSERT INTO activities (type, duration, date) VALUES ('$type', '$duration', '$date')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
