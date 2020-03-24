<?php 
echo '<!DOCTYPE html>
<html>
<head>
	<title>Contact Form</title>
	<style>
	body {
		display: block;
		text-align: center;
		padding-top: 100px;
	}

	input {
		padding: 10px;
	}

	textarea {
		padding: 10px;
	}

	button {
		padding: 10px;

	}

	</style>
</head>
<body>';

if (!empty($_POST)) {

$userName = $_POST["name"];
$userEmail = $_POST["email"];
$userPhone = $_POST["phone"];
$userMessage = $_POST["message"];

$ourFileName = $userName.".txt";
$ourFileHandle = fopen($ourFileName, 'w') or die("can't open file");
$txtName = "Name: ".$userName."\n";
fwrite($ourFileHandle, $txtName);
$txtEmail = "Email: ".$userEmail."\n";
fwrite($ourFileHandle, $txtEmail);
$txtPhone = "Phone Number: ".$userPhone."\n";
fwrite($ourFileHandle, $txtPhone);
$txtMessage = "Message: ".$userMessage."\n";
fwrite($ourFileHandle, $txtMessage);
fclose($ourFileHandle);


echo "Contact Message Submitted. Thank you!";

}

echo '<h1> Contact Form </h1>';

echo '<form method="post" action="">
<label>Name</label><br>
<input type="text" name="name" placeholder="Your name" required><br><br>
<label>Email</label><br>
<input type="text" name="email" placeholder="Your email" required><br><br>
<label>Phone</label><br>
<input type="text" name="phone" placeholder="Your phone number" required><br><br>
<label>Message</label><br>
<textarea name="message" row="15" required> </textarea><br><br>
<input type="submit" name"submit">
</form>';

echo '</body>
</html>';


 ?>