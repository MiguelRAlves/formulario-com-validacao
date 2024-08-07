const botaoEnviar = document.getElementById("btn-enviar")
const inputs = document.querySelectorAll(".input")
const avisoCampoObrigatorio = document.querySelectorAll(".aviso")

botaoEnviar.addEventListener("click", () => {
    inputs.forEach((inputs, index) => {
        if (inputs.value !== "") {
            inputs.classList.remove("vazio")
            inputs.classList.add("preenchido")
            avisoCampoObrigatorio[index].classList.remove("mostrar")
        } else {
            inputs.classList.remove("preenchido")
            inputs.classList.add("vazio")
            avisoCampoObrigatorio[index].classList.add("mostrar")
        }
    })
})