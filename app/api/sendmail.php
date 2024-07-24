<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure you have PHPMailer installed via Composer

// Set your email credentials
$user_email = getenv('NEXT_PUBLIC_MAIL_SEND') ?? 'meetri.test@gmail.com';
$password = getenv('NEXT_PUBLIC_MAIL_PASSWORD') ?? 'sjfvznswfdkodxic';

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['message' => 'Invalid input']);
    exit;
}

$name = $data['name'] ?? '';
$subject = $data['subject'] ?? '';
$message = $data['message'] ?? '';
$email = $data['email'] ?? '';

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = $user_email;
    $mail->Password = $password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    // Sender and recipient settings
    $mail->setFrom($email, $name);
    $mail->addAddress('meetri.test@gmail.com');
    $mail->addAddress('rarora@voyagency.travel');
    $mail->addAddress('vchhabra@voyagency.travel');
    $mail->addAddress('amit.rawat@meetri.in');

    // Email content
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "
    <table style='width:100%; border-collapse: collapse;'>
        <tr>
            <td style='padding: 10px 0;'><b>Hello Team Voyagency,</b></td>
        </tr>
        <tr><td style='padding: 10px 0;'></td></tr>
        <tr>
            <td style='padding: 10px 0;'><b>Following are the details of the filled contact form:</b></td>
        </tr>
        <tr><td style='padding: 10px 0;'></td></tr>
        <tr><td style='padding: 10px 0;'><b>Name:</b> {$name}</td></tr>
        <tr><td style='padding: 10px 0;'><b>Email:</b> {$email}</td></tr>
        <tr><td style='padding: 10px 0;'><b>Subject:</b> {$subject}</td></tr>
        <tr><td style='padding: 10px 0;'><b>Message:</b> {$message}</td></tr>
        <tr><td style='padding: 10px 0;'></td></tr>
        <tr><td style='padding: 10px 0;'><b>Take Action accordingly!</b></td></tr>
        <tr><td style='padding: 10px 0;'><b>Have a nice day!</b></td></tr>
    </table>
    ";

    // Send the email
    $mail->send();

    // Send a confirmation email to the sender
    $mail->clearAddresses();
    $mail->addAddress($email);
    $mail->Subject = $subject;
    $mail->Body = "
    <p>Thank you for contacting us!</p>
    <br/>
    <p>We have received your message and will get back to you shortly.</p>
    ";
    $mail->send();

    // Return success response
    echo json_encode(['message' => 'Success: email was sent', 'status' => 'success']);

} catch (Exception $e) {
    // Return error response
    http_response_code(500);
    echo json_encode(['message' => 'COULD NOT SEND MESSAGE', 'status' => 'failed']);
}
?>
