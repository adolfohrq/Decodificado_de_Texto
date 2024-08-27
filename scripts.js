function criptografar() {
    let texto = document.getElementById("input-text").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = textoCriptografado;
}

function descriptografar() {
    let texto = document.getElementById("input-text").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("output-text");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
