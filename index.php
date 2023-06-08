<?php
// Connect to the database (assuming MySQL here)
$host = 'localhost';
$user = 'username';
$password = "";
$database = 'timetable_db';

$connection = mysqli_connect($host, $user, $password, $database);
if (!$connection) {
    die('Database connection failed: ' . mysqli_connect_error());
}

// Query the database to fetch timetable data
$query = "SELECT * FROM timetable";
$result = mysqli_query($connection, $query);
if (!$result) {
    die('Database query failed: ' . mysqli_error($connection));
}

// Create an empty timetable array
$timetable = array();

// Loop through the result set and populate the timetable array
while ($row = mysqli_fetch_assoc($result)) {
    $day = $row['day'];
    $time = $row['time'];
    $subject = $row['subject'];

    // Add the subject to the timetable array
    $timetable[$day][$time] = $subject;
}

// Print the timetable
foreach ($timetable as $day => $schedule) {
    echo "Day: " . $day . "<br>";
    foreach ($schedule as $time => $subject) {
        echo $time . ": " . $subject . "<br>";
    }
    echo "<br>";
}

// Close the database connection
mysqli_close($connection);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form >
        <label >Day</label>
        <input type="text">
        <label >Time</label>
        <input type="text">
        <label >Subject</label>
        <input type="text"> 
        <button>submit</button>
    </form>
</body>
</html>
