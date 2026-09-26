<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Accès non autorisé.");
}

$fullname = trim($_POST['fullname'] ?? '');
$email    = trim($_POST['email'] ?? '');
$phone    = trim($_POST['phone'] ?? '');
$subject  = trim($_POST['subject'] ?? '');
$message  = trim($_POST['message'] ?? '');

if (
    empty($fullname) ||
    empty($email) ||
    empty($phone) ||
    empty($subject) ||
    empty($message)
) {
    die("Veuillez remplir tous les champs.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Adresse email invalide.");
}

/*
 * ADRESSE QUI REÇOIT LES MESSAGES
 */
$destinataire = "cust_care@ejs-cm.com";

$objet = "Nouveau message - " . $subject;

$contenu = "
NOUVEAU MESSAGE DEPUIS LE SITE

Nom complet : $fullname
Email : $email
Téléphone : $phone
Objet : $subject

Message :
$message
";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail("cust_care@ejs-cm.com", $objet, $contenu, $headers)) {

    echo "Votre message a été envoyé avec succès.";

} else {

    echo "Une erreur est survenue lors de l'envoi du message.";

}
?>