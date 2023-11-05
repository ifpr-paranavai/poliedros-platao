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
$acertos = [];
$data = [];

//verifica se os campos estão preenchidos e/ou corretos
if (empty($_POST['nFaces']) && $_POST['botao'] == "enviar") {
    $errors['nFaces'] = 'Campo vazio.';
} else if ($_POST['nFaces'] != $resp[0]  && !empty($_POST['nFaces'])) {
    $errors['nFaces'] = 'Resposta incorreta.';
}else if($_POST['nFaces'] == $resp[0]){
    $acertos['nFaces'] = 'Resposta correta.';
}

if (empty($_POST['nArestas']) && $_POST['botao'] == "enviar") {
    $errors['nArestas'] = 'Campo vazio.';
} else if ($_POST['nArestas'] != $resp[1]  && !empty($_POST['nArestas'])) {
    $errors['nArestas'] = 'Resposta incorreta.';
}else if($_POST['nArestas'] == $resp[1]){
    $acertos['nArestas'] = 'Resposta correta.';
}

if (empty($_POST['nVertices']) && $_POST['botao'] == "enviar") {
    $errors['nVertices'] = 'Campo vazio.';
} else if ($_POST['nVertices'] != $resp[2]  && !empty($_POST['nVertices'])) {
    $errors['nVertices'] = 'Resposta incorreta.';
}else if($_POST['nVertices'] == $resp[2]){
    $acertos['nVertices'] = 'Resposta correta.';
}

if (empty($_POST['somaAngs']) && $_POST['botao'] == "enviar") {
    $errors['somaAngs'] = 'Campo vazio.';
} else if ($_POST['somaAngs'] != $resp[3] && !empty($_POST['somaAngs'])) {
    $errors['somaAngs'] = 'Resposta incorreta.';
}else if($_POST['somaAngs'] == $resp[3]){
    $acertos['somaAngs'] = 'Resposta correta.';
}

//armazena os dados a serem enviados de volta ao JavaScript
if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
    $data['forma'] = $_POST['forma'];
    $data['botao'] = $_POST['botao'];
    $data['acertos'] = $acertos;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
    $data['forma'] = $_POST['forma'];
    $data['botao'] = $_POST['botao'];
    $data['acertos'] = $acertos;
}

//acho que retorna os valores para o form.js
echo json_encode($data);
?>