<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$url = "https://api-lojaonline.onrender.com/public/produtos";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "User-Agent: Proxy-PHP"
]);
// Ignora validação SSL (para testes locais)
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($response === false || $httpcode !== 200) {
    http_response_code(500);
    echo json_encode([
        "error" => "Erro ao buscar dados da API",
        "http_code" => $httpcode,
        "detalhe" => $error,
        "resposta" => $response
    ]);
} else {
    echo $response;
}
