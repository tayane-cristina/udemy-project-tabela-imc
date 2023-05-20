const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')
const enviar = document.querySelector('.enviar')
const result = document.querySelector('.result')

function IMCcalculator(userPeso,userAltura) {
    userPeso = peso.value;
    userAltura = altura.value

    const resultado = userPeso / (userAltura * userAltura)

    if (userPeso === "" || userAltura === ""){
        result.innerText = "Dados inválidos"
        result.style.backgroundColor = "rgba(255, 0, 0, 0.438)"
    } else if (resultado <= 18.5){
        result.innerText = `Seu IMC é de ${resultado.toFixed(2)} (abaixo do peso)`
        result.style.backgroundColor = "rgba(255, 0, 0, 0.438)"
    } else if (resultado > 18.5 && resultado <= 24.9){
        result.innerText = `Seu IMC é de ${resultado.toFixed(2)} (peso normal)`
        result.style.backgroundColor = "rgba(0, 128, 0, 0.582)"
    } else if (resultado > 24.9 && resultado <= 29.9){
        result.innerText = `Seu IMC é de ${resultado.toFixed(2)} (sobrepeso)`
        result.style.backgroundColor = "rgba(255, 166, 0, 0.548)"
    } else if (resultado > 30.0 && resultado <= 39.9) {
        result.innerText = `Seu IMC é de ${resultado.toFixed(2)} (obesidade)`
        result.style.backgroundColor = "rgba(255, 0, 0, 0.438)"
    } else {
        result.innerText = `Seu IMC é de ${resultado.toFixed(2)} (obesidade grave)`
        result.style.backgroundColor = "rgba(255, 0, 0, 0.438)"
    }
}

enviar.addEventListener('click', IMCcalculator)