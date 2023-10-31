<?php

//escolhe as respostas certas para o form que fez submit
switch ($_POST['forma']) {
    case "tetra":
        $resp = [4, 6, 4, 720];
        break;
    case "hexa":
        $resp = [6, 12, 8, 2160];
        break;
    case "octa":
        $resp = [8, 12, 6, 1440];
        break;
    case "dodec":
        $resp = [12, 30, 20, 6480];
        break;
    case "ico":
        $resp = [20, 30, 12, 3600];
        break;
}


$errors = [];
$data = [];

//verifica se os campos estão preenchidos e/ou corretos
if (empty($_POST['nFaces'])) {
    $errors['nFaces'] = 'Campo vazio.';
} else if ($_POST['nFaces'] != $resp[0]) {
    $errors['nFaces'] = 'Resposta incorreta.';
}

if (empty($_POST['nArestas'])) {
    $errors['nArestas'] = 'Campo vazio.';
} else if ($_POST['nArestas'] != $resp[1]) {
    $errors['nArestas'] = 'Resposta incorreta.';
}

if (empty($_POST['nVertices'])) {
    $errors['nVertices'] = 'Campo vazio.';
} else if ($_POST['nVertices'] != $resp[2]) {
    $errors['nVertices'] = 'Resposta incorreta.';
}

if (empty($_POST['somaAngs'])) {
    $errors['somaAngs'] = 'Campo vazio.';
} else if ($_POST['somaAngs'] != $resp[3]) {
    $errors['somaAngs'] = 'Resposta incorreta.';
}

//armazena os dados a serem enviados de volta ao JavaScript
if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
    $data['forma'] = $_POST['forma'];
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
    $data['forma'] = $_POST['forma'];
}

//acho que retorna os valores para o form.js
echo json_encode($data);
?>