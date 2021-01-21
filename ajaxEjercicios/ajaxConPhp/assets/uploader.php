<?php
ini_set('display_errors', '1');

// var_dump($_FILES);

// 'isset' Se utiliza para saber si existe una variable
if(isset($_FILES["file"])){
  $name = $_FILES["file"]["name"];
  $file = $_FILES["file"]["tmp_name"];
  $error = $_FILES["file"]["error"];
  $destino = "../files/$name";
  $upload = move_uploaded_file($file, $destino);

  if($upload){
    $response = array(
      'error' => false,
      'status' => http_response_code(200),
      'statusText' => "El archivo $name fue subido correctamente",
      'file' => $_FILES['file']
    );
  }else{
    $response = array(
      'error' => true,
      'status' => http_response_code(400),
      'statusText' => "Error al subir el archivo $name",
      'file' => $_FILES['file']
    );
  };
  echo json_encode($response);
}else{
  echo json_encode(array(
    'error' => true,
    'status' => http_response_code(400)
  ));
};
?>