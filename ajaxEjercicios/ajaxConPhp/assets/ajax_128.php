<?php
// ESTO NO VA A FUNCIONAR DADO QUE NO TENGO UN SERVIDOR PARA ENVIAR MAILS. ESTE DEBE ESTAR CONFIGURADO EN EL PUERTO 25
if(isset($_POST)){
  $name = $_POST['nombre'];
  $email = $_POST['email'];
  $asunto = $_POST['asunto'];
  $comment = $_POST['comentario'];

  $domain = $_SERVER['HTTP_HOST'];
  $to = 'yaritza.lizana.a@gmail.com';
  $subject = "Contacto desde el sitio $domain: $asunto";
  $message = "
  <h1>Te Amo Mucho!</h1>
  <p>$comment</p>
  ";
  // Buscar MIME, por default es text/plain
  $headers = "MIME-Version: 1.0 Content-Type: text/html; charset=utf-8 From: Enviado por el amor de tu vida (o eso aún cree) <no-reply@$domain>";
  $send = mail($to, $subject, $message, $headers); // Retorna booleano

  if($send){
    $response = [
      'ok' => true,
      'messaje' => 'Mensaje enviado'
    ];
  }else{
    $response = [
      'ok' => false,
      'messaje' => 'Hubó un error'
    ];
  };

  // PARA PODER USAR ESTE ARCHIVO DESDE UN SERVIDOR DISTINTO
  header('Access-Control-Allow-Origin: *'); // TAMBIÉN PUEDES ESPECIFICAR DOMINIO, https://www.google.cl/
  header('Content-type: application/json');
  
  echo json_encode($response);
  
};