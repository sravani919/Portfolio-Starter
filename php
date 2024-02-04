<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];
    $address = $_POST["address"];

    $to = "sravanichinni855@gmail.com"; // Replace with your email address
    $subject = "New Form Submission";
    $message = "Name: $name\nEmail: $email\nMobile: $mobile\nAddress: $address";

    // Send the email
    mail($to, $subject, $message);

    // Redirect the user after submission (optional)
    header("Location: thank_you.html"); // Replace with your thank you page
    exit();
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($_POST)) {
        $_POST = json_decode(file_get_contents('php://input'), true);
    }
    
}
?>
