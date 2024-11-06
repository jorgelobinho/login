const usuariosValidos = {
    "ale@cesupa.br": { senha: "123123", redirecionar: "https://www.cesupa.br" },
    "pedro@giroto.com": { senha: "223344", redirecionar: "https://www.detran.pa.gov.br" },
    "isaac@java.com": { senha: "asdasd", redirecionar: "https://www.idopterlabs.com.br" }
};

function verificarLogin() {
 
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const emailError = document.getElementById("emailError");
    const senhaError = document.getElementById("senhaError");

    emailError.style.display = "none";
    senhaError.style.display = "none";

    if (usuariosValidos[email]) {
        if (usuariosValidos[email].senha === senha) {

            window.location.href = usuariosValidos[email].redirecionar;

        } else {
    
            senhaError.textContent = "Senha incorreta.";
            senhaError.style.display = "block";
        }
    } else {
 
        emailError.textContent = "Email não encontrado.";
        emailError.style.display = "block";
    }
}